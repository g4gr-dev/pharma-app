import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './OrderReview.css';

const OrderReview = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('current');

    // Mock Cart
    const [cart, setCart] = useState([
        { id: 1, name: 'Amoxicilina 500mg', price: 1200, qty: 1 },
        { id: 2, name: 'Ibuprofeno 400mg', price: 800, qty: 2 },
    ]);

    const orderHistory = [
        {
            id: 'ORD-001',
            date: '10 Dic 2025',
            status: 'Entregado',
            statusColor: '#4CAF50',
            deliveryRef: 'Casa - Edificio azul',
            items: [
                { name: 'Paracetamol 500mg', qty: 2 },
                { name: 'Vitamina C', qty: 1 }
            ],
            total: 2500
        },
        {
            id: 'ORD-002',
            date: '5 Dic 2025',
            status: 'En camino',
            statusColor: '#2196F3',
            deliveryRef: 'Oficina - Piso 3',
            items: [
                { name: 'Amoxicilina 500mg', qty: 1 }
            ],
            total: 1500
        },
        {
            id: 'ORD-003',
            date: '28 Nov 2025',
            status: 'Entregado',
            statusColor: '#4CAF50',
            deliveryRef: 'Casa - Portón negro',
            items: [
                { name: 'Ibuprofeno 400mg', qty: 3 },
                { name: 'Aspirina', qty: 1 }
            ],
            total: 3200
        }
    ];

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const handleRepeatOrder = (order) => {
        // Convert order items to cart format
        const newCartItems = order.items.map((item, index) => ({
            id: Date.now() + index, // Generate unique IDs
            name: item.name,
            price: Math.floor(order.total / order.items.reduce((sum, i) => sum + i.qty, 0)), // Estimate price
            qty: item.qty
        }));
        setCart(newCartItems);
        setActiveTab('current');
    };

    return (
        <div className="order-review-container">
            {/* Header */}
            <div className="review-header">
                <button onClick={() => navigate(-1)} className="review-back-btn">
                    <span className="review-back-icon">←</span>
                </button>
                <span className="review-title">Pedidos</span>
                <div className="review-header-spacer"></div>
            </div>

            {/* Tabs */}
            <div className="order-tabs">
                <button
                    className={`order-tab ${activeTab === 'current' ? 'active' : ''}`}
                    onClick={() => setActiveTab('current')}
                >
                    Mi Pedido
                </button>
                <button
                    className={`order-tab ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    Historial de Pedidos
                </button>
            </div>

            <div className="review-content">
                {/* Current Order Tab */}
                {activeTab === 'current' && (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className="card review-item-card">
                                <div>
                                    <div className="review-item-name">{item.name}</div>
                                    <div className="review-item-price">${item.price}</div>
                                </div>
                                <div className="review-item-qty-controls">
                                    <button className="qty-btn-minus">-</button>
                                    <span>{item.qty}</span>
                                    <button className="qty-btn-plus">+</button>
                                </div>
                            </div>
                        ))}

                        <div className="review-summary">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${total}</span>
                            </div>
                            <div className="summary-row">
                                <span>Envío</span>
                                <span>$300</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>${total + 300}</span>
                            </div>
                        </div>
                    </>
                )}

                {/* Order History Tab */}
                {activeTab === 'history' && (
                    <div className="order-history-list">
                        {orderHistory.map(order => (
                            <div key={order.id} className="card order-history-card">
                                <div className="order-history-header">
                                    <div>
                                        <div className="order-history-id">{order.id}</div>
                                        <div className="order-history-date">{order.date}</div>
                                    </div>
                                    <div className="order-history-header-right">
                                        <span
                                            className="order-status-badge"
                                            style={{ backgroundColor: `${order.statusColor}20`, color: order.statusColor }}
                                        >
                                            {order.status}
                                        </span>
                                        <button
                                            className="repeat-order-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRepeatOrder(order);
                                            }}
                                        >
                                            Repetir pedido
                                        </button>
                                    </div>
                                </div>
                                <div className="order-history-delivery">
                                    📍 {order.deliveryRef}
                                </div>
                                <div className="order-history-items">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="order-history-item">
                                            • {item.name} x{item.qty}
                                        </div>
                                    ))}
                                </div>
                                <div className="order-history-total">
                                    Total: <strong>${order.total}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer - only show on current order tab */}
            {activeTab === 'current' && (
                <div className="review-footer">
                    <Button fullWidth onClick={() => navigate('/orders/pharmacies')}>Seleccionar Farmacia</Button>
                </div>
            )}
        </div>
    );
};

export default OrderReview;
