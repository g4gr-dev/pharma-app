import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './DoctorSelection.css';

const DoctorSelection = () => {
    const navigate = useNavigate();

    const doctors = [
        { id: 1, name: 'Dr. Roberto Fernández', specialty: 'Cardiología', rating: 4.8, reviews: 120, wait: '15 min', available: true },
        { id: 2, name: 'Dra. Ana Gómez', specialty: 'Medicina General', rating: 4.9, reviews: 200, wait: '5 min', available: true },
        { id: 3, name: 'Dr. Carlos Lopez', specialty: 'Medicina General', rating: 4.5, reviews: 80, wait: '45 min', available: false },
    ];

    return (
        <div className="doctor-selection-container">
            {/* Header */}
            <div className="doctor-selection-header">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <span className="back-arrow-icon">←</span>
                </button>
                <span className="header-title-doc">Médicos Disponibles</span>
                <span className="search-icon">🔍</span>
            </div>

            <div className="doctor-list-content">

                {doctors.map(doc => (
                    <div key={doc.id} className="card doctor-card">
                        <div className="doctor-info-row">
                            <div className="doctor-avatar-placeholder">
                                {/* Placeholder Img */}
                            </div>
                            <div>
                                <div className="doctor-name">{doc.name}</div>
                                <div className="doctor-specialty">{doc.specialty}</div>
                                <div className="doctor-rating">
                                    <span className="star-icon">★</span> {doc.rating} ({doc.reviews} reviews)
                                </div>
                            </div>
                        </div>

                        <div className="doctor-action-row">
                            <div className="availability-info">
                                <span className="availability-dot" style={{ backgroundColor: doc.available ? 'var(--color-success)' : 'orange' }}></span>
                                <span className="wait-time-text">Espera: {doc.wait}</span>
                            </div>
                            <Button
                                onClick={() => navigate('/consultations/waiting-room')}
                                className="select-doctor-btn"
                            >
                                Seleccionar
                            </Button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DoctorSelection;
