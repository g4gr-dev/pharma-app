import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div key={med.id} className="card" style={{ padding: '12px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="flex align-center gap-sm">
                <div style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: '#F5F5F5', padding: '4px 8px', borderRadius: '4px' }}>
                    {med.time}
                </div>
                <div>
                    <div style={{ fontWeight: '600' }}>{med.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{med.dose}</div>
                </div>
            </div>

            <div className="flex flex-col align-end gap-sm">
                <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                <button
                    onClick={() => navigate('/orders/review')}
                    style={{ fontSize: '10px', color: 'var(--color-primary)', background: 'none', border: '1px solid var(--color-primary)', borderRadius: '12px', padding: '2px 8px' }}
                >
                    Pedir más
                </button>
            </div>
        </div>
    );

    return (
        <div>
            {/* Day Picker */}
            <div className="flex justify-between" style={{ marginBottom: '24px', backgroundColor: 'white', padding: '8px 0' }}>
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: selectedDay === day ? 'var(--color-primary)' : 'transparent',
                            color: selectedDay === day ? 'white' : '#666',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 12px',
                            minWidth: '40px',
                            transition: '0.2s'
                        }}
                    >
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{day}</span>
                        <span style={{ fontSize: '10px' }}>12</span>
                    </button>
                ))}
            </div>

            {/* Time Slots */}
            <div className="flex flex-col gap-md">

                {/* Morning */}
                <div>
                    <h3 style={{ fontSize: '14px', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Mañana</h3>
                    {schedule.morning.map(renderMedCard)}
                </div>

                {/* Afternoon */}
                <div>
                    <h3 style={{ fontSize: '14px', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Tarde</h3>
                    {schedule.afternoon.map(renderMedCard)}
                    {schedule.afternoon.length === 0 && <div style={{ fontSize: '12px', color: '#ccc', fontStyle: 'italic' }}>Nada programado</div>}
                </div>

                {/* Night */}
                <div>
                    <h3 style={{ fontSize: '14px', color: '#888', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Noche</h3>
                    {schedule.night.map(renderMedCard)}
                </div>

            </div>
        </div>
    );
};

export default WeeklyCalendar;
