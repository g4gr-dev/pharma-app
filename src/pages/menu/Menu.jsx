import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const Menu = () => {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Perfil de Salud', icon: '👤', path: '/profile' },
        { label: 'Mi Familia', icon: '👨‍👩‍👧‍👦', path: '/family' },
        { label: 'Mis Credenciales', icon: '💳', path: '/credentials' },
        { label: 'Mis Medicamentos', icon: '💊', path: '/medications' },
        { label: 'Historial Médico', icon: '📋', path: '/history' },
        { label: 'Panel de Salud', icon: '❤️', path: '/health' },
        { label: 'Videoconsultas', icon: '📹', path: '/consultations/request' },
        { label: 'Farmacia & Pedidos', icon: '🛍️', path: '/orders/catalog' },
        { label: 'Configuración', icon: '⚙️', path: '/preferences' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>

            {/* User Header */}
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '32px 24px 24px' }}>
                <div className="flex align-center gap-md" style={{ marginBottom: '16px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
                        👩
                    </div>
                    <div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Gabriela Gómez</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>Plan Premium</div>
                    </div>
                </div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <div className="flex flex-col gap-sm">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate(item.path)}
                            className="flex align-center gap-md"
                            style={{ padding: '16px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }}
                        >
                            <div style={{ fontSize: '20px', width: '32px' }}>{item.icon}</div>
                            <div style={{ flex: 1, fontWeight: '500' }}>{item.label}</div>
                            <div style={{ color: '#ccc' }}>›</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '32px' }}>
                    <div
                        className="flex align-center gap-md"
                        style={{ padding: '16px', color: '#666', cursor: 'pointer' }}
                    >
                        <div style={{ fontSize: '20px', width: '32px' }}>❓</div>
                        <div style={{ flex: 1 }}>Ayuda y Soporte</div>
                    </div>
                    <div
                        className="flex align-center gap-md"
                        style={{ padding: '16px', color: 'var(--color-danger)', cursor: 'pointer' }}
                        onClick={() => navigate('/welcome')}
                    >
                        <div style={{ fontSize: '20px', width: '32px' }}>🚪</div>
                        <div style={{ flex: 1 }}>Cerrar Sesión</div>
                    </div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default Menu;
