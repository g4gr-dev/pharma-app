import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';

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
        <div className="flex flex-col h-full bg-white">
            {/* Collapsible Header */}
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '24px' }}>
                <div className="flex align-center justify-between" style={{ marginBottom: '24px' }}>
                    <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', padding: 0 }}>←</button>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>Perfil Familiar</span>
                    <span style={{ fontSize: '20px' }}>⚙️</span>
                </div>

                <div className="flex align-center gap-md">
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                        TM
                    </div>
                    <div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{member.name}</div>
                        <div style={{ opacity: 0.9, fontSize: '14px' }}>{member.relation} • {member.age} años</div>
                    </div>
                </div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <div className="flex gap-md" style={{ marginBottom: '24px' }}>
                    <div className="card flex-1 text-center" style={{ padding: '12px' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>Sangre</div>
                        <div style={{ fontWeight: 'bold' }}>{member.bloodType}</div>
                    </div>
                    <div className="card flex-1 text-center" style={{ padding: '12px' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>Peso</div>
                        <div style={{ fontWeight: 'bold' }}>70kg</div>
                    </div>
                    <div className="card flex-1 text-center" style={{ padding: '12px' }}>
                        <div style={{ fontSize: '12px', color: '#666' }}>Altura</div>
                        <div style={{ fontWeight: 'bold' }}>1.65m</div>
                    </div>
                </div>

                <section style={{ marginBottom: '24px' }}>
                    <h3 className="text-bold" style={{ marginBottom: '12px' }}>Acciones Rápidas</h3>
                    <div className="flex flex-col gap-sm">
                        <Button variant="secondary" fullWidth style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            📅 Ver Historial Médico
                        </Button>
                        <Button variant="secondary" fullWidth style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            💊 Medicamentos Activos
                        </Button>
                        <Button variant="secondary" fullWidth style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                            📹 Solicitar Consulta para ella
                        </Button>
                    </div>
                </section>

                <section>
                    <h3 className="text-bold" style={{ marginBottom: '12px' }}>Notas</h3>
                    <div className="card" style={{ padding: '16px', color: '#555', fontSize: '14px' }}>
                        Alergia a la {member.allergies}. Recordar llevar estudios de cardiología a la próxima visita.
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FamilyMemberDetail;
