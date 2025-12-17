import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './WaitingRoom.css';

const WaitingRoom = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Mock connecting simulation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/consultations/video'), 1000); // Auto-redirect
                    return 100;
                }
                return prev + 5;
            })
        }, 200);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="waiting-room-container">

            <div className="doctor-avatar-waiting">
                <img src="https://via.placeholder.com/120" alt="Doctor" className="waiting-img" />
            </div>

            <h2 className="doctor-name-waiting">Dra. Ana Gómez</h2>
            <p className="doctor-specialty-waiting">Medicina General</p>

            <div className="progress-section">
                <div className="progress-labels">
                    <span>Conectando...</span>
                    <span>{progress}%</span>
                </div>
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="card preparation-card">
                <h4 className="preparation-title">Preparación</h4>
                <div className="flex flex-col gap-sm">
                    <div className="check-item">
                        <span className="check-icon">✓</span> Cámara funcionando
                    </div>
                    <div className="check-item">
                        <span className="check-icon">✓</span> Micrófono activo
                    </div>
                    <div className="check-item">
                        <span className="check-icon">✓</span> Historial compartido
                    </div>
                </div>
            </div>

            <Button variant="secondary" onClick={() => navigate('/dashboard')}>Cancelar Consulta</Button>
        </div>
    );
};

export default WaitingRoom;
