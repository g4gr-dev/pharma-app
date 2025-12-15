import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-white align-center justify-center text-center p-md" style={{ padding: '24px' }}>

            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '40px' }}>
                🎉
            </div>

            <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>¡Pedido Confirmado!</h2>
            <p style={{ color: '#666', marginBottom: '40px' }}>Tu pedido #123456 ha sido recibido y está siendo procesado.</p>

            <div className="card w-full text-left" style={{ padding: '24px', marginBottom: '40px' }}>
                <h4 style={{ marginBottom: '24px' }}>Seguimiento</h4>
                <div className="flex flex-col gap-lg">
                    <div className="flex gap-md relative">
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-success)', position: 'relative', zIndex: 1 }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>Pedido Recibido</div>
                            <div style={{ fontSize: '12px', color: '#999' }}>10:45 AM</div>
                        </div>
                        <div style={{ position: 'absolute', left: '5px', top: '12px', width: '2px', height: '30px', backgroundColor: '#ddd' }}></div>
                    </div>

                    <div className="flex gap-md relative">
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ddd', position: 'relative', zIndex: 1 }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#999' }}>En preparación</div>
                        </div>
                        <div style={{ position: 'absolute', left: '5px', top: '12px', width: '2px', height: '30px', backgroundColor: '#ddd' }}></div>
                    </div>

                    <div className="flex gap-md">
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ddd', position: 'relative', zIndex: 1 }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#999' }}>En camino</div>
                        </div>
                    </div>
                </div>
            </div>

            <Button fullWidth onClick={() => navigate('/dashboard')}>Volver al Inicio</Button>
        </div>
    );
};

export default OrderConfirmation;
