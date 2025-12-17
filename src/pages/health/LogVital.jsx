import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './LogVital.css';

const LogVital = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('bp');

    return (
        <div className="log-vital-container">
            {/* Header */}
            <div className="log-vital-header">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <span className="back-arrow-icon">←</span>
                </button>
                <span className="header-title-log">Registrar Medición</span>
                <div className="header-spacer-log"></div>
            </div>

            <div className="log-vital-content">

                <label className="form-label">Tipo de Medición</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="vital-type-select"
                >
                    <option value="bp">Presión Arterial</option>
                    <option value="weight">Peso</option>
                    <option value="glucose">Glucosa</option>
                    <option value="hr">Ritmo Cardíaco</option>
                </select>

                <section className="form-section">
                    {type === 'bp' ? (
                        <div className="bp-inputs">
                            <Input label="Sistólica" placeholder="120" type="number" />
                            <Input label="Diastólica" placeholder="80" type="number" />
                        </div>
                    ) : (
                        <Input label="Valor" placeholder="0.0" type="number" />
                    )}

                    <Input label="Fecha" type="datetime-local" />

                    <div>
                        <label className="form-label">Notas</label>
                        <textarea
                            placeholder="Opcional..."
                            className="notes-textarea"
                        />
                    </div>
                </section>

            </div>

            <div className="submit-section">
                <Button fullWidth onClick={() => navigate('/health')}>Guardar Registro</Button>
            </div>
        </div>
    );
};

export default LogVital;
