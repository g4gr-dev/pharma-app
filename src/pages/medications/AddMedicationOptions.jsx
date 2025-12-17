import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMedicationOptions.css';

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
        <div className="add-med-options-container">
            {/* Header */}
            <div className="add-med-header">
                <button onClick={() => navigate(-1)} className="add-med-back-btn">
                    <span className="add-med-back-icon">←</span>
                </button>
                <span className="add-med-header-title">Agregar Medicamento</span>
                <div className="add-med-header-spacer"></div>
            </div>

            <div className="add-med-content">
                {options.map((opt, idx) => (
                    <div
                        key={idx}
                        className="card add-med-option-card"
                        onClick={opt.action}
                    >
                        <div className="add-med-option-icon">{opt.icon}</div>
                        <div>
                            <div className="add-med-option-title">{opt.title}</div>
                            <div className="add-med-option-desc">{opt.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddMedicationOptions;
