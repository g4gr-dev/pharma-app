import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Perfil de Salud', icon: '👤', path: '/profile' },
        { label: 'Mi Familia', icon: '👨‍👩‍👧‍👦', path: '/family' },
        { label: 'Mis Credenciales', icon: '💳', path: '/credentials' },
        { label: 'Pastillero Virtual', icon: '💊', path: '/medications' },
        { label: 'Historial Médico', icon: '📋', path: '/history' },
        { label: 'Panel de Salud', icon: '❤️', path: '/health' },
        { label: 'Telemedicina', icon: '📹', path: '/consultations/request' },
        { label: 'Farmacia & Pedidos', icon: '🛍️', path: '/orders/catalog' },
        { label: 'Configuración', icon: '⚙️', path: '/preferences' },
    ];

    return (
        <div className="menu-container">

            {/* User Header */}
            <div className="menu-header">
                <div className="user-profile-summary">
                    <div className="user-avatar">
                        👩
                    </div>
                    <div className="user-info">
                        <div className="user-name">Gabriela Gómez</div>
                        <div className="user-plan">Plan Premium</div>
                    </div>
                </div>
            </div>

            <div className="menu-content">

                <div className="menu-items-list">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate(item.path)}
                            className="menu-item"
                        >
                            <div className="menu-item-icon">{item.icon}</div>
                            <div className="menu-item-label">{item.label}</div>
                            <div className="menu-item-arrow">›</div>
                        </div>
                    ))}
                </div>

                <div className="menu-footer">
                    <div
                        className="menu-footer-item help"
                    >
                        <div className="menu-item-icon">❓</div>
                        <div style={{ flex: 1 }}>Ayuda y Soporte</div>
                    </div>
                    <div
                        className="menu-footer-item logout"
                        onClick={() => navigate('/welcome')}
                    >
                        <div className="menu-item-icon">🚪</div>
                        <div style={{ flex: 1 }}>Cerrar Sesión</div>
                    </div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default Menu;
