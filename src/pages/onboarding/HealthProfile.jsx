import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import BottomNav from '../../components/layout/BottomNav';
import './HealthProfile.css';

const HealthProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get('tab') === 'credentials' ? 'credentials' : 'profile';
    const [activeTab, setActiveTab] = useState(initialTab);

    // Profile State
    const [medications, setMedications] = useState([]);
    const [newMed, setNewMed] = useState('');

    // Credentials State
    const credentials = [
        { id: 1, provider: 'OSDE', plan: '410', memberId: 'XXX XXX 8906', holder: 'Gabriela Gómez', backgroundColor: 'var( --c_blue500 )' },
        { id: 2, provider: 'Swiss Medical', plan: 'Black', memberId: 'XXX XXX 6527', holder: 'Juan Pérez', backgroundColor: 'var( --c_red500 )' },
    ];

    useEffect(() => {
        const tab = queryParams.get('tab');
        if (tab === 'credentials') {
            setActiveTab('credentials');
        } else {
            setActiveTab('profile');
        }
    }, [location.search]);

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
                    <span className="health-profile-title">Mi Perfil</span>
                    <span className="health-profile-step">Gestiona tu información</span>
                </div>
                {activeTab === 'credentials' ? (
                    <button onClick={() => navigate('/credentials/add')} className="nav-icon-btn">
                        <span className="add-icon-text">+</span>
                    </button>
                ) : (
                    <div className="health-profile-spacer"></div>
                )}
            </div>

            {/* Tab Switcher */}
            <div className="profile-tabs">
                <button
                    className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => navigate('/profile?tab=profile')}
                >
                    Perfil
                </button>
                <button
                    className={`profile-tab ${activeTab === 'credentials' ? 'active' : ''}`}
                    onClick={() => navigate('/profile?tab=credentials')}
                >
                    Credenciales
                </button>
            </div>

            {/* Content Area */}
            <div className="health-profile-content">
                {activeTab === 'profile' ? (
                    <div className="profile-tab-content">
                        {/* Section 1: Basic Data */}
                        <section className="health-section">
                            <h3 className="section-title">Datos Básicos</h3>
                            <Input label="Fecha de Nacimiento" type="date" />
                            <div className="gender-container">
                                <label className="gender-label">Género</label>
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
                                <label className="conditions-label">Condiciones Preexistentes</label>
                                <div className="conditions-list">
                                    {['Diabetes', 'Asma'].map(cond => (
                                        <label key={cond} className="condition-item">
                                            <input type="checkbox" className="checkbox-input" />
                                            <span>{cond}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="allergies-container">
                                <label className="allergies-label">Alergias</label>
                                <textarea placeholder="Describe tus alergias..." rows="3" className="allergies-textarea" />
                            </div>
                            <div className="medication-container">
                                <label className="medication-label">Medicación Actual</label>
                                <div className="medication-input-group">
                                    <input
                                        value={newMed}
                                        onChange={(e) => setNewMed(e.target.value)}
                                        placeholder="Nombre del medicamento"
                                        className="medication-input"
                                    />
                                    <button onClick={addMedication} className="add-medication-btn">+</button>
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
                        <section className="health-section">
                            <h3 className="section-title">Obra Social</h3>
                            <select className="insurance-select">
                                <option value="">Selecciona tu obra social</option>
                                <option value="osde">OSDE</option>
                                <option value="swiss">Swiss Medical</option>
                                <option value="galeno">Galeno</option>
                            </select>
                            <Input label="Número de afiliado" placeholder="XXXXXXXX" />
                        </section>

                        <div className="health-profile-footer">
                            <Button fullWidth onClick={() => navigate('/preferences')}>Guardar Cambios</Button>
                        </div>
                    </div>
                ) : (
                    <div className="credentials-tab-content">
                        <div className="credentials-scroll-area">
                            {credentials.map(card => (
                                <div
                                    key={card.id}
                                    onClick={() => navigate(`/credentials/${card.id}`)}
                                    className="credential-card"
                                    style={{ backgroundColor: card.backgroundColor }}
                                >
                                    <div className="card-header-row">
                                        <div className="provider-name">{card.provider}</div>
                                        <div className="plan-info">Plan {card.plan}</div>
                                    </div>
                                    <div className="card-number-row">{card.memberId}</div>
                                    <div className="card-footer-row">
                                        <div className="holder-name">{card.holder}</div>
                                        <div className="view-detail">Ver Detalle</div>
                                    </div>
                                </div>
                            ))}

                            <div onClick={() => navigate('/credentials/add')} className="add-card-button">
                                <div className="add-symbol">+</div>
                                <div>Agregar Nueva Credencial</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <BottomNav />
        </div>
    );
};

export default HealthProfile;
