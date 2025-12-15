import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const VitalDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock
    const title = id === 'bp' ? 'Presión Arterial' : id === 'weight' ? 'Peso' : id === 'glucose' ? 'Glucosa' : 'Ritmo C.';
    const color = id === 'bp' ? '#4CAF50' : '#2196F3';

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>{title}</span>
                <span style={{ fontSize: '20px' }}>⚙️</span>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                {/* Chart Area */}
                <div className="card" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <div style={{ textAlign: 'center', color: '#ccc' }}>
                        <div>[Gráfico de {title}]</div>
                        <div style={{ fontSize: '12px' }}>Últimos 30 días</div>
                    </div>
                </div>

                {/* History List */}
                <h3 className="text-bold" style={{ marginBottom: '16px' }}>Historial</h3>
                <div className="flex flex-col gap-md">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex justify-between align-center" style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
                            <div>
                                <div style={{ fontWeight: '500' }}>120/80 mmHg</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>15 Oct, 08:00 AM</div>
                            </div>
                            <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', backgroundColor: '#E8F5E9', color: 'green' }}>Normal</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VitalDetail;
