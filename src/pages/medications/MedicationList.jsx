import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import WeeklyCalendar from '../../components/medications/WeeklyCalendar';
import './MedicationList.css';

const MedicationList = () => {
    const navigate = useNavigate();

    // Mock Data
    const medications = [
        { id: 1, name: 'Amoxicilina', dose: '500mg', time: '14:00', frequency: 'Cada 8 horas', taken: false, type: 'pill' },
        { id: 2, name: 'Ibuprofeno', dose: '400mg', time: '20:00', frequency: 'Cada 8 horas', taken: false, type: 'pill' },
    ];

    return (
        <div className="medication-list-container">

            {/* Header */}
            <div className="medication-list-header">
                <button onClick={() => navigate('/dashboard')} className="med-back-btn">
                    <span className="med-header-icon">←</span>
                </button>
                <span className="med-header-title">Pastillero Virtual</span>
                <button onClick={() => navigate('/medications/add')} className="med-add-btn">
                    <span className="med-add-icon">+</span>
                </button>
            </div>

            <div className="medication-content">

                {/* Adherence Card */}
                <div className="card adherence-card">
                    <div>
                        <div className="adherence-value">85%</div>
                        <div className="adherence-label">Adherencia Semanal</div>
                    </div>
                    <div className="text-right">
                        <div className="adherence-status">¡Excelente!</div>
                        <div className="adherence-substatus">Sigue así</div>
                    </div>
                </div>

                {/* List */}
                <div className="medication-list-section">
                    <h3 className="section-title">Próximas Dosis</h3>
                    {medications.map(med => (
                        <div key={med.id} className="card medication-card">
                            <div className="med-info-group">
                                <div className="med-icon-circle">
                                    💊
                                </div>
                                <div>
                                    <div className="med-name">{med.name}</div>
                                    <div className="med-details-text">
                                        {med.dose} • {med.frequency}
                                    </div>
                                    <div className="med-next-dose">
                                        Próxima: {med.time}
                                    </div>
                                </div>
                            </div>

                            <div className="med-actions">
                                <button
                                    className={`take-btn ${med.taken ? 'taken' : 'pending'}`}
                                    onClick={() => alert(`Tomar ${med.name}`)}
                                >
                                    {med.taken ? 'Tomado' : 'Tomar'}
                                </button>
                                <button
                                    className="details-btn"
                                    onClick={() => navigate(`/medications/${med.id}`)}
                                >
                                    Detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calendar Section */}
                <div>
                    <h3 className="calendar-section-title">Calendario Semanal</h3>
                    <WeeklyCalendar />
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default MedicationList;
