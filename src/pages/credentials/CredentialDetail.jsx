import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CredentialDetail.css';

const CredentialDetail = () => {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);

    // Mock
    const card = { provider: 'OSDE', plan: '410', memberId: '1234567890', holder: 'Gabriela Gómez', color: '#005CA9' };

    return (
        <div className="flex flex-col h-full bg-black text-white">
            {/* Header */}
            <div className="credential-detail-header">
                <button onClick={() => navigate(-1)} className="header-button">
                    <span className="close-icon">✕</span>
                </button>
                <span className="text-bold header-title">Vista Credencial</span>
                <span className="menu-icon">⋮</span>
            </div>

            <div className="detail-content">

                <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`credential-flip-card ${isFlipped ? 'flipped' : ''}`}
                    style={{
                        backgroundColor: card.color,
                    }}
                >
                    {/* Front Mock */}
                    {!isFlipped ? (
                        <div className="card-front">
                            <div className="front-header">
                                <div className="provider-text">{card.provider}</div>
                                <div className="plan-text">Plan {card.plan}</div>
                            </div>
                            <div className="member-id-text">
                                {card.memberId}
                            </div>
                            <div className="holder-text">{card.holder}</div>
                        </div>
                    ) : (
                        <div className="card-back">
                            {/* Back Mock */}
                            <div className="magnetic-strip"></div>
                            <div className="emergency-text">Emergencias: 0800-555-1234</div>
                        </div>
                    )}
                </div>

                <div className="instructions-container">
                    <div>Toca la tarjeta para girarla</div>
                    <div className="brightness-hint">
                        Brillo de pantalla aumentado automáticamente
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CredentialDetail;
