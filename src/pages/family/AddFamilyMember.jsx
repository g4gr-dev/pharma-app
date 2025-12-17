import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './AddFamilyMember.css';

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
        <div className="add-family-container">
            {/* Header */}
            <div className="add-family-header">
                <button onClick={() => navigate(-1)} className="add-family-back-btn">
                    <span className="add-family-back-icon">←</span>
                </button>
                <span className="add-family-title">Nuevo Integrante</span>
                <div className="add-family-spacer"></div>
            </div>

            <div className="add-family-content">

                <div className="photo-upload-container">
                    <div className="photo-placeholder">
                        📷
                    </div>
                    <div className="upload-text">Subir Foto</div>
                </div>

                <section className="add-family-form">
                    <Input
                        label="Nombre Completo"
                        name="name"
                        placeholder="Ej: Marta Pérez"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <div>
                        <label className="relation-label">Parentesco</label>
                        <select
                            name="relation"
                            value={form.relation}
                            onChange={handleChange}
                            className="relation-select"
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

                    <div className="checkbox-row">
                        <input type="checkbox" className="address-checkbox" />
                        <span className="checkbox-text">Vive en el mismo domicilio</span>
                    </div>
                </section>

            </div>

            <div className="add-family-footer">
                <Button fullWidth onClick={() => navigate('/family')}>Guardar Familiar</Button>
            </div>
        </div>
    );
};

export default AddFamilyMember;
