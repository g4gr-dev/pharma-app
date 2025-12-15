import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const DeliveryMethod = () => {
    const navigate = useNavigate();
    const [method, setMethod] = useState('delivery');
    const [scheduleType, setScheduleType] = useState('asap');
    const [selectedAddress, setSelectedAddress] = useState(1);
    const [showAddressList, setShowAddressList] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // Mock Saved Addresses
    const savedAddresses = [
        { id: 1, label: 'Casa', address: 'Av. Libertador 1234, 4A' },
        { id: 2, label: 'Oficina', address: 'San Martín 450, 2B' },
        { id: 3, label: 'Casa de Mamá', address: 'Belgrano 800' },
    ];

    const currentAddress = savedAddresses.find(a => a.id === selectedAddress);

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Método de Entrega</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {/* Toggle */}
                <div className="flex" style={{ backgroundColor: '#F5F5F5', padding: '4px', borderRadius: '12px', marginBottom: '32px' }}>
                    <button
                        onClick={() => setMethod('delivery')}
                        style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: method === 'delivery' ? 'white' : 'transparent', boxShadow: method === 'delivery' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', fontWeight: '600' }}
                    >
                        Delivery
                    </button>
                    <button
                        onClick={() => setMethod('pickup')}
                        style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: method === 'pickup' ? 'white' : 'transparent', boxShadow: method === 'pickup' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', fontWeight: '600' }}
                    >
                        Retiro
                    </button>
                </div>

                {method === 'delivery' ? (
                    <section>
                        <h3 className="text-bold" style={{ marginBottom: '16px' }}>Dirección de Envío</h3>

                        {!showAddressList ? (
                            <div className="card" style={{ padding: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: '600' }}>{currentAddress.label}</div>
                                    <div style={{ fontSize: '14px', color: '#666' }}>{currentAddress.address}</div>
                                </div>
                                <button
                                    onClick={() => setShowAddressList(true)}
                                    style={{ color: 'var(--color-primary)', background: 'none', fontWeight: '600' }}
                                >
                                    Cambiar
                                </button>
                            </div>
                        ) : (
                            <div className="card" style={{ padding: '16px', marginBottom: '24px' }}>
                                {savedAddresses.map(addr => (
                                    <div
                                        key={addr.id}
                                        onClick={() => { setSelectedAddress(addr.id); setShowAddressList(false); }}
                                        style={{
                                            padding: '12px',
                                            borderBottom: '1px solid #eee',
                                            cursor: 'pointer',
                                            backgroundColor: selectedAddress === addr.id ? '#F0F8FF' : 'transparent',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontWeight: '600' }}>{addr.label}</div>
                                            <div style={{ fontSize: '12px', color: '#666' }}>{addr.address}</div>
                                        </div>
                                        {selectedAddress === addr.id && <span>✔</span>}
                                    </div>
                                ))}
                                <button
                                    style={{ marginTop: '12px', width: '100%', padding: '8px', border: '1px dashed #ccc', borderRadius: '8px', color: '#666' }}
                                >
                                    + Agregar nueva dirección
                                </button>
                            </div>
                        )}

                        <h3 className="text-bold" style={{ marginBottom: '16px' }}>Horario Preferido</h3>
                        <div className="flex gap-sm" style={{ marginBottom: '16px' }}>
                            <button
                                onClick={() => setScheduleType('asap')}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    border: scheduleType === 'asap' ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                    borderRadius: '8px',
                                    backgroundColor: scheduleType === 'asap' ? '#E0F7FA' : 'white',
                                    fontWeight: '600'
                                }}
                            >
                                Lo antes posible
                            </button>
                            <button
                                onClick={() => setScheduleType('scheduled')}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    border: scheduleType === 'scheduled' ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                    borderRadius: '8px',
                                    backgroundColor: scheduleType === 'scheduled' ? '#E0F7FA' : 'white',
                                    fontWeight: '600'
                                }}
                            >
                                Programar
                            </button>
                        </div>

                        {scheduleType === 'scheduled' && (
                            <div className="card" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Fecha</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '4px' }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Hora</label>
                                    <select
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '4px' }}
                                    >
                                        <option value="">Elegir...</option>
                                        <option value="09:00 - 11:00">09:00 - 11:00</option>
                                        <option value="11:00 - 13:00">11:00 - 13:00</option>
                                        <option value="14:00 - 16:00">14:00 - 16:00</option>
                                        <option value="16:00 - 18:00">16:00 - 18:00</option>
                                    </select>
                                </div>
                            </div>
                        )}

                    </section>
                ) : (
                    <section>
                        <h3 className="text-bold" style={{ marginBottom: '16px' }}>Punto de Retiro</h3>
                        <div className="card" style={{ padding: '16px' }}>
                            <div style={{ fontWeight: '600' }}>Farmacia Del Sol</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>Calle Falsa 123</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-success)', marginTop: '8px' }}>Disponible para retiro inmediato</div>
                        </div>
                    </section>
                )}

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <div className="flex justify-between text-bold" style={{ marginBottom: '16px', fontSize: '18px' }}>
                    <span>Total</span>
                    <span>$3100</span>
                </div>
                <Button fullWidth onClick={() => navigate('/orders/confirmation')}>Confirmar y Pagar</Button>
            </div>
        </div>
    );
};

export default DeliveryMethod;
