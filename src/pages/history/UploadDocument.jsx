import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const UploadDocument = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
          <span style={{ fontSize: '24px' }}>←</span>
        </button>
        <span className="text-bold" style={{ fontSize: '18px' }}>Subir Documento</span>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

        <div
          style={{
            border: '2px dashed #ccc',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#FAFAFA',
            marginBottom: '32px'
          }}
          onClick={() => document.getElementById('fileInput').click()}
        >
          <div style={{ fontSize: '40px', marginBottom: '16px', color: '#ccc' }}>☁️</div>
          <div style={{ fontWeight: '500', marginBottom: '8px' }}>Toca para subir archivo</div>
          <div style={{ fontSize: '12px', color: '#999' }}>PDF, JPG, PNG (Max 5MB)</div>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
        </div>

        {file && (
          <div className="card flex align-center justify-between" style={{ padding: '16px', marginBottom: '24px' }}>
            <div className="flex align-center gap-sm">
              <span>📄</span>
              <span style={{ fontSize: '14px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
            </div>
            <button style={{ color: 'red', border: 'none', background: 'none' }} onClick={() => setFile(null)}>✕</button>
          </div>
        )}

        <section className="flex flex-col gap-md">
          <Input label="Título del Documento" placeholder="Ej: Análisis de Sangre" />

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Categoría</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0' }}>
              <option>Estudio de Laboratorio</option>
              <option>Imágenes</option>
              <option>Receta Médica</option>
              <option>Certificado</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Fecha del Estudio</label>
            <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E0E0E0' }} />
          </div>
        </section>

      </div>

      <div style={{ padding: '24px' }}>
        <Button fullWidth onClick={() => navigate('/history')}>Guardar</Button>
      </div>
    </div>
  );
};

export default UploadDocument;
