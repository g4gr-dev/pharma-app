import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'El email es obligatorio';
        if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Logging in with:', formData);
            // Simulate login success - go to dashboard
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-container">
            {/* Header */}
            <div className="login-header">
                <button onClick={() => navigate(-1)} className="login-back-btn">
                    <span className="login-back-icon">←</span>
                </button>
                <span className="login-title">Iniciar Sesión</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
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

                <div className="login-forgot-password">
                    <span className="login-forgot-link">
                        ¿Olvidaste tu contraseña?
                    </span>
                </div>

                <div className="login-actions">
                    <Button type="submit" fullWidth>Iniciar Sesión</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
