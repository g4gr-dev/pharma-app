import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './ManualMedForm.css';

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
        <div className="manual-med-container">
            {/* Header */}
            <div className="manual-med-header">
                <button onClick={() => navigate(-1)} className="med-header-back-btn">
                    <span className="med-header-back-icon">←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Nuevo Medicamento</span>
                <div className="med-header-spacer"></div>
            </div>

            <div className="manual-med-content">

                <section className="med-section">
                    <h3 className="med-section-title">Información Básica</h3>
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
                            <label className="med-unit-label">Unidad</label>
                            <select className="med-select">
                                <option>mg</option>
                                <option>ml</option>
                                <option>gr</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section className="med-section">
                    <h3 className="med-section-title">Horarios</h3>
                    <label className="freq-label">Frecuencia</label>
                    <select
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}
                        className="med-select"
                        style={{ marginBottom: '16px' }}
                    >
                        <option value="8">Cada 8 horas</option>
                        <option value="12">Cada 12 horas</option>
                        <option value="24">Una vez al día</option>
                    </select>

                    <div className="card next-time-card">
                        <label className="next-time-label">Próxima toma</label>
                        <input type="time" className="next-time-input" defaultValue="14:00" />
                    </div>
                </section>

                <section>
                    <h3 className="med-section-title">Recordatorios</h3>
                    <div className="reminder-row">
                        <span>Activar recordatorios</span>
                        <input type="checkbox" defaultChecked className="reminder-checkbox" />
                    </div>
                </section>

            </div>

            <div className="manual-med-footer">
                <Button fullWidth onClick={() => navigate('/medications')}>Guardar Medicamento</Button>
            </div>
        </div>
    );
};

export default ManualMedForm;
