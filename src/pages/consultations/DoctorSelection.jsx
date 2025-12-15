import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const DoctorSelection = () => {
    const navigate = useNavigate();

    const doctors = [
        { id: 1, name: 'Dr. Roberto Fernández', specialty: 'Cardiología', rating: 4.8, reviews: 120, wait: '15 min', available: true },
        { id: 2, name: 'Dra. Ana Gómez', specialty: 'Medicina General', rating: 4.9, reviews: 200, wait: '5 min', available: true },
        { id: 3, name: 'Dr. Carlos Lopez', specialty: 'Medicina General', rating: 4.5, reviews: 80, wait: '45 min', available: false },
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Médicos Disponibles</span>
                <span style={{ fontSize: '20px' }}>🔍</span>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {doctors.map(doc => (
                    <div key={doc.id} className="card flex flex-col gap-md" style={{ marginBottom: '16px', padding: '16px' }}>
                        <div className="flex gap-md">
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eee', flexShrink: 0 }}>
                                {/* Placeholder Img */}
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{doc.name}</div>
                                <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{doc.specialty}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', marginTop: '4px' }}>
                                    <span style={{ color: '#FFB400' }}>★</span> {doc.rating} ({doc.reviews} reviews)
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between align-center" style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
                            <div className="flex align-center gap-sm">
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: doc.available ? 'var(--color-success)' : 'orange' }}></span>
                                <span style={{ fontSize: '12px' }}>Espera: {doc.wait}</span>
                            </div>
                            <Button
                                onClick={() => navigate('/consultations/waiting-room')}
                                style={{ padding: '8px 16px', fontSize: '12px' }}
                            >
                                Seleccionar
                            </Button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DoctorSelection;
