import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="order-confirmation-container">

            <div className="confirmation-icon-container">
                🎉
            </div>

            <h2 className="confirmation-title">¡Pedido Confirmado!</h2>
            <p className="confirmation-text">Tu pedido #123456 ha sido recibido y está siendo procesado.</p>

            <div className="card tracking-card">
                <h4 className="tracking-title">Seguimiento</h4>
                <div className="tracking-steps-container">
                    <div className="tracking-step">
                        <div className="tracking-dot active"></div>
                        <div className="tracking-info">
                            <div className="tracking-status">Pedido Recibido</div>
                            <div className="tracking-time">10:45 AM</div>
                        </div>
                        <div className="tracking-line"></div>
                    </div>

                    <div className="tracking-step">
                        <div className="tracking-dot inactive"></div>
                        <div className="tracking-info">
                            <div className="tracking-status pending">En preparación</div>
                        </div>
                        <div className="tracking-line"></div>
                    </div>

                    <div className="tracking-step">
                        <div className="tracking-dot inactive"></div>
                        <div className="tracking-info">
                            <div className="tracking-status pending">En camino</div>
                        </div>
                    </div>
                </div>
            </div>

            <Button fullWidth onClick={() => navigate('/dashboard')}>Volver al Inicio</Button>
        </div>
    );
};

export default OrderConfirmation;
