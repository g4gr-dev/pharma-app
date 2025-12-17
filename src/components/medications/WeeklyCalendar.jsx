import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WeeklyCalendar.css';

const WeeklyCalendar = () => {
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState('Lun');

    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

    // Mock Data grouped by time
    const schedule = {
        morning: [
            { id: 1, name: 'Levotiroxina', dose: '100mcg', time: '08:00', stock: 'low' }
        ],
        afternoon: [
            { id: 2, name: 'Amoxicilina', dose: '500mg', time: '14:00', stock: 'ok' }
        ],
        night: [
            { id: 3, name: 'Ibuprofeno', dose: '400mg', time: '20:00', stock: 'ok' },
            { id: 4, name: 'Rosuvastatina', dose: '10mg', time: '22:00', stock: 'low' }
        ]
    };

    const renderMedCard = (med) => (
        <div key={med.id} className="card med-card">
            <div className="med-info">
                <div className="med-time">
                    {med.time}
                </div>
                <div>
                    <div className="med-name">{med.name}</div>
                    <div className="med-dose">{med.dose}</div>
                </div>
            </div>

            <div className="med-actions">
                <input type="checkbox" className="med-checkbox" />
                <button
                    onClick={() => navigate('/orders/review')}
                    className="order-more-btn"
                >
                    Pedir más
                </button>
            </div>
        </div>
    );

    return (
        <div className="weekly-calendar-container">
            {/* Day Picker */}
            <div className="day-picker">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`day-button ${selectedDay === day ? 'active' : ''}`}
                    >
                        <span className="day-name">{day}</span>
                        <span className="day-number">12</span>
                    </button>
                ))}
            </div>

            {/* Time Slots */}
            <div className="time-slots-container">

                {/* Morning */}
                <div>
                    <h3 className="time-slot-title">Mañana</h3>
                    {schedule.morning.map(renderMedCard)}
                </div>

                {/* Afternoon */}
                <div>
                    <h3 className="time-slot-title">Tarde</h3>
                    {schedule.afternoon.map(renderMedCard)}
                    {schedule.afternoon.length === 0 && <div className="empty-slot">Nada programado</div>}
                </div>

                {/* Night */}
                <div>
                    <h3 className="time-slot-title">Noche</h3>
                    {schedule.night.map(renderMedCard)}
                </div>

            </div>
        </div>
    );
};

export default WeeklyCalendar;
