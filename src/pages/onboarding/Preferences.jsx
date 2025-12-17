import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './Preferences.css';

const Preferences = () => {
    const navigate = useNavigate();
    const [toggles, setToggles] = useState({
        medication: true,
        appointments: true,
        healthAlerts: true,
        promotions: false
    });

    const toggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const Switch = ({ checked, onChange }) => (
        <div
            onClick={onChange}
            className="switch-container"
            style={{
                backgroundColor: checked ? 'var(--color-primary)' : '#E0E0E0'
            }}
        >
            <div
                className="switch-knob"
                style={{
                    left: checked ? '24px' : '2px'
                }}
            />
        </div>
    );

    return (
        <div className="preferences-container">
            {/* Header */}
            <div className="preferences-header">
                <button onClick={() => navigate(-1)} className="preferences-back-btn">
                    <span className="preferences-back-icon">←</span>
                </button>
                <div className="preferences-title-container">
                    <span className="preferences-title">Preferencias</span>
                    <span className="preferences-step">Paso 3 de 3</span>
                </div>
                <div className="preferences-spacer"></div>
            </div>

            <div className="preferences-content">

                {/* Notifications */}
                <section className="preferences-section">
                    <h3 className="section-title">Notificaciones</h3>

                    {[
                        { key: 'medication', label: 'Recordatorios de medicación' },
                        { key: 'appointments', label: 'Recordatorios de citas' },
                        { key: 'healthAlerts', label: 'Alertas de salud' },
                        { key: 'promotions', label: 'Promociones y novedades' }
                    ].map(item => (
                        <div key={item.key} className="preference-item">
                            <span className="preference-label">{item.label}</span>
                            <Switch checked={toggles[item.key]} onChange={() => toggle(item.key)} />
                        </div>
                    ))}
                </section>

                {/* Configuration */}
                <section>
                    <h3 className="section-title">Configuración</h3>

                    <div className="config-item">
                        <label className="config-label">Idioma</label>
                        <select className="config-select">
                            <option>Español</option>
                            <option>English</option>
                            <option>Português</option>
                        </select>
                    </div>

                    <div>
                        <label className="config-label">Zona Horaria</label>
                        <div className="config-static-value">
                            America/Argentina/Buenos_Aires (Auto)
                        </div>
                    </div>
                </section>

            </div>

            <div className="preferences-footer">
                <Button fullWidth onClick={() => navigate('/dashboard')}>Finalizar</Button>
            </div>
        </div>
    );
};

export default Preferences;
