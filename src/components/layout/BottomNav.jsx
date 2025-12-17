import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

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
        <div className="bottom-nav">
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <div
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default BottomNav;
