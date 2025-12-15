import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const WelcomeDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-screen h-full flex flex-col">
            {/* Header with Status Bar Placeholder (simulated) */}
            <div className="status-bar flex justify-center align-center" style={{ height: '44px', fontSize: '14px', fontWeight: 'bold' }}>
                9:41
            </div>

            <div className="content flex-col align-center justify-center flex-grow" style={{ padding: '0 24px' }}>
                {/* Logo Placeholder */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-primary-light)',
                    borderRadius: '20px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    color: 'white'
                }}>
                    +
                </div>

                <h1 style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center' }}>Bienvenido</h1>
                <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '48px' }}>
                    Gestiona tu salud y la de tu familia
                </p>

                <div className="actions w-full flex flex-col gap-md">
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

            <div className="footer text-center" style={{ padding: '24px' }}>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    ¿Ya tienes cuenta?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        style={{ color: 'var(--color-primary)', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        Iniciar sesión
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WelcomeDetails;
