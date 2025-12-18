import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    // Mock Metrics


    const quickActions = [
        { label: 'Historia clínica', icon: '📋', color: '#448AFF', bg: '#E3F2FD', path: '/medical-history' },
        { label: 'Pedir Medicamentos', icon: '🛍️', color: '#FF9800', bg: '#FFF3E0', path: '/orders/review' },
        { label: 'Pastillero Virtual', icon: '💊', color: 'var(--color-primary-light)', bg: '#E0F7FA', path: '/medications' },
        { label: 'Solicitar Consulta', icon: '📹', color: '#2196F3', bg: '#E3F2FD', path: '/consultations/request' },
        { label: 'Próximo Turno', icon: '📅', color: '#4CAF50', bg: '#E8F5E9', path: '/consultations/video' }, // Demo link
    ];


    return (
        <div className="dashboard-container">

            <div className="dashboard-header">
                <div className="dashboard-user-info">
                    <figure className="user-avatar-frame">
                        <img src="https://via.placeholder.com/40" alt="Avatar" className="user-avatar-img" />
                    </figure>
                    <figcaption>
                        <h2 className="user-greeting">Hola, Juan</h2>
                        <span className="user-family-selector">
                            Familia Pérez ▼
                        </span>
                    </figcaption>
                </div>
                <div className="notification-bell-container">
                    <span className="notification-icon">🔔</span>
                    <span className="notification-dot" />
                </div>
            </div>

            <div className="dashboard-content">

                {/* Reminders */}
                <section>
                    <h3 className="section-title">Recordatorios</h3>
                    <div className="reminders-list">
                        {[
                            { text: 'Tomar Amoxicilina', time: '14:00', icon: '💊' },
                            { text: 'Consulta Dr. Lopez', time: 'Mañana, 10:00', icon: '📹' }
                        ].map((rem, idx) => (
                            <div
                                key={idx}
                                className="card reminder-card"
                            >
                                <div className="reminder-info">
                                    <div className="reminder-icon">{rem.icon}</div>
                                    <div>
                                        <div className="reminder-text">{rem.text}</div>
                                        <div className="reminder-time">{rem.time}</div>
                                    </div>
                                </div>
                                <button className="reminder-check" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Access */}
                <section>
                    <h3 className="section-title">Acceso Rápido</h3>
                    <div className="quick-actions-grid">
                        {quickActions.map((action, idx) => (
                            <div
                                key={idx}
                                className="card quick-action-card"
                                onClick={() => action.path && navigate(action.path)}
                            >
                                <div className="quick-action-icon" style={{ backgroundColor: action.bg }}>
                                    {action.icon}
                                </div>
                                <span className="quick-action-label">{action.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <BottomNav />
        </div>
    );
};

export default Dashboard;
