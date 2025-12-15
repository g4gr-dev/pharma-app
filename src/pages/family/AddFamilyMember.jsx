import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const AddFamilyMember = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        relation: '',
        dob: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Nuevo Integrante</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#F5F5F5', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#ccc' }}>
                        📷
                    </div>
                    <div style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: '500' }}>Subir Foto</div>
                </div>

                <section className="flex flex-col gap-md">
                    <Input
                        label="Nombre Completo"
                        name="name"
                        placeholder="Ej: Marta Pérez"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Parentesco</label>
                        <select
                            name="relation"
                            value={form.relation}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0' }}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="Hijo/a">Hijo/a</option>
                            <option value="Padre/Madre">Padre/Madre</option>
                            <option value="Esposo/a">Esposo/a</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <Input
                        label="Fecha de Nacimiento"
                        name="dob"
                        type="date"
                        value={form.dob}
                        onChange={handleChange}
                    />

                    <div className="flex align-center gap-sm" style={{ marginTop: '8px' }}>
                        <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                        <span style={{ fontSize: '14px' }}>Vive en el mismo domicilio</span>
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px' }}>
                <Button fullWidth onClick={() => navigate('/family')}>Guardar Familiar</Button>
            </div>
        </div>
    );
};

export default AddFamilyMember;
