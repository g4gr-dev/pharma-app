import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import './FamilyMemberDetail.css';

const FamilyMemberDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock
    const member = {
        name: 'Tía Marta',
        relation: 'Tía',
        age: 65,
        bloodType: 'A+',
        allergies: 'Penicilina'
    };

    return (
        <div className="family-member-detail-container">
            {/* Collapsible Header */}
            <div className="family-member-header">
                <div className="family-header-top">
                    <button onClick={() => navigate(-1)} className="header-back-btn">←</button>
                    <span className="header-title-text">Perfil Familiar</span>
                    <span className="header-settings-icon">⚙️</span>
                </div>

                <div className="family-profile-info">
                    <div className="profile-avatar-circle">
                        TM
                    </div>
                    <div>
                        <div className="profile-name">{member.name}</div>
                        <div className="profile-relation">{member.relation} • {member.age} años</div>
                    </div>
                </div>
            </div>

            <div className="family-detail-content">

                <div className="stats-row">
                    <div className="card stat-card">
                        <div className="stat-label">Sangre</div>
                        <div className="stat-value">{member.bloodType}</div>
                    </div>
                    <div className="card stat-card">
                        <div className="stat-label">Peso</div>
                        <div className="stat-value">70kg</div>
                    </div>
                    <div className="card stat-card">
                        <div className="stat-label">Altura</div>
                        <div className="stat-value">1.65m</div>
                    </div>
                </div>

                <section className="actions-section">
                    <h3 className="section-title">Acciones Rápidas</h3>
                    <div className="actions-list">
                        <Button variant="secondary" fullWidth className="action-btn-left">
                            📅 Ver Historial Médico
                        </Button>
                        <Button variant="secondary" fullWidth className="action-btn-left">
                            💊 Medicamentos Activos
                        </Button>
                        <Button variant="secondary" fullWidth className="action-btn-left">
                            📹 Solicitar Consulta para ella
                        </Button>
                    </div>
                </section>

                <section>
                    <h3 className="section-title">Notas</h3>
                    <div className="card notes-card">
                        Alergia a la {member.allergies}. Recordar llevar estudios de cardiología a la próxima visita.
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FamilyMemberDetail;
