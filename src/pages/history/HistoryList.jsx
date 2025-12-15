import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

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
    <div className="flex flex-col h-full bg-white relative" style={{ paddingBottom: '70px' }}>
      {/* Header */}
      <div className="flex align-center justify-between" style={{ padding: '16px 24px', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10 }}>
        <button onClick={() => navigate('/dashboard')} style={{ background: 'none', padding: 0 }}>
          <span style={{ fontSize: '24px' }}>←</span>
        </button>
        <span className="text-bold" style={{ fontSize: '18px' }}>Historial Médico</span>
        <button onClick={() => navigate('/history/upload')} style={{ background: 'none', padding: 0 }}>
          <span style={{ fontSize: '24px', color: 'var(--color-primary)' }}>+</span>
        </button>
      </div>

      <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

        {/* Filters */}
        <div className="flex gap-sm" style={{ marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
          {['all', 'consult', 'lab', 'vaccine'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid var(--color-primary)',
                backgroundColor: filter === f ? 'var(--color-primary)' : 'white',
                color: filter === f ? 'white' : 'var(--color-primary)',
                fontSize: '12px',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap'
              }}
            >
              {f === 'all' ? 'Todos' : f === 'consult' ? 'Consultas' : f === 'lab' ? 'Estudios' : 'Vacunas'}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-lg">
          {filteredEvents.map((evt, idx) => (
            <div key={evt.id} className="flex gap-md relative" onClick={() => navigate(`/history/${evt.id}`)} style={{ cursor: 'pointer' }}>
              <div className="flex flex-col align-center" style={{ width: '40px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', zIndex: 1 }}>
                  {evt.icon}
                </div>
                {idx < filteredEvents.length - 1 && <div style={{ width: '2px', flex: 1, backgroundColor: '#eee', marginTop: '4px' }}></div>}
              </div>
              <div className="card flex-grow" style={{ padding: '16px', marginBottom: '8px' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{evt.date}</div>
                <div className="text-bold" style={{ marginBottom: '4px' }}>{evt.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
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
