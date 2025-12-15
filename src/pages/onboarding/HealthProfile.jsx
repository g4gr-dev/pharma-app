import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const HealthProfile = () => {
    const navigate = useNavigate();

    // State for dynamic lists
    const [medications, setMedications] = useState([]);
    const [newMed, setNewMed] = useState('');

    const addMedication = () => {
        if (newMed.trim()) {
            setMedications([...medications, newMed]);
            setNewMed('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <div className="text-center">
                    <span className="text-bold" style={{ fontSize: '16px', display: 'block' }}>Perfil de Salud</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Paso 2 de 3</span>
                </div>
                <div style={{ width: '24px' }}></div>
            </div>

            {/* Form Content */}
            <div className="flex-grow" style={{ overflowY: 'auto', padding: '24px' }}>

                {/* Section 1: Basic Data */}
                <section style={{ marginBottom: '32px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Datos Básicos</h3>

                    <Input label="Fecha de Nacimiento" type="date" />

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                            Género
                        </label>
                        <div className="flex gap-md">
                            {['Masculino', 'Femenino', 'Otro'].map(g => (
                                <label key={g} className="flex align-center gap-sm" style={{ padding: '8px 12px', border: '1px solid #E0E0E0', borderRadius: '8px', flex: 1, justifyContent: 'center' }}>
                                    <input type="radio" name="gender" value={g} />
                                    <span style={{ fontSize: '14px' }}>{g}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-md">
                        <div style={{ flex: 1 }}><Input label="Altura" placeholder="170" type="number" /></div>
                        <div style={{ flex: 1 }}><Input label="Peso" placeholder="70" type="number" /></div>
                    </div>
                </section>

                {/* Section 2: Medical Info */}
                <section style={{ marginBottom: '32px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Información Médica</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                            Condiciones Preexistentes
                        </label>
                        <div className="flex flex-col gap-sm">
                            {['Diabetes', 'Hipertensión', 'Asma', 'Enfermedad cardíaca'].map(cond => (
                                <label key={cond} className="flex align-center gap-sm">
                                    <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} />
                                    <span>{cond}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                            Alergias
                        </label>
                        <textarea
                            placeholder="Describe tus alergias..."
                            rows="3"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid #E0E0E0',
                                backgroundColor: 'var(--color-bg-input)',
                                resize: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                            Medicación Actual
                        </label>
                        <div className="flex gap-sm" style={{ marginBottom: '8px' }}>
                            <input
                                value={newMed}
                                onChange={(e) => setNewMed(e.target.value)}
                                placeholder="Nombre del medicamento"
                                style={{ flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid #E0E0E0' }}
                            />
                            <button
                                onClick={addMedication}
                                style={{ padding: '0 16px', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '8px' }}
                            >
                                +
                            </button>
                        </div>
                        <ul className="flex flex-col gap-sm">
                            {medications.map((med, idx) => (
                                <li key={idx} className="flex justify-between align-center" style={{ padding: '8px', background: '#F8F9FA', borderRadius: '8px' }}>
                                    <span>{med}</span>
                                    <span style={{ color: 'var(--color-danger)', cursor: 'pointer' }} onClick={() => setMedications(medications.filter((_, i) => i !== idx))}>&times;</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Section 3: Insurance */}
                <section>
                    <h3 className="text-bold" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Obra Social</h3>
                    <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0', marginBottom: '16px', backgroundColor: 'var(--color-bg-input)' }}>
                        <option value="">Selecciona tu obra social</option>
                        <option value="osde">OSDE</option>
                        <option value="swiss">Swiss Medical</option>
                        <option value="galeno">Galeno</option>
                    </select>
                    <Input label="Número de afiliado" placeholder="XXXXXXXX" />
                </section>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth onClick={() => navigate('/preferences')}>Continuar</Button>
            </div>
        </div>
    );
};

export default HealthProfile;
