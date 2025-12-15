import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMedicationOptions = () => {
    const navigate = useNavigate();

    const options = [
        {
            title: 'Ingresar Manualmente',
            desc: 'Escribe el nombre y dosis del medicamento',
            icon: '⌨',
            action: () => navigate('/medications/new')
        },
        {
            title: 'Escanear Receta',
            desc: 'Usa la cámara para escanear tu receta física',
            icon: '📷',
            action: () => alert('Funcionalidad de cámara próximamente')
        },
        {
            title: 'Receta Electrónica',
            desc: 'Importa desde tu última videoconsulta',
            icon: '📄',
            action: () => alert('Importar receta próximamente')
        },
    ];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Agregar Medicamento</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="flex-col gap-md" style={{ padding: '24px' }}>
                {options.map((opt, idx) => (
                    <div
                        key={idx}
                        className="card flex align-center gap-md"
                        style={{ padding: '24px', cursor: 'pointer', transition: '0.2s' }}
                        onClick={opt.action}
                    >
                        <div style={{ fontSize: '32px' }}>{opt.icon}</div>
                        <div>
                            <div className="text-bold" style={{ fontSize: '16px', marginBottom: '4px' }}>{opt.title}</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{opt.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddMedicationOptions;
