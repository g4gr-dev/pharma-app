import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './UploadDocument.css';

const UploadDocument = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  return (
    <div className="upload-document-container">
      {/* Header */}
      <div className="upload-document-header">
        <button onClick={() => navigate(-1)} className="upload-back-btn">
          <span className="upload-back-icon">←</span>
        </button>
        <span className="upload-header-title">Subir Documento</span>
        <div className="upload-header-spacer"></div>
      </div>

      <div className="upload-content">

        <div
          className="upload-area"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <div className="upload-icon">☁️</div>
          <div className="upload-text-main">Toca para subir archivo</div>
          <div className="upload-text-sub">PDF, JPG, PNG (Max 5MB)</div>
          <input
            type="file"
            id="fileInput"
            className="file-input-hidden"
            onChange={(e) => setFile(e.target.files[0])}
            data-testid="file-input"
          />
        </div>

        {file && (
          <div className="card uploaded-file-card">
            <div className="file-info-row">
              <span>📄</span>
              <span className="file-name-span">{file.name}</span>
            </div>
            <button className="remove-file-btn" onClick={() => setFile(null)}>✕</button>
          </div>
        )}

        <section className="upload-form">
          <Input label="Título del Documento" placeholder="Ej: Análisis de Sangre" />

          <div>
            <label className="form-group-label">Categoría</label>
            <select className="form-select">
              <option>Estudio de Laboratorio</option>
              <option>Imágenes</option>
              <option>Receta Médica</option>
              <option>Certificado</option>
            </select>
          </div>

          <div>
            <label className="form-group-label">Fecha del Estudio</label>
            <input type="date" className="form-date-input" />
          </div>
        </section>

      </div>

      <div className="upload-footer">
        <Button fullWidth onClick={() => navigate('/history')}>Guardar</Button>
      </div>
    </div>
  );
};

export default UploadDocument;
