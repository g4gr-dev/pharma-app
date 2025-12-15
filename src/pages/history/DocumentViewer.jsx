import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const DocumentViewer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex align-center justify-between" style={{ padding: '16px 24px', backgroundColor: '#333', color: 'white' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0, color: 'white' }}>
          <span style={{ fontSize: '24px' }}>←</span>
        </button>
        <span className="text-bold" style={{ fontSize: '18px' }}>Análisis de Sangre</span>
        <span style={{ fontSize: '20px' }}>⬇️</span>
      </div>

      <div className="flex-grow" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '90%', height: '80%', backgroundColor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
          Vista Previa del Documento
        </div>
      </div>

      <div style={{ padding: '16px', backgroundColor: 'white' }}>
        <div className="flex justify-between" style={{ marginBottom: '12px' }}>
          <div>
            <div style={{ fontWeight: '600' }}>Laboratorio Central</div>
            <div style={{ fontSize: '12px', color: '#666' }}>10 Oct 2025</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary)' }}>VERIFICADO</div>
          </div>
        </div>
        <Button fullWidth variant="secondary">Compartir con Médico</Button>
      </div>
    </div>
  );
};

export default DocumentViewer;
