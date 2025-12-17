import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import './MedicationDetail.css';

const MedicationDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock data fetching based on id
    const medication = {
        name: 'Amoxicilina',
        dose: '500mg',
        form: 'Cápsula',
        frequency: 'Cada 8 horas',
        adh: 90
    };

    return (
        <div className="medication-detail-container">
            {/* Header */}
            <div className="med-detail-header">
                <button onClick={() => navigate(-1)} className="detail-back-btn">
                    <span className="detail-back-icon">←</span>
                </button>
                <span className="detail-header-title">Detalles</span>
                <span className="detail-edit-icon">✎</span>
            </div>

            <div className="detail-content">

                {/* Main Info */}
                <div className="main-info-section">
                    <div className="detail-icon-circle">
                        💊
                    </div>
                    <h1 className="med-detail-name">{medication.name}</h1>
                    <p className="med-detail-info">{medication.dose} • {medication.form}</p>
                </div>

                {/* Info Grid */}
                <div className="info-grid">
                    <div className="card info-card">
                        <div className="info-label">Frecuencia</div>
                        <div className="info-value">{medication.frequency}</div>
                    </div>
                    <div className="card info-card">
                        <div className="info-label">Adherencia</div>
                        <div className="info-value good">{medication.adh}%</div>
                    </div>
                </div>

                {/* History */}
                <section>
                    <h3 className="history-section-title">Historial Reciente</h3>
                    <div className="history-list">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="history-item">
                                <div>
                                    <div className="history-item-status">Tomado</div>
                                    <div className="history-item-time">Hoy, 06:00 AM</div>
                                </div>
                                <span className="history-check">✓</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <div className="detail-footer">
                <Button fullWidth variant="secondary" onClick={() => alert('Marcar como tomado')}>Marcar como tomado ahora</Button>
                <div className="delete-btn-container">
                    <Button fullWidth className="delete-btn" onClick={() => alert('Eliminar')}>Eliminar Medicamento</Button>
                </div>
            </div>
        </div>
    );
};

export default MedicationDetail;
