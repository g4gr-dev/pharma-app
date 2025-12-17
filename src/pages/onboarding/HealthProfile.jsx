import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './HealthProfile.css';

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
        <div className="health-profile-container">
            {/* Header */}
            <div className="health-profile-header">
                <button onClick={() => navigate(-1)} className="health-profile-back-btn">
                    <span className="health-profile-back-icon">←</span>
                </button>
                <div className="health-profile-title-container">
                    <span className="health-profile-title">Perfil de Salud</span>
                    <span className="health-profile-step">Paso 2 de 3</span>
                </div>
                <div className="health-profile-spacer"></div>
            </div>

            {/* Form Content */}
            <div className="health-profile-content">

                {/* Section 1: Basic Data */}
                <section className="health-section">
                    <h3 className="section-title">Datos Básicos</h3>

                    <Input label="Fecha de Nacimiento" type="date" />

                    <div className="gender-container">
                        <label className="gender-label">
                            Género
                        </label>
                        <div className="gender-options">
                            {['Masculino', 'Femenino', 'Otro'].map(g => (
                                <label key={g} className="gender-option">
                                    <input type="radio" name="gender" value={g} />
                                    <span className="gender-text">{g}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="stats-row">
                        <div className="stat-input"><Input label="Altura" placeholder="170" type="number" /></div>
                        <div className="stat-input"><Input label="Peso" placeholder="70" type="number" /></div>
                    </div>
                </section>

                {/* Section 2: Medical Info */}
                <section className="health-section">
                    <h3 className="section-title">Información Médica</h3>

                    <div className="conditions-container">
                        <label className="conditions-label">
                            Condiciones Preexistentes
                        </label>
                        <div className="conditions-list">
                            {['Diabetes', 'Hipertensión', 'Asma', 'Enfermedad cardíaca'].map(cond => (
                                <label key={cond} className="condition-item">
                                    <input type="checkbox" className="checkbox-input" />
                                    <span>{cond}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="allergies-container">
                        <label className="allergies-label">
                            Alergias
                        </label>
                        <textarea
                            placeholder="Describe tus alergias..."
                            rows="3"
                            className="allergies-textarea"
                        />
                    </div>

                    <div className="medication-container">
                        <label className="medication-label">
                            Medicación Actual
                        </label>
                        <div className="medication-input-group">
                            <input
                                value={newMed}
                                onChange={(e) => setNewMed(e.target.value)}
                                placeholder="Nombre del medicamento"
                                className="medication-input"
                            />
                            <button
                                onClick={addMedication}
                                className="add-medication-btn"
                            >
                                +
                            </button>
                        </div>
                        <ul className="medication-list">
                            {medications.map((med, idx) => (
                                <li key={idx} className="medication-item">
                                    <span>{med}</span>
                                    <span className="remove-medication-btn" onClick={() => setMedications(medications.filter((_, i) => i !== idx))}>&times;</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Section 3: Insurance */}
                <section>
                    <h3 className="section-title">Obra Social</h3>
                    <select className="insurance-select">
                        <option value="">Selecciona tu obra social</option>
                        <option value="osde">OSDE</option>
                        <option value="swiss">Swiss Medical</option>
                        <option value="galeno">Galeno</option>
                    </select>
                    <Input label="Número de afiliado" placeholder="XXXXXXXX" />
                </section>

            </div>

            <div className="health-profile-footer">
                <Button fullWidth onClick={() => navigate('/preferences')}>Continuar</Button>
            </div>
        </div>
    );
};

export default HealthProfile;
