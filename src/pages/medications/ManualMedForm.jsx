import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const ManualMedForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        dose: '',
        frequency: '8', // hours
        duration: 'indefinite'
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Nuevo Medicamento</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-primary)' }}>Información Básica</h3>
                    <Input
                        label="Nombre del Medicamento"
                        name="name"
                        placeholder="Ej: Ibuprofeno"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <div className="flex gap-md">
                        <div style={{ flex: 2 }}>
                            <Input
                                label="Dosis"
                                name="dose"
                                placeholder="400"
                                type="number"
                                value={form.dose}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Unidad</label>
                            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0' }}>
                                <option>mg</option>
                                <option>ml</option>
                                <option>gr</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-primary)' }}>Horarios</h3>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Frecuencia</label>
                    <select
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', marginBottom: '16px' }}
                    >
                        <option value="8">Cada 8 horas</option>
                        <option value="12">Cada 12 horas</option>
                        <option value="24">Una vez al día</option>
                    </select>

                    <div className="card" style={{ padding: '16px', backgroundColor: '#F8F9FA' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>Próxima toma</label>
                        <input type="time" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} defaultValue="14:00" />
                    </div>
                </section>

                <section>
                    <h3 className="text-bold" style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-primary)' }}>Recordatorios</h3>
                    <div className="flex justify-between align-center">
                        <span>Activar recordatorios</span>
                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }} />
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth onClick={() => navigate('/medications')}>Guardar Medicamento</Button>
            </div>
        </div>
    );
};

export default ManualMedForm;
