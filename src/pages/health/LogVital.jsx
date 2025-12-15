import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const LogVital = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('bp');

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Registrar Medición</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Tipo de Medición</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', marginBottom: '24px' }}
                >
                    <option value="bp">Presión Arterial</option>
                    <option value="weight">Peso</option>
                    <option value="glucose">Glucosa</option>
                    <option value="hr">Ritmo Cardíaco</option>
                </select>

                <section className="flex flex-col gap-md">
                    {type === 'bp' ? (
                        <div className="flex gap-md">
                            <Input label="Sistólica" placeholder="120" type="number" />
                            <Input label="Diastólica" placeholder="80" type="number" />
                        </div>
                    ) : (
                        <Input label="Valor" placeholder="0.0" type="number" />
                    )}

                    <Input label="Fecha" type="datetime-local" />

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Notas</label>
                        <textarea
                            placeholder="Opcional..."
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', minHeight: '80px' }}
                        />
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px' }}>
                <Button fullWidth onClick={() => navigate('/health')}>Guardar Registro</Button>
            </div>
        </div>
    );
};

export default LogVital;
