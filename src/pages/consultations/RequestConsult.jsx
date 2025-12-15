import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const RequestConsult = () => {
    const navigate = useNavigate();
    const [urgency, setUrgency] = useState('normal');
    const [type, setType] = useState('general');

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px', marginInlineStart: '1rem' }}>Solicitar Consulta</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {/* Type */}
                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Tipo de Consulta</h3>
                    <div className="flex gap-md" style={{ marginBottom: '12px' }}>
                        <label className="flex align-center gap-sm" style={{ padding: '12px', border: type === 'general' ? '2px solid var(--color-primary)' : '1px solid #E0E0E0', borderRadius: '8px', flex: 1, backgroundColor: type === 'general' ? '#E0F7FA' : 'white' }}>
                            <input type="radio" name="type" checked={type === 'general'} onChange={() => setType('general')} />
                            <span>General</span>
                        </label>
                        <label className="flex align-center gap-sm" style={{ padding: '12px', border: type === 'specialty' ? '2px solid var(--color-primary)' : '1px solid #E0E0E0', borderRadius: '8px', flex: 1, backgroundColor: type === 'specialty' ? '#E0F7FA' : 'white' }}>
                            <input type="radio" name="type" checked={type === 'specialty'} onChange={() => setType('specialty')} />
                            <span>Especialidad</span>
                        </label>
                    </div>
                    {type === 'specialty' && (
                        <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0' }}>
                            <option>Cardiología</option>
                            <option>Dermatología</option>
                            <option>Pediatría</option>
                        </select>
                    )}
                </section>



                {/* Description */}
                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Descripción</h3>
                    <textarea
                        placeholder="Describe tu síntoma o motivo de consulta..."
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', minHeight: '100px', resize: 'none' }}
                    />
                    <div style={{ textAlign: 'right', fontSize: '12px', color: '#999' }}>0/500</div>
                </section>

                {/* Info Shared */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '1rem' }}>Compartir Información Relevante</h3>
                    <div className="flex flex-col gap-sm">
                        <label className="flex align-center gap-sm"><input type="checkbox" defaultChecked /> Compartir signos vitales</label>
                        <label className="flex align-center gap-sm"><input type="checkbox" defaultChecked /> Compartir medicación actual</label>
                    </div>
                </section>

            </div>

            <div style={{ display: 'flex', gap: '1rem', padding: '2rem', borderTop: '1px solid #f0f0f0', alignItems: 'center' }}>
                <button
                    onClick={() => setUrgency(urgency === 'normal' ? 'urgent' : 'normal')}
                    style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: urgency === 'urgent' ? '2px solid var(--color-danger)' : '1px solid #E0E0E0',
                        backgroundColor: urgency === 'urgent' ? '#E0F7FA' : 'white',
                        color: urgency === 'urgent' ? 'var(--color-danger)' : '#666',
                        fontWeight: '600',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '80px',
                        cursor: 'pointer'
                    }}
                >
                    <span style={{ fontSize: '20px' }}>{urgency === 'urgent' ? '🚨' : '📅'}</span>
                    <span style={{ fontSize: '10px' }}>{urgency === 'urgent' ? 'Urgente' : 'Normal'}</span>
                </button>
                <div style={{ flex: 1 }}>
                    <Button fullWidth onClick={() => navigate('/consultations/doctors')}>
                        Buscar Médico
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RequestConsult;
