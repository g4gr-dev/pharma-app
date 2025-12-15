import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Inicio', icon: '🏠', path: '/dashboard' },
        { label: 'Medicamentos', icon: '💊', path: '/medications' },
        { label: 'Videoconsultas', icon: '📹', path: '/consultations/request' },
        { label: 'Historial', icon: '📋', path: '/history' },
        { label: 'Salud', icon: '❤️', path: '/health' },
        { label: 'Credenciales', icon: '💳', path: '/credentials' },
        { label: 'Familia', icon: '👨‍👩‍👧‍👦', path: '/family' },
        { label: 'Pedidos', icon: '🛍️', path: '/orders/review' },
        { label: 'Perfil', icon: '👤', path: '/profile' },
    ];

    return (
        <div
            className="sidebar"
            style={{
                width: '250px',
                height: '100vh',
                backgroundColor: 'white',
                borderRight: '1px solid #E0E0E0',
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                top: 0
            }}
        >
            <div style={{ padding: '24px', borderBottom: '1px solid #f0f0f0' }}>
                <h1 className="text-primary text-bold" style={{ fontSize: '24px' }}>SaludApp</h1>
            </div>

            <div className="flex-grow" style={{ padding: '16px', overflowY: 'auto' }}>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
                    return (
                        <div
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className="flex align-center gap-md"
                            style={{
                                padding: '12px 16px',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                backgroundColor: isActive ? 'var(--color-primary-light)' : 'transparent',
                                color: isActive ? 'var(--color-primary)' : 'var(--color-text-main)',
                                marginBottom: '4px',
                                fontWeight: isActive ? '600' : '400'
                            }}
                        >
                            <span style={{ fontSize: '20px' }}>{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>

            <div style={{ padding: '16px', borderTop: '1px solid #f0f0f0' }}>
                <div
                    className="flex align-center gap-md"
                    style={{ padding: '12px 16px', cursor: 'pointer', color: '#666' }}
                    onClick={() => navigate('/preferences')}
                >
                    <span>⚙️</span>
                    <span>Configuración</span>
                </div>
                <div
                    className="flex align-center gap-md"
                    style={{ padding: '12px 16px', cursor: 'pointer', color: 'var(--color-danger)' }}
                    onClick={() => navigate('/welcome')}
                >
                    <span>🚪</span>
                    <span>Salir</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
