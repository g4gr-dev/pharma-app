import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

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
            style={{
                width: '50px',
                height: '28px',
                backgroundColor: checked ? 'var(--color-primary)' : '#E0E0E0',
                borderRadius: '14px',
                position: 'relative',
                cursor: 'pointer',
                transition: '0.3s'
            }}
        >
            <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: checked ? '24px' : '2px',
                transition: '0.3s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} />
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <div className="text-center">
                    <span className="text-bold" style={{ fontSize: '16px', display: 'block' }}>Preferencias</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Paso 3 de 3</span>
                </div>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="flex-grow" style={{ padding: '24px' }}>

                {/* Notifications */}
                <section style={{ marginBottom: '40px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '24px' }}>Notificaciones</h3>

                    {[
                        { key: 'medication', label: 'Recordatorios de medicación' },
                        { key: 'appointments', label: 'Recordatorios de citas' },
                        { key: 'healthAlerts', label: 'Alertas de salud' },
                        { key: 'promotions', label: 'Promociones y novedades' }
                    ].map(item => (
                        <div key={item.key} className="flex justify-between align-center" style={{ marginBottom: '20px' }}>
                            <span style={{ fontSize: '16px' }}>{item.label}</span>
                            <Switch checked={toggles[item.key]} onChange={() => toggle(item.key)} />
                        </div>
                    ))}
                </section>

                {/* Configuration */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '24px' }}>Configuración</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Idioma</label>
                        <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: 'var(--color-bg-input)' }}>
                            <option>Español</option>
                            <option>English</option>
                            <option>Português</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Zona Horaria</label>
                        <div style={{ padding: '12px', backgroundColor: '#F0F2F4', borderRadius: '8px', color: '#666' }}>
                            America/Argentina/Buenos_Aires (Auto)
                        </div>
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth onClick={() => navigate('/dashboard')}>Finalizar</Button>
            </div>
        </div>
    );
};

export default Preferences;
