import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const ConsultSummary = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>✕</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Resumen de Consulta</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <div className="text-center" style={{ marginBottom: '32px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 16px', overflow: 'hidden' }}>
                        <img src="https://via.placeholder.com/80" alt="Doctor" />
                    </div>
                    <h2 style={{ fontSize: '20px' }}>Consulta Finalizada</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>15 Oct, 10:30 AM • 15 min</p>
                </div>

                <section className="card" style={{ padding: '16px', marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>Diagnóstico</h3>
                    <p style={{ lineHeight: '1.5' }}>Faringitis aguda leve. Se recomienda reposo y medicación sintomática.</p>
                </section>

                <section className="card" style={{ padding: '16px', marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Indicaciones</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li>Beber mucha agua</li>
                        <li>Evitar cambios bruscos de temperatura</li>
                        <li>Control en 48hs si persiste la fiebre</li>
                    </ul>
                </section>

                <section className="card" style={{ padding: '16px', border: '1px solid var(--color-primary-light)', backgroundColor: '#E0F7FA' }}>
                    <div className="flex justify-between align-center" style={{ marginBottom: '12px' }}>
                        <h3 className="text-bold" style={{ color: 'var(--color-primary)' }}>Receta Electrónica</h3>
                        <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'white', borderRadius: '12px', color: 'var(--color-primary)' }}>Nueva</span>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontWeight: '600' }}>Ibuprofeno 600mg</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>1 caja • Cada 8hs x 5 días</div>
                    </div>
                    <Button fullWidth onClick={() => alert('Ir al flujo de Pedido (Sección 5)')}>Pedir Medicamentos Ahora</Button>
                </section>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth variant="secondary" onClick={() => navigate('/dashboard')}>Volver al Inicio</Button>
            </div>
        </div>
    );
};

export default ConsultSummary;
