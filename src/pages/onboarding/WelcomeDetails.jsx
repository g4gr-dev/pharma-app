import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './WelcomeDetails.css';

const WelcomeDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-screen">
            {/* Header with Status Bar Placeholder (simulated) */}
            <div className="status-bar">
                9:41
            </div>

            <div className="welcome-content">
                {/* Logo Placeholder */}
                <div className="logo-container">
                    +
                </div>

                <h1 className="welcome-title">Bienvenido</h1>
                <p className="welcome-subtitle">
                    Gestiona tu salud y la de tu familia
                </p>

                <div className="welcome-actions">
                    <Button
                        variant="email"
                        fullWidth
                        onClick={() => navigate('/register')}
                        icon="✉️"
                    >
                        Registrarse con Email
                    </Button>

                    <Button
                        variant="google"
                        fullWidth
                        onClick={() => console.log('Google Auth')}
                        icon="G"
                    >
                        Continuar con Google
                    </Button>

                    <Button
                        variant="facebook"
                        fullWidth
                        onClick={() => console.log('Facebook Auth')}
                        icon="f"
                    >
                        Continuar con Facebook
                    </Button>
                </div>
            </div>

            <div className="welcome-footer">
                <p className="welcome-login-text">
                    ¿Ya tienes cuenta?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className="login-link"
                    >
                        Iniciar sesión
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WelcomeDetails;
