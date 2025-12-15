import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const CredentialList = () => {
    const navigate = useNavigate();

    const credentials = [
        { id: 1, provider: 'OSDE', plan: '410', memberId: '1234567890', holder: 'Gabriela Gómez', color: '#005CA9' },
        { id: 2, provider: 'Swiss Medical', plan: 'Black', memberId: '987654321', holder: 'Juan Pérez', color: '#D32F2F' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Mis Credenciales</span>
                <button onClick={() => navigate('/credentials/add')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
                </button>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {credentials.map(card => (
                    <div
                        key={card.id}
                        onClick={() => navigate(`/credentials/${card.id}`)}
                        className="card"
                        style={{
                            height: '180px',
                            backgroundColor: card.color,
                            borderRadius: '16px',
                            marginBottom: '24px',
                            padding: '24px',
                            color: 'white',
                            position: 'relative',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <div className="flex justify-between align-start" style={{ marginBottom: '40px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{card.provider}</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Plan {card.plan}</div>
                        </div>

                        <div style={{ fontSize: '18px', letterSpacing: '2px', marginBottom: '16px', fontFamily: 'monospace' }}>
                            {card.memberId}
                        </div>

                        <div className="flex justify-between align-end">
                            <div style={{ fontSize: '14px', textTransform: 'uppercase' }}>{card.holder}</div>
                            <div style={{ fontSize: '12px', opacity: 0.8 }}>Ver Detalle</div>
                        </div>
                    </div>
                ))}

                <div
                    onClick={() => navigate('/credentials/add')}
                    style={{
                        border: '2px dashed #ccc',
                        borderRadius: '16px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: '#999',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>+</div>
                    <div>Agregar Nueva Credencial</div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default CredentialList;
