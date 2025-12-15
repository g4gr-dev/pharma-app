import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const HealthPanel = () => {
    const navigate = useNavigate();

    const vitals = [
        { id: 'bp', title: 'Presión Arterial', value: '120/80', unit: 'mmHg', status: 'Normal', color: '#4CAF50', icon: '❤️' },
        { id: 'weight', title: 'Peso', value: '70.5', unit: 'kg', status: 'Estable', color: '#2196F3', icon: '⚖️' },
        { id: 'glucose', title: 'Glucosa', value: '95', unit: 'mg/dL', status: 'Excelente', color: '#8BC34A', icon: '🩸' },
        { id: 'hr', title: 'Ritmo Cardíaco', value: '72', unit: 'bpm', status: 'Normal', color: '#FF9800', icon: '💓' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Mi Salud</span>
                <button onClick={() => navigate('/health/log')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
                </button>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {vitals.map(vital => (
                        <div
                            key={vital.id}
                            className="card"
                            style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}
                            onClick={() => navigate(`/health/${vital.id}`)}
                        >
                            <div className="flex justify-between align-center">
                                <div style={{ fontSize: '20px' }}>{vital.icon}</div>
                                <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: `${vital.color}20`, color: vital.color }}>
                                    {vital.status}
                                </span>
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#666' }}>{vital.title}</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    {vital.value} <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#999' }}>{vital.unit}</span>
                                </div>
                            </div>
                            {/* Mini Chart Mock */}
                            <div style={{ height: '20px', display: 'flex', alignItems: 'flex-end', gap: '2px', opacity: 0.5 }}>
                                {[40, 60, 50, 80, 70, 90, 60].map((h, i) => (
                                    <div key={i} style={{ flex: 1, backgroundColor: vital.color, height: `${h}%`, borderRadius: '2px' }}></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ marginTop: '24px', padding: '16px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Resumen Mensual</h3>
                    <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.5' }}>
                        Tu salud cardiovascular ha mejorado un 5% este mes. Sigue manteniendo tu peso estable.
                    </p>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default HealthPanel;
