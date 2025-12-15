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
                <span className="text-bold" style={{ fontSize: '18px' }}>Solicitar Consulta</span>
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

                {/* Urgency */}
                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Urgencia</h3>
                    <div className="flex gap-md">
                        <label className="flex align-center gap-sm" style={{ padding: '12px', border: '1px solid #E0E0E0', borderRadius: '8px', flex: 1 }}>
                            <input type="radio" name="urgency" checked={urgency === 'normal'} onChange={() => setUrgency('normal')} />
                            <div>
                                <div style={{ fontWeight: '600' }}>Normal</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>15-30 min</div>
                            </div>
                        </label>
                        <label className="flex align-center gap-sm" style={{ padding: '12px', border: '1px solid #E0E0E0', borderRadius: '8px', flex: 1 }}>
                            <input type="radio" name="urgency" checked={urgency === 'urgent'} onChange={() => setUrgency('urgent')} />
                            <div>
                                <div style={{ fontWeight: '600', color: 'var(--color-danger)' }}>Urgente</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Inmediata</div>
                            </div>
                        </label>
                    </div>
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
                    <h3 className="text-bold" style={{ marginBottom: '16px' }}>Información Relevante</h3>
                    <div className="flex flex-col gap-sm">
                        <label className="flex align-center gap-sm"><input type="checkbox" defaultChecked /> Compartir signos vitales</label>
                        <label className="flex align-center gap-sm"><input type="checkbox" defaultChecked /> Compartir medicación actual</label>
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth onClick={() => navigate('/consultations/doctors')}>Buscar Médico Disponible</Button>
            </div>
        </div>
    );
};

export default RequestConsult;
