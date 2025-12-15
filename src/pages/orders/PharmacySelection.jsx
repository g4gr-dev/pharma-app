import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const PharmacySelection = () => {
    const navigate = useNavigate();

    const pharmacies = [
        { id: 1, name: 'Farmacia Del Sol', distance: '1.2 km', price: 3100, time: '20 min' },
        { id: 2, name: 'FarmaLife', distance: '0.5 km', price: 3400, time: '10 min' },
        { id: 3, name: 'Farmacity', distance: '3.0 km', price: 2900, time: '40 min' },
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Elegir Farmacia</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>
                <div className="flex justify-between align-center" style={{ marginBottom: '16px' }}>
                    <span className="text-bold">Cerca de tu ubicación</span>
                    <span style={{ color: 'var(--color-primary)', fontSize: '14px' }}>Cambiar</span>
                </div>

                {pharmacies.map(pharma => (
                    <div key={pharma.id} className="card" style={{ padding: '16px', marginBottom: '16px' }}>
                        <div className="flex justify-between align-start" style={{ marginBottom: '12px' }}>
                            <div>
                                <div className="text-bold" style={{ fontSize: '16px' }}>{pharma.name}</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>{pharma.distance} • {pharma.time}</div>
                            </div>
                            <div className="text-bold" style={{ color: 'var(--color-primary)' }}>${pharma.price}</div>
                        </div>
                        <Button
                            fullWidth
                            variant="secondary"
                            style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}
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
