import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CredentialDetail = () => {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);

    // Mock
    const card = { provider: 'OSDE', plan: '410', memberId: '1234567890', holder: 'Gabriela Gómez', color: '#005CA9' };

    return (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0, color: 'white' }}>
                    <span style={{ fontSize: '24px' }}>✕</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Vista Credencial</span>
                <span style={{ fontSize: '20px' }}>⋮</span>
            </div>

            <div className="flex-grow flex flex-col align-center justify-center p-md" style={{ padding: '24px' }}>

                <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    style={{
                        width: '100%',
                        maxWidth: '350px',
                        aspectRatio: '1.586', // Credit card ratio
                        backgroundColor: card.color,
                        borderRadius: '16px',
                        padding: '24px',
                        color: 'white',
                        position: 'relative',
                        boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                        cursor: 'pointer',
                        transition: 'transform 0.6s',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Front Mock */}
                    {!isFlipped ? (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div className="flex justify-between align-start">
                                <div style={{ fontWeight: 'bold', fontSize: '24px' }}>{card.provider}</div>
                                <div style={{ fontSize: '16px', opacity: 0.8 }}>Plan {card.plan}</div>
                            </div>
                            <div style={{ fontSize: '22px', letterSpacing: '4px', fontFamily: 'monospace', textAlign: 'center' }}>
                                {card.memberId}
                            </div>
                            <div style={{ fontSize: '16px', textTransform: 'uppercase' }}>{card.holder}</div>
                        </div>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotateY(180deg)' }}>
                            {/* Back Mock */}
                            <div style={{ width: '100%', height: '40px', backgroundColor: '#333' }}></div>
                            <div style={{ position: 'absolute', bottom: '24px', fontSize: '12px' }}>Emergencias: 0800-555-1234</div>
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center', opacity: 0.7 }}>
                    <div>Toca la tarjeta para girarla</div>
                    <div style={{ marginTop: '24px', fontSize: '14px' }}>
                        Brillo de pantalla aumentado automáticamente
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CredentialDetail;
