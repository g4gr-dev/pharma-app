import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './CredentialList.css';

const CredentialList = () => {
    const navigate = useNavigate();

    const credentials = [
        { id: 1, provider: 'OSDE', plan: '410', memberId: 'XXX XXX 8906', holder: 'Gabriela Gómez', backgroundColor: 'var( --c_blue500 )' },
        { id: 2, provider: 'Swiss Medical', plan: 'Black', memberId: 'XXX XXX 6527', holder: 'Juan Pérez', backgroundColor: 'var( --c_red500 )' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative credential-list-container">
            {/* Header */}
            <div className="credential-header">
                <button onClick={() => navigate('/dashboard')} className="nav-button">
                    <span className="back-arrow">←</span>
                </button>
                <span className="text-title">Mis Credenciales</span>
                <button onClick={() => navigate('/credentials/add')} className="nav-button">
                    <span className="add-icon">+</span>
                </button>
            </div>

            <div className="scroll-content">

                {credentials.map(card => (
                    <div
                        key={card.id}
                        onClick={() => navigate(`/credentials/${card.id}`)}
                        className="credential-card"
                        style={{
                            backgroundColor: card.backgroundColor,
                        }}
                    >
                        <div className="card-header">
                            <div className="provider-name">{card.provider}</div>
                            <div className="plan-info">Plan {card.plan}</div>
                        </div>

                        <div className="card-number">
                            {card.memberId}
                        </div>

                        <div className="card-footer">
                            <div className="holder-name">{card.holder}</div>
                            <div className="view-detail">Ver Detalle</div>
                        </div>
                    </div>
                ))}

                <div
                    onClick={() => navigate('/credentials/add')}
                    className="add-card-button"
                >
                    <div className="add-symbol">+</div>
                    <div>Agregar Nueva Credencial</div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default CredentialList;
