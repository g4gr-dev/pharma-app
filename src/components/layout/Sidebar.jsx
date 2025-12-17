import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Inicio', icon: '🏠', path: '/dashboard' },
        { label: 'Pastillero Virtual', icon: '💊', path: '/medications' },
        { label: 'Solicitar Medicamento', icon: '🛍️', path: '/orders/review' },
        { label: 'Historial', icon: '📋', path: '/history' },
        { label: 'Credenciales', icon: '💳', path: '/credentials' },
        { label: 'Familia', icon: '👨‍👩‍👧‍👦', path: '/family' },
        { label: 'Videoconsultas', icon: '📹', path: '/consultations/request' },
        { label: 'Salud', icon: '❤️', path: '/health' },
        { label: 'Perfil', icon: '👤', path: '/profile' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">Central Farma</h1>
            </div>

            <div className="sidebar-nav">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
                    return (
                        <div
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className={`sidebar-item ${isActive ? 'active' : ''}`}
                        >
                            <span className="sidebar-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>

            <div className="sidebar-footer">
                <div
                    className="sidebar-footer-item config"
                    onClick={() => navigate('/preferences')}
                >
                    <span>⚙️</span>
                    <span>Configuración</span>
                </div>
                <div
                    className="sidebar-footer-item logout"
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
