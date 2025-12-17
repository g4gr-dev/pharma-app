import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './OrderReview.css';

const OrderReview = () => {
    const navigate = useNavigate();
    // Mock Cart
    const [cart, setCart] = useState([
        { id: 1, name: 'Amoxicilina 500mg', price: 1200, qty: 1 },
        { id: 2, name: 'Ibuprofeno 400mg', price: 800, qty: 2 },
    ]);

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="order-review-container">
            {/* Header */}
            <div className="review-header">
                <button onClick={() => navigate(-1)} className="review-back-btn">
                    <span className="review-back-icon">←</span>
                </button>
                <span className="review-title">Mi Pedido</span>
                <div className="review-header-spacer"></div>
            </div>

            <div className="review-content">

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

            </div>

            <div className="review-footer">
                <Button fullWidth onClick={() => navigate('/orders/pharmacies')}>Seleccionar Farmacia</Button>
            </div>
        </div>
    );
};

export default OrderReview;
