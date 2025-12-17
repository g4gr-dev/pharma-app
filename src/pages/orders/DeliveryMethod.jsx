import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './DeliveryMethod.css';

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
        <div className="delivery-method-container">
            {/* Header */}
            <div className="delivery-header">
                <button onClick={() => navigate(-1)} className="delivery-back-btn">
                    <span className="delivery-back-icon">←</span>
                </button>
                <span className="delivery-title">Método de Entrega</span>
                <div className="delivery-header-spacer"></div>
            </div>

            <div className="delivery-content">

                {/* Toggle */}
                <div className="method-toggle">
                    <button
                        onClick={() => setMethod('delivery')}
                        className={`toggle-btn ${method === 'delivery' ? 'active' : 'inactive'}`}
                    >
                        Delivery
                    </button>
                    <button
                        onClick={() => setMethod('pickup')}
                        className={`toggle-btn ${method === 'pickup' ? 'active' : 'inactive'}`}
                    >
                        Retiro
                    </button>
                </div>

                {method === 'delivery' ? (
                    <section>
                        <h3 className="section-title">Dirección de Envío</h3>

                        {!showAddressList ? (
                            <div className="card address-card">
                                <div>
                                    <div className="address-label">{currentAddress.label}</div>
                                    <div className="address-details">{currentAddress.address}</div>
                                </div>
                                <button
                                    onClick={() => setShowAddressList(true)}
                                    className="change-address-btn"
                                >
                                    Cambiar
                                </button>
                            </div>
                        ) : (
                            <div className="card address-list-card">
                                {savedAddresses.map(addr => (
                                    <div
                                        key={addr.id}
                                        onClick={() => { setSelectedAddress(addr.id); setShowAddressList(false); }}
                                        className={`address-item ${selectedAddress === addr.id ? 'selected' : ''}`}
                                    >
                                        <div>
                                            <div className="address-label">{addr.label}</div>
                                            <div className="address-details">{addr.address}</div>
                                        </div>
                                        {selectedAddress === addr.id && <span>✔</span>}
                                    </div>
                                ))}
                                <button className="add-address-btn">
                                    + Agregar nueva dirección
                                </button>
                            </div>
                        )}

                        <h3 className="section-title">Horario Preferido</h3>
                        <div className="schedule-buttons">
                            <button
                                onClick={() => setScheduleType('asap')}
                                className={`schedule-btn ${scheduleType === 'asap' ? 'selected' : 'unselected'}`}
                            >
                                Lo antes posible
                            </button>
                            <button
                                onClick={() => setScheduleType('scheduled')}
                                className={`schedule-btn ${scheduleType === 'scheduled' ? 'selected' : 'unselected'}`}
                            >
                                Programar
                            </button>
                        </div>

                        {scheduleType === 'scheduled' && (
                            <div className="card schedule-inputs">
                                <div className="input-group">
                                    <label className="input-label">Fecha</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="schedule-input"
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Hora</label>
                                    <select
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="schedule-input"
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
                        <h3 className="section-title">Punto de Retiro</h3>
                        <div className="card pickup-details-card">
                            <div style={{ fontWeight: '600' }}>Farmacia Central Oeste Moron</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>Av. Rivadaria 18.000</div>
                            <div className="pickup-status">Disponible para retiro inmediato / PickUp</div>
                        </div>
                    </section>
                )}

            </div>

            <div className="delivery-footer">
                <div className="total-row">
                    <span>Total</span>
                    <span>$3100</span>
                </div>
                <Button fullWidth onClick={() => navigate('/orders/confirmation')}>Confirmar y Pagar</Button>
            </div>
        </div>
    );
};

export default DeliveryMethod;
