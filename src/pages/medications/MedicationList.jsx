import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import BottomNav from '../../components/layout/BottomNav';
import WeeklyCalendar from '../../components/medications/WeeklyCalendar';

const MedicationList = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('list'); // 'list' | 'calendar'

    // Mock Data
    const medications = [
        { id: 1, name: 'Amoxicilina', dose: '500mg', time: '14:00', frequency: 'Cada 8 horas', taken: false, type: 'pill' },
        { id: 2, name: 'Ibuprofeno', dose: '400mg', time: '20:00', frequency: 'Cada 8 horas', taken: false, type: 'pill' },
    ];

    return (
        <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>

            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
                <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>

                {/* View Toggle */}
                <div className="flex" style={{ backgroundColor: '#F5F5F5', borderRadius: '20px', padding: '2px' }}>
                    <button
                        onClick={() => setView('list')}
                        style={{
                            padding: '4px 12px',
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: view === 'list' ? 'white' : 'transparent',
                            boxShadow: view === 'list' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                            fontSize: '12px',
                            fontWeight: view === 'list' ? '600' : '400'
                        }}
                    >
                        Lista
                    </button>
                    <button
                        onClick={() => setView('calendar')}
                        style={{
                            padding: '4px 12px',
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: view === 'calendar' ? 'white' : 'transparent',
                            boxShadow: view === 'calendar' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                            fontSize: '12px',
                            fontWeight: view === 'calendar' ? '600' : '400'
                        }}
                    >
                        Calendario
                    </button>
                </div>

                <button onClick={() => navigate('/medications/add')} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
                </button>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '0 24px 24px', overflowY: 'auto' }}>

                {view === 'list' ? (
                    <>
                        {/* Adherence Card */}
                        <div className="card flex align-center justify-between" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: 'white' }}>
                            <div>
                                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>85%</div>
                                <div style={{ fontSize: '12px', opacity: 0.9 }}>Adherencia Semanal</div>
                            </div>
                            <div className="text-right">
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>¡Excelente!</div>
                                <div style={{ fontSize: '12px', opacity: 0.9 }}>Sigue así</div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-md">
                            {medications.map(med => (
                                <div key={med.id} className="card flex justify-between align-center" style={{ padding: '16px' }}>
                                    <div className="flex align-center gap-md">
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: '#E3F2FD',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '20px'
                                        }}>
                                            💊
                                        </div>
                                        <div>
                                            <div className="text-bold">{med.name}</div>
                                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                                {med.dose} • {med.frequency}
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--color-primary)', marginTop: '4px' }}>
                                                Próxima: {med.time}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-sm">
                                        <button
                                            style={{
                                                backgroundColor: med.taken ? '#E0E0E0' : '#4CAF50',
                                                color: 'white',
                                                padding: '8px 12px',
                                                borderRadius: '8px',
                                                fontSize: '12px'
                                            }}
                                            onClick={() => alert(`Tomar ${med.name}`)}
                                        >
                                            {med.taken ? 'Tomado' : 'Tomar'}
                                        </button>
                                        <button
                                            style={{ background: 'none', color: 'var(--color-text-secondary)', fontSize: '12px' }}
                                            onClick={() => navigate(`/medications/${med.id}`)}
                                        >
                                            Detalles
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <WeeklyCalendar />
                )}

            </div>

            <BottomNav />
        </div>
    );
};

export default MedicationList;
