import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import './DocumentViewer.css';

const DocumentViewer = () => {
  const navigate = useNavigate();

  return (
    <div className="document-viewer-container">
      {/* Header */}
      <div className="document-viewer-header">
        <button onClick={() => navigate(-1)} className="viewer-back-btn">
          <span className="viewer-back-icon">←</span>
        </button>
        <span className="viewer-header-title">Análisis de Sangre</span>
        <span className="viewer-download-icon">⬇️</span>
      </div>

      <div className="viewer-content">
        <div className="document-preview-placeholder">
          Vista Previa del Documento
        </div>
      </div>

      <div className="viewer-footer">
        <div className="metadata-row">
          <div>
            <div className="meta-title">Laboratorio Central</div>
            <div className="meta-subtitle">10 Oct 2025</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="meta-status">VERIFICADO</div>
          </div>
        </div>
        <Button fullWidth variant="secondary">Compartir con Médico</Button>
      </div>
    </div>
  );
};

export default DocumentViewer;
