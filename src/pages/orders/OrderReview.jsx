import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const OrderReview = () => {
    const navigate = useNavigate();
    // Mock Cart
    const [cart, setCart] = useState([
        { id: 1, name: 'Amoxicilina 500mg', price: 1200, qty: 1 },
        { id: 2, name: 'Ibuprofeno 400mg', price: 800, qty: 2 },
    ]);

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Mi Pedido</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {cart.map(item => (
                    <div key={item.id} className="card flex justify-between align-center" style={{ padding: '16px', marginBottom: '16px' }}>
                        <div>
                            <div className="text-bold">{item.name}</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>${item.price}</div>
                        </div>
                        <div className="flex align-center gap-md">
                            <button style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', background: 'white' }}>-</button>
                            <span>{item.qty}</span>
                            <button style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none' }}>+</button>
                        </div>
                    </div>
                ))}

                <div style={{ marginTop: '24px', borderTop: '1px solid #eee', paddingTop: '16px' }}>
                    <div className="flex justify-between" style={{ marginBottom: '8px' }}>
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>
                    <div className="flex justify-between" style={{ marginBottom: '8px' }}>
                        <span>Envío</span>
                        <span>$300</span>
                    </div>
                    <div className="flex justify-between text-bold" style={{ fontSize: '18px', marginTop: '16px' }}>
                        <span>Total</span>
                        <span>${total + 300}</span>
                    </div>
                </div>

            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #f0f0f0' }}>
                <Button fullWidth onClick={() => navigate('/orders/pharmacies')}>Seleccionar Farmacia</Button>
            </div>
        </div>
    );
};

export default OrderReview;
