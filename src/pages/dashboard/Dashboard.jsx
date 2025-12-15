import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileContainer from '../../components/layout/MobileContainer';
import BottomNav from '../../components/layout/BottomNav';

const Dashboard = () => {
    const navigate = useNavigate();
    // Mock Metrics
    const vitals = [
        { title: 'Presión Arterial', value: '120/80', unit: 'mmHg', color: '#FF6B6B' },
        { title: 'Frecuencia Cardíaca', value: '72', unit: 'bpm', color: '#4ECDC4' },
    ];

    const quickActions = [
        { label: 'Mis Medicamentos', icon: '💊', color: 'var(--color-primary-light)', bg: '#E0F7FA', path: '/medications' },
        { label: 'Próxima Cita', icon: '📅', color: '#4CAF50', bg: '#E8F5E9', path: '/consultations/video' }, // Demo link
        { label: 'Solicitar Consulta', icon: '📹', color: '#2196F3', bg: '#E3F2FD', path: '/consultations/request' },
        { label: 'Pedir Medicamentos', icon: '🛍️', color: '#FF9800', bg: '#FFF3E0', path: '/orders/review' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>

            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 24px',
                    backgroundColor: 'white',
                    position: 'sticky',
                    zIndex: 100,
                    top: 0,
                }}
            >
                <div className="flex align-center gap-sm">
                    <figure style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#CCC', overflow: 'hidden' }}>
                        <img src="https://via.placeholder.com/40" alt="Avatar" />
                    </figure>
                    <figcaption>
                        <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Hola, Juan</h2>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center' }}>
                            Familia Pérez ▼
                        </span>
                    </figcaption>
                </div>
                <div style={{ position: 'relative' }}>
                    <span style={{ fontSize: '24px' }}>🔔</span>
                    <span style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'red',
                        borderRadius: '50%'
                    }} />
                </div>
            </div>

            <div className="scroll-content flex-col gap-lg" style={{ padding: '0 24px 24px' }}>

                {/* Quick Access */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Acceso Rápido</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '16px'
                    }}>
                        {quickActions.map((action, idx) => (
                            <div
                                key={idx}
                                className="card flex flex-col align-center justify-center text-center"
                                style={{ padding: '16px', cursor: 'pointer', transition: '0.2s' }}
                                onClick={() => action.path && navigate(action.path)}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    backgroundColor: action.bg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    marginBottom: '8px'
                                }}>
                                    {action.icon}
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: '500' }}>{action.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Health Panel */}
                <section>
                    <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                        <h3 className="text-bold">Panel de Salud</h3>
                        <span style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: '600' }}>Ver todo</span>
                    </div>

                    <div className="flex gap-md" style={{ overflowX: 'auto', paddingBottom: '4px' }}>
                        {vitals.map((vital, idx) => (
                            <div
                                key={idx}
                                className="card"
                                style={{ minWidth: '140px', flex: 1 }}
                            >
                                <div className="flex justify-between" style={{ marginBottom: '8px' }}>
                                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{vital.title}</span>
                                    <span style={{ color: vital.color }}>❤</span>
                                </div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{vital.value}</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{vital.unit}</div>
                                {/* Mock Chart Line */}
                                <div style={{ height: '20px', marginTop: '8px', borderBottom: `2px solid ${vital.color}40`, position: 'relative' }}>
                                    <div style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '2px', backgroundColor: vital.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reminders */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Próximos Recordatorios</h3>
                    <div className="flex flex-col gap-sm">
                        {[
                            { text: 'Tomar Amoxicilina', time: '14:00', icon: '💊' },
                            { text: 'Consulta Dr. Lopez', time: 'Mañana, 10:00', icon: '📹' }
                        ].map((rem, idx) => (
                            <div
                                key={idx}
                                className="card flex justify-between align-center"
                                style={{ padding: '12px', flexDirection: 'row' }}
                            >
                                <div className="flex align-center gap-sm">
                                    <div style={{ padding: '8px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>{rem.icon}</div>
                                    <div>
                                        <div style={{ fontWeight: '500', fontSize: '14px' }}>{rem.text}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{rem.time}</div>
                                    </div>
                                </div>
                                <button style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: '2px solid #E0E0E0',
                                    backgroundColor: 'white'
                                }} />
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
