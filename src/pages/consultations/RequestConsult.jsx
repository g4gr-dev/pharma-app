import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './RequestConsult.css';

const RequestConsult = () => {
    const navigate = useNavigate();
    const [urgency, setUrgency] = useState('normal');
    const [type, setType] = useState('general');

    const urgencyStyle = urgency === 'urgent' ?
        { border: '2px solid var(--color-danger)', backgroundColor: '#E0F7FA', color: 'var(--color-danger)' } :
        { border: '1px solid #E0E0E0', backgroundColor: 'white', color: '#666' };

    return (
        <div className="request-consult-container">
            {/* Header */}
            <div className="request-consult-header">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <span className="back-arrow-icon">←</span>
                </button>
                <span className="header-title-req">Solicitar Consulta</span>
                <div className="header-spacer-req"></div>
            </div>

            <div className="request-content">

                {/* Type */}
                <section className="request-section">
                    <h3 className="request-section-title">Tipo de Consulta</h3>
                    <div className="type-options-row">
                        <label
                            className="type-radio-label"
                            style={{
                                border: type === 'general' ? '2px solid var(--color-primary)' : '1px solid #E0E0E0',
                                backgroundColor: type === 'general' ? '#E0F7FA' : 'white'
                            }}
                        >
                            <input type="radio" name="type" checked={type === 'general'} onChange={() => setType('general')} />
                            <span>General</span>
                        </label>
                        <label
                            className="type-radio-label"
                            style={{
                                border: type === 'specialty' ? '2px solid var(--color-primary)' : '1px solid #E0E0E0',
                                backgroundColor: type === 'specialty' ? '#E0F7FA' : 'white'
                            }}
                        >
                            <input type="radio" name="type" checked={type === 'specialty'} onChange={() => setType('specialty')} />
                            <span>Especialidad</span>
                        </label>
                    </div>
                    {type === 'specialty' && (
                        <select className="specialty-select">
                            <option>Cardiología</option>
                            <option>Dermatología</option>
                            <option>Pediatría</option>
                        </select>
                    )}
                </section>

                {/* Description */}
                <section className="request-section">
                    <h3 className="request-section-title">Descripción</h3>
                    <textarea
                        placeholder="Describe tu síntoma o motivo de consulta..."
                        className="description-textarea"
                    />
                    <div className="char-count">0/500</div>
                </section>

                {/* Info Shared */}
                <section>
                    <h3 className="request-section-title">Compartir Información Relevante</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-label"><input type="checkbox" defaultChecked /> Compartir signos vitales</label>
                        <label className="checkbox-label"><input type="checkbox" defaultChecked /> Compartir medicación actual</label>
                    </div>
                </section>

            </div>

            <div className="request-footer">
                <button
                    onClick={() => setUrgency(urgency === 'normal' ? 'urgent' : 'normal')}
                    className="urgency-btn"
                    style={urgencyStyle}
                >
                    <span className="urgency-icon">{urgency === 'urgent' ? '🚨' : '📅'}</span>
                    <span className="urgency-label">{urgency === 'urgent' ? 'Urgente' : 'Normal'}</span>
                </button>
                <div className="action-btn-wrapper">
                    <Button fullWidth onClick={() => navigate('/consultations/doctors')}>
                        Buscar Médico
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RequestConsult;
