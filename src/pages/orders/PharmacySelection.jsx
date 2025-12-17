import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './PharmacySelection.css';

const PharmacySelection = () => {
    const navigate = useNavigate();

    const pharmacies = [
        { id: 1, name: 'Farmacia Central Oeste Mareque', distance: '1.2 km', price: 3100, time: '20 min' },
        { id: 2, name: 'Farmacia Central Oeste Moron', distance: '0.5 km', price: 3400, time: '10 min' },
        { id: 3, name: 'Farmacia Central Oeste Boticaria SRL', distance: '3.0 km', price: 2900, time: '40 min' },
    ];

    return (
        <div className="pharmacy-selection-container">
            {/* Header */}
            <div className="pharmacy-header">
                <button onClick={() => navigate(-1)} className="pharmacy-back-btn">
                    <span className="pharmacy-back-icon">←</span>
                </button>
                <span className="pharmacy-title">Elegir Farmacia</span>
                <div className="pharmacy-header-spacer"></div>
            </div>

            <div className="pharmacy-content">
                <div className="location-header">
                    <span className="location-text">Cerca de tu ubicación</span>
                    <button className="change-location-btn">Cambiar</button>
                </div>

                {pharmacies.map(pharma => (
                    <div key={pharma.id} className="card pharmacy-card">
                        <div className="pharmacy-info-row">
                            <div>
                                <div className="pharmacy-name">{pharma.name}</div>
                                <div className="pharmacy-details">{pharma.distance} • {pharma.time}</div>
                            </div>
                            <div className="pharmacy-price">${pharma.price}</div>
                        </div>
                        <Button
                            fullWidth
                            variant="secondary"
                            className="select-pharmacy-btn"
                            onClick={() => navigate('/orders/delivery')}
                        >
                            Seleccionar
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PharmacySelection;
