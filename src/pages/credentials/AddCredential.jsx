import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const AddCredential = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState({ front: null, back: null });

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex align-center justify-between" style={{ padding: '16px 24px' }}>
                <button onClick={() => navigate(-1)} style={{ background: 'none', padding: 0 }}>
                    <span style={{ fontSize: '24px' }}>←</span>
                </button>
                <span className="text-bold" style={{ fontSize: '18px' }}>Nueva Credencial</span>
                <div style={{ width: '24px' }}></div>
            </div>

            <div className="scroll-content flex-grow" style={{ padding: '24px', overflowY: 'auto' }}>

                <h3 className="text-bold" style={{ marginBottom: '16px' }}>Fotos de la Credencial</h3>
                <div className="flex gap-md" style={{ marginBottom: '32px' }}>
                    <div
                        onClick={() => document.getElementById('frontInput').click()}
                        style={{ flex: 1, height: '100px', border: '2px dashed #ccc', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAFAFA' }}
                    >
                        {images.front ? <span style={{ color: 'green' }}>Listo ✔</span> : <><span>📷</span><span style={{ fontSize: '12px' }}>Frente</span></>}
                        <input type="file" id="frontInput" style={{ display: 'none' }} onChange={(e) => setImages({ ...images, front: e.target.files[0] })} />
                    </div>

                    <div
                        onClick={() => document.getElementById('backInput').click()}
                        style={{ flex: 1, height: '100px', border: '2px dashed #ccc', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAFAFA' }}
                    >
                        {images.back ? <span style={{ color: 'green' }}>Listo ✔</span> : <><span>📷</span><span style={{ fontSize: '12px' }}>Dorso</span></>}
                        <input type="file" id="backInput" style={{ display: 'none' }} onChange={(e) => setImages({ ...images, back: e.target.files[0] })} />
                    </div>
                </div>

                <section className="flex flex-col gap-md">
                    <Input label="Obra Social / Prepaga" placeholder="Ej: OSDE" />
                    <Input label="Número de Socio" placeholder="xxxxxxxxxx" />
                    <Input label="Plan" placeholder="Ej: 210" />
                    <Input label="Titular" placeholder="Nombre completo" />

                    <div className="flex align-center gap-sm" style={{ marginTop: '8px' }}>
                        <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                        <span style={{ fontSize: '14px' }}>Es mi credencial principal</span>
                    </div>
                </section>

            </div>

            <div style={{ padding: '24px' }}>
                <Button fullWidth onClick={() => navigate('/credentials')}>Guardar Credencial</Button>
            </div>
        </div>
    );
};

export default AddCredential;
