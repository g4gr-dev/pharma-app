import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './MedicalHistory.css';

const MedicalHistory = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('vitals'); // 'vitals' or 'events'
    const [filter, setFilter] = useState('all');

    const vitals = [
        { id: 'bp', title: 'Presión Arterial', value: '120/80', unit: 'mmHg', status: 'Normal', color: '#4CAF50', icon: '❤️' },
        { id: 'weight', title: 'Peso', value: '70.5', unit: 'kg', status: 'Estable', color: '#2196F3', icon: '⚖️' },
        { id: 'glucose', title: 'Glucosa', value: '95', unit: 'mg/dL', status: 'Excelente', color: '#8BC34A', icon: '🩸' },
        { id: 'hr', title: 'Ritmo Cardíaco', value: '72', unit: 'bpm', status: 'Normal', color: '#FF9800', icon: '💓' },
    ];

    const events = [
        { id: 1, type: 'consult', title: 'Consulta General', date: '15 Oct 2025', doctor: 'Dra. Ana Gómez', icon: '🩺' },
        { id: 2, type: 'lab', title: 'Análisis de Sangre', date: '10 Oct 2025', facility: 'Laboratorio Central', icon: '🧪' },
    ];

    const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);

    return (
        <div className="medical-history-container">
            {/* Header */}
            <div className="medical-history-header">
                <button onClick={() => navigate('/dashboard')} className="nav-icon-btn">
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="header-title-text">Historia clínica</span>
                <button
                    onClick={() => navigate(activeTab === 'vitals' ? '/medical-history/vitals/log' : '/medical-history/events/upload')}
                    className="nav-icon-btn"
                >
                    <span className="add-icon">+</span>
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="tab-switcher">
                <button
                    className={`tab-btn ${activeTab === 'vitals' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vitals')}
                >
                    Signos Vitales
                </button>
                <button
                    className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
                    onClick={() => setActiveTab('events')}
                >
                    Estudios y Consultas
                </button>
            </div>

            <div className="medical-history-content">
                {activeTab === 'vitals' ? (
                    <div className="vitals-tab">
                        <div className="vitals-grid">
                            {vitals.map(vital => (
                                <div
                                    key={vital.id}
                                    className="card medical-vital-card"
                                    onClick={() => navigate(`/medical-history/vitals/${vital.id}`)}
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

                        <div className="card medical-summary-card">
                            <h3 className="summary-title">Resumen Mensual</h3>
                            <p className="summary-text">
                                Tu salud cardiovascular ha mejorado un 5% este mes. Sigue manteniendo tu peso estable.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="events-tab">
                        {/* Filters */}
                        <div className="filters-container">
                            {['all', 'consult', 'lab'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`filter-pill ${filter === f ? 'active' : 'inactive'}`}
                                >
                                    {f === 'all' ? 'Todos' : f === 'consult' ? 'Consultas' : 'Estudios'}
                                </button>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="timeline-container">
                            {filteredEvents.map((evt, idx) => (
                                <div key={evt.id} className="timeline-item" onClick={() => navigate(`/medical-history/events/${evt.id}`)}>
                                    <div className="timeline-left-col">
                                        <div className="timeline-icon-circle">
                                            {evt.icon}
                                        </div>
                                        {idx < filteredEvents.length - 1 && <div className="timeline-line"></div>}
                                    </div>
                                    <div className="card timeline-card">
                                        <div className="event-date">{evt.date}</div>
                                        <div className="event-title">{evt.title}</div>
                                        <div className="event-subtitle">
                                            {evt.doctor || evt.facility}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <BottomNav />
        </div>
    );
};

export default MedicalHistory;
