import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './HealthPanel.css';

const HealthPanel = () => {
    const navigate = useNavigate();

    const vitals = [
        { id: 'bp', title: 'Presión Arterial', value: '120/80', unit: 'mmHg', status: 'Normal', color: '#4CAF50', icon: '❤️' },
        { id: 'weight', title: 'Peso', value: '70.5', unit: 'kg', status: 'Estable', color: '#2196F3', icon: '⚖️' },
        { id: 'glucose', title: 'Glucosa', value: '95', unit: 'mg/dL', status: 'Excelente', color: '#8BC34A', icon: '🩸' },
        { id: 'hr', title: 'Ritmo Cardíaco', value: '72', unit: 'bpm', status: 'Normal', color: '#FF9800', icon: '💓' },
    ];

    return (
        <div className="health-panel-container">
            {/* Header */}
            <div className="health-panel-header">
                <button onClick={() => navigate('/dashboard')} className="nav-icon">
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="header-title-text">Mi Salud</span>
                <button onClick={() => navigate('/health/log')} className="nav-icon">
                    <span className="add-vital-icon">+</span>
                </button>
            </div>

            <div className="health-content">

                <div className="vitals-grid">
                    {vitals.map(vital => (
                        <div
                            key={vital.id}
                            className="card vital-card"
                            onClick={() => navigate(`/health/${vital.id}`)}
                        >
                            <div className="vital-card-header">
                                <div className="vital-icon">{vital.icon}</div>
                                <span className="vital-status" style={{ backgroundColor: `${vital.color}20`, color: vital.color }}>
                                    {vital.status}
                                </span>
                            </div>
                            <div>
                                <div className="vital-title">{vital.title}</div>
                                <div className="vital-value">
                                    {vital.value} <span className="vital-unit">{vital.unit}</span>
                                </div>
                            </div>
                            {/* Mini Chart Mock */}
                            <div className="mini-chart">
                                {[40, 60, 50, 80, 70, 90, 60].map((h, i) => (
                                    <div key={i} className="chart-bar" style={{ backgroundColor: vital.color, height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card summary-card">
                    <h3 className="summary-title">Resumen Mensual</h3>
                    <p className="summary-text">
                        Tu salud cardiovascular ha mejorado un 5% este mes. Sigue manteniendo tu peso estable.
                    </p>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default HealthPanel;
