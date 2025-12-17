import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VitalDetail.css';

const VitalDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock
    const title = id === 'bp' ? 'Presión Arterial' : id === 'weight' ? 'Peso' : id === 'glucose' ? 'Glucosa' : 'Ritmo C.';
    const color = id === 'bp' ? '#4CAF50' : '#2196F3';

    return (
        <div className="vital-detail-container">
            {/* Header */}
            <div className="vital-detail-header">
                <button onClick={() => navigate(-1)} className="header-btn">
                    <span className="back-arrow">←</span>
                </button>
                <span className="header-title">{title}</span>
                <span className="settings-icon">⚙️</span>
            </div>

            <div className="vital-content">

                {/* Chart Area */}
                <div className="card chart-card">
                    <div className="chart-placeholder">
                        <div>[Gráfico de {title}]</div>
                        <div className="chart-subtitle">Últimos 30 días</div>
                    </div>
                </div>

                {/* History List */}
                <h3 className="history-section-title">Historial</h3>
                <div className="history-list">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="history-item">
                            <div>
                                <div className="history-value">120/80 mmHg</div>
                                <div className="history-date">15 Oct, 08:00 AM</div>
                            </div>
                            <span className="status-badge">Normal</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VitalDetail;
