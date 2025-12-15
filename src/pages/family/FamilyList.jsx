import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import BottomNav from '../../components/layout/BottomNav';

const FamilyList = () => {
    const navigate = useNavigate();

    const members = [
        { id: 1, name: 'Tía Marta', relation: 'Tía', age: 65, status: 'Control al día', image: null },
        { id: 2, name: 'Juan (Hijo)', relation: 'Hijo', age: 12, status: 'Vacunas pendientes', image: null },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Mi Familia</span>
                <button onClick={() => navigate('/family/add')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
                </button>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {members.map(member => (
                    <div
                        key={member.id}
                        className="card flex align-center gap-md"
                        style={{ padding: '16px', marginBottom: '16px', cursor: 'pointer' }}
                        onClick={() => navigate(`/family/${member.id}`)}
                    >
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                            {member.image ? <img src={member.image} alt={member.name} /> : '👤'}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="text-bold">{member.name}</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>{member.relation} • {member.age} años</div>
                            <div style={{ fontSize: '12px', color: member.status.includes('pendientes') ? 'orange' : 'var(--color-success)', marginTop: '4px' }}>
                                {member.status}
                            </div>
                        </div>
                        <span style={{ fontSize: '20px', color: '#ccc' }}>›</span>
                    </div>
                ))}

                <div className="card" style={{ padding: '24px', textAlign: 'center', border: '1px dashed #ccc', backgroundColor: '#FAFAFA' }} onClick={() => navigate('/family/add')}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>+</div>
                    <div style={{ fontWeight: '500', color: '#666' }}>Agregar nuevo integrante</div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default FamilyList;
