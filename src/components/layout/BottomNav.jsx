import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Inicio', icon: '🏠', path: '/dashboard' },
        { label: 'Medicamentos', icon: '💊', path: '/medications' },
        { label: 'Consultas', icon: '📹', path: '/consultations' },
        { label: 'Perfil', icon: '👤', path: '/profile' },
        { label: 'Más', icon: '☰', path: '/menu' },
    ];

    return (
        <div
            className="bottom-nav flex justify-between align-center"
            style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                maxWidth: '375px', // Match mobile container
                backgroundColor: 'white',
                borderTop: '1px solid #E0E0E0',
                padding: '12px 16px',
                zIndex: 1000
            }}
        >
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <div
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className="flex-col align-center justify-center"
                        style={{
                            cursor: 'pointer',
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                            gap: '4px',
                            flex: 1
                        }}
                    >
                        <span style={{ fontSize: '20px' }}>{item.icon}</span>
                        <span style={{ fontSize: '10px', fontWeight: isActive ? '600' : '400' }}>{item.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default BottomNav;
