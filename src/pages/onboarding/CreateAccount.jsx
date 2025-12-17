import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './CreateAccount.css';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'El nombre es obligatorio';
        if (!formData.email) newErrors.email = 'El email es obligatorio';
        if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
        if (formData.password.length < 8) newErrors.password = 'Mínimo 8 caracteres';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
        if (!formData.terms) newErrors.terms = 'Debes aceptar los términos';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Account created:', formData);
            navigate('/profile');
        }
    };

    return (
        <div className="create-account-container">
            {/* Header */}
            <div className="create-account-header">
                <button onClick={() => navigate(-1)} className="create-account-back-btn">
                    <span className="create-account-back-icon">←</span>
                </button>
                <span className="create-account-title">Crear Cuenta</span>
                <div className="create-account-header-spacer"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="create-account-form">
                <Input
                    label="Nombre Completo"
                    name="fullName"
                    placeholder="Juan Pérez"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <Input
                    label="Contraseña"
                    name="password"
                    type="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <Input
                    label="Confirmar Contraseña"
                    name="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                />

                <div className="terms-container">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="terms-checkbox"
                    />
                    <label htmlFor="terms" className="terms-label">
                        Acepto los Términos y Condiciones y Política de Privacidad
                    </label>
                </div>
                {errors.terms && <p className="terms-error">{errors.terms}</p>}

                <div className="form-actions">
                    <Button type="submit" fullWidth>Crear Cuenta</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccount;
