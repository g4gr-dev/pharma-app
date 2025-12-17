import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './ConsultSummary.css';

const ConsultSummary = () => {
    const navigate = useNavigate();

    return (
        <div className="consult-summary-container">
            {/* Header */}
            <div className="consult-summary-header">
                <button onClick={() => navigate('/dashboard')} className="close-btn">
                    <span className="close-icon">✕</span>
                </button>
                <span className="summary-header-title">Resumen de Consulta</span>
                <div className="header-spacer"></div>
            </div>

            <div className="summary-content">

                <div className="summary-hero">
                    <div className="doctor-avatar-circle">
                        <img src="https://via.placeholder.com/80" alt="Doctor" />
                    </div>
                    <h2 className="hero-title">Consulta Finalizada</h2>
                    <p className="hero-subtitle">15 Oct, 10:30 AM • 15 min</p>
                </div>

                <section className="card summary-card">
                    <h3 className="summary-card-title">Diagnóstico</h3>
                    <p className="diagnosis-text">Faringitis aguda leve. Se recomienda reposo y medicación sintomática.</p>
                </section>

                <section className="card summary-card">
                    <h3 className="summary-card-title">Indicaciones</h3>
                    <ul className="indications-list">
                        <li>Beber mucha agua</li>
                        <li>Evitar cambios bruscos de temperatura</li>
                        <li>Control en 48hs si persiste la fiebre</li>
                    </ul>
                </section>

                <section className="card prescription-card">
                    <div className="prescription-header">
                        <h3 className="prescription-title-text">Receta Electrónica</h3>
                        <span className="new-badge">Nueva</span>
                    </div>
                    <div className="medication-details">
                        <div className="medication-name">Ibuprofeno 600mg</div>
                        <div className="medication-dosage">1 caja • Cada 8hs x 5 días</div>
                    </div>
                    <Button fullWidth onClick={() => alert('Ir al flujo de Pedido (Sección 5)')}>Pedir Medicamentos Ahora</Button>
                </section>

            </div>

            <div className="summary-footer">
                <Button fullWidth variant="secondary" onClick={() => navigate('/dashboard')}>Volver al Inicio</Button>
            </div>
        </div>
    );
};

export default ConsultSummary;
