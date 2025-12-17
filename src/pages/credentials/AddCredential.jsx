import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import './AddCredential.css';

const AddCredential = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState({ front: null, back: null });

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="add-credential-header">
                <button onClick={() => navigate(-1)} className="header-button">
                    <span className="back-icon">←</span>
                </button>
                <span className="header-title">Nueva Credencial</span>
                <div className="header-spacer"></div>
            </div>

            <div className="add-credential-content">

                <h3 className="section-title">Fotos de la Credencial</h3>
                <div className="photos-container">
                    <div
                        onClick={() => document.getElementById('frontInput').click()}
                        className="photo-upload-box"
                    >
                        {images.front ? <span className="upload-success">Listo ✔</span> : <><span>📷</span><span className="upload-label">Frente</span></>}
                        <input type="file" id="frontInput" className="hidden-input" onChange={(e) => setImages({ ...images, front: e.target.files[0] })} />
                    </div>

                    <div
                        onClick={() => document.getElementById('backInput').click()}
                        className="photo-upload-box"
                    >
                        {images.back ? <span className="upload-success">Listo ✔</span> : <><span>📷</span><span className="upload-label">Dorso</span></>}
                        <input type="file" id="backInput" className="hidden-input" onChange={(e) => setImages({ ...images, back: e.target.files[0] })} />
                    </div>
                </div>

                <section className="flex flex-col gap-md">
                    <Input label="Obra Social / Prepaga" placeholder="Ej: OSDE" />
                    <Input label="Número de Socio" placeholder="xxxxxxxxxx" />
                    <Input label="Plan" placeholder="Ej: 210" />
                    <Input label="Titular" placeholder="Nombre completo" />

                    <div className="main-credential-checkbox">
                        <input type="checkbox" className="checkbox-input" />
                        <span className="checkbox-label">Es mi credencial principal</span>
                    </div>
                </section>

            </div>

            <div className="submit-container">
                <Button fullWidth onClick={() => navigate('/credentials')}>Guardar Credencial</Button>
            </div>
        </div>
    );
};

export default AddCredential;
