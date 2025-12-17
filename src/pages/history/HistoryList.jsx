import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './HistoryList.css';

const HistoryList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const events = [
    { id: 1, type: 'consult', title: 'Consulta General', date: '15 Oct 2025', doctor: 'Dra. Ana Gómez', icon: '🩺' },
    { id: 2, type: 'lab', title: 'Análisis de Sangre', date: '10 Oct 2025', facility: 'Laboratorio Central', icon: '🧪' },
    { id: 3, type: 'vaccine', title: 'Vacuna Gripe', date: '01 Mar 2025', facility: 'Vacunatorio', icon: '💉' },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);

  return (
    <div className="history-list-container">
      {/* Header */}
      <div className="history-list-header">
        <button onClick={() => navigate('/dashboard')} className="history-back-btn">
          <span className="history-back-icon">←</span>
        </button>
        <span className="history-header-title">Historial Médico</span>
        <button onClick={() => navigate('/history/upload')} className="history-add-btn">
          <span className="history-add-icon">+</span>
        </button>
      </div>

      <div className="history-content">

        {/* Filters */}
        <div className="filters-container">
          {['all', 'consult', 'lab', 'vaccine'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill ${filter === f ? 'active' : 'inactive'}`}
            >
              {f === 'all' ? 'Todos' : f === 'consult' ? 'Consultas' : f === 'lab' ? 'Estudios' : 'Vacunas'}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {filteredEvents.map((evt, idx) => (
            <div key={evt.id} className="timeline-item" onClick={() => navigate(`/history/${evt.id}`)}>
              <div className="timeline-left-col">
                <div className="timeline-icon-circle">
                  {evt.icon}
                </div>
                {idx < filteredEvents.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="card timeline-card">
                <div className="event-date">{evt.date}</div>
                <div className="event-title">{evt.title}</div>
                <div className="event-subtitle">
                  {evt.doctor || evt.facility}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <BottomNav />
    </div>
  );
};

export default HistoryList;
