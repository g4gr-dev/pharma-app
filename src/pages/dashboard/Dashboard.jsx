import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    // Mock Metrics


    const quickActions = [
        { label: 'Pastillero Virtual', icon: '💊', color: 'var(--color-primary-light)', bg: '#E0F7FA', path: '/medications' },
        { label: 'Próximo Turno', icon: '📅', color: '#4CAF50', bg: '#E8F5E9', path: '/consultations/video' }, // Demo link
        { label: 'Solicitar Consulta', icon: '📹', color: '#2196F3', bg: '#E3F2FD', path: '/consultations/request' },
        { label: 'Pedir Medicamentos', icon: '🛍️', color: '#FF9800', bg: '#FFF3E0', path: '/orders/review' },
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

                {/* Health Panel */}
                <section>
                    <div className="section-header">
                        <h3 className="section-title">Panel de Salud</h3>
                        <span className="view-all-link">Ver todo</span>
                    </div>

                    <div className="dashboard-vitals-row">
                        {vitals.map((vital, idx) => (
                            <div
                                key={idx}
                                className="card dashboard-vital-card"
                            >
                                <div className="vital-card-top">
                                    <span className="vital-title-sm">{vital.title}</span>
                                    <span style={{ color: vital.color }}>❤</span>
                                </div>
                                <div className="vital-value-lg">{vital.value}</div>
                                <div className="vital-unit-sm">{vital.unit}</div>
                                {/* Mock Chart Line */}
                                <div className="vital-chart-line" style={{ borderBottomColor: `${vital.color}40` }}>
                                    <div className="vital-chart-fill" style={{ backgroundColor: vital.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reminders */}
                <section>
                    <h3 className="section-title">Próximos Recordatorios</h3>
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

            </div>

            <BottomNav />
        </div>
    );
};

export default Dashboard;
