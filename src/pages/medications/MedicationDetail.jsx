import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';

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
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Detalles</span>
                <span style={{ fontSize: '20px' }}>✎</span>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px' }}>

                {/* Main Info */}
                <div className="text-center" style={{ marginBottom: '32px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#E3F2FD',
                        borderRadius: '50%',
                        margin: '0 auto 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px'
                    }}>
                        💊
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{medication.name}</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px' }}>{medication.dose} • {medication.form}</p>
                </div>

                {/* Info Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                    <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>Frecuencia</div>
                        <div style={{ fontWeight: '600' }}>{medication.frequency}</div>
                    </div>
                    <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>Adherencia</div>
                        <div style={{ fontWeight: '600', color: 'var(--color-success)' }}>{medication.adh}%</div>
                    </div>
                </div>

                {/* History */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Historial Reciente</h3>
                    <div className="flex flex-col gap-md">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex justify-between align-center" style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
                                <div>
                                    <div style={{ fontWeight: '500' }}>Tomado</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>Hoy, 06:00 AM</div>
                                </div>
                                <span style={{ color: 'var(--color-success)' }}>✓</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px' }}>
                <Button fullWidth variant="secondary" onClick={() => alert('Marcar como tomado')}>Marcar como tomado ahora</Button>
                <div style={{ marginTop: '12px' }}>
                    <Button fullWidth style={{ backgroundColor: '#FFEBEE', color: '#D32F2F', border: 'none' }} onClick={() => alert('Eliminar')}>Eliminar Medicamento</Button>
                </div>
            </div>
        </div>
    );
};

export default MedicationDetail;
