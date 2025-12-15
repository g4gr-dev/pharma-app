import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

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
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Crear Cuenta</span>
                <div style={{ width: '24px' }}></div> {/* Spacer */}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-col flex-grow" style={{ padding: '0 24px 24px' }}>
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

                <div style={{ margin: '16px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                    />
                    <label htmlFor="terms" style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                        Acepto los Términos y Condiciones y Política de Privacidad
                    </label>
                </div>
                {errors.terms && <p style={{ color: 'var(--color-danger)', fontSize: '12px', marginTop: '-12px', marginBottom: '16px' }}>{errors.terms}</p>}

                <div style={{ marginTop: 'auto' }}>
                    <Button type="submit" fullWidth>Crear Cuenta</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccount;
