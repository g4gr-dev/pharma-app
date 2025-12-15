import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

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
        <div className="flex flex-col h-full bg-white align-center justify-center p-md" style={{ padding: '24px' }}>

            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '24px', border: '4px solid var(--color-primary)' }}>
                <img src="https://via.placeholder.com/120" alt="Doctor" />
            </div>

            <h2 style={{ marginBottom: '8px' }}>Dra. Ana Gómez</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px' }}>Medicina General</p>

            <div style={{ width: '100%', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>Conectando...</span>
                    <span>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: '#EFF0F6', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--color-primary)', transition: '0.2s' }}></div>
                </div>
            </div>

            <div className="card w-full" style={{ padding: '16px', marginBottom: '24px' }}>
                <h4 style={{ marginBottom: '12px' }}>Preparación</h4>
                <div className="flex flex-col gap-sm">
                    <div className="flex align-center gap-sm">
                        <span style={{ color: 'var(--color-success)' }}>✓</span> Cámara funcionando
                    </div>
                    <div className="flex align-center gap-sm">
                        <span style={{ color: 'var(--color-success)' }}>✓</span> Micrófono activo
                    </div>
                    <div className="flex align-center gap-sm">
                        <span style={{ color: 'var(--color-success)' }}>✓</span> Historial compartido
                    </div>
                </div>
            </div>

            <Button variant="secondary" onClick={() => navigate('/dashboard')}>Cancelar Consulta</Button>
        </div>
    );
};

export default WaitingRoom;
