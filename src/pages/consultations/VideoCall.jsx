import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
    const navigate = useNavigate();
    const [muted, setMuted] = useState(false);
    const [videoOff, setVideoOff] = useState(false);
    const localVideoRef = React.useRef(null);

    React.useEffect(() => {
        let stream = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
            }
        };

        if (!videoOff) {
            startCamera();
        } else {
            if (localVideoRef.current && localVideoRef.current.srcObject) {
                const tracks = localVideoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
                localVideoRef.current.srcObject = null;
            }
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [videoOff]);

    return (
        <div className="flex flex-col h-full bg-black relative" style={{ overflow: 'hidden' }}>
            {/* Header / Back Button */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 20 }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    ←
                </button>
            </div>

            {/* Remote Video (Mock) */}
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://via.placeholder.com/400x800" alt="Doctor Video" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>

            {/* Local Video (PIP) */}
            <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '100px',
                height: '140px',
                backgroundColor: '#000',
                borderRadius: '12px',
                border: '2px solid white',
                overflow: 'hidden',
                zIndex: 10
            }}>
                {videoOff ? (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '24px' }}>
                        🚫
                    </div>
                ) : (
                    <video
                        ref={localVideoRef}
                        autoPlay
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
                    />
                )}
            </div>

            {/* Overlay Info */}
            <div style={{ position: 'absolute', top: '40px', left: '0', right: '0', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ display: 'inline-block', background: 'rgba(0,0,0,0.5)', padding: '4px 12px', borderRadius: '20px', color: 'white' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Dra. Ana Gómez</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>10:23</div>
                </div>
            </div>

            {/* Controls */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                padding: '32px 24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                display: 'flex',
                justifyContent: 'center',
                gap: '24px'
            }}>
                <button
                    onClick={() => setMuted(!muted)}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: muted ? 'white' : 'rgba(255,255,255,0.2)', border: 'none', color: muted ? 'black' : 'white', fontSize: '20px', cursor: 'pointer' }}
                >
                    {muted ? '🔇' : '🎤'}
                </button>

                <button
                    onClick={() => navigate('/consultations/summary')}
                    style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-danger)', border: 'none', color: 'white', fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                    📞
                </button>

                <button
                    onClick={() => setVideoOff(!videoOff)}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: videoOff ? 'white' : 'rgba(255,255,255,0.2)', border: 'none', color: videoOff ? 'black' : 'white', fontSize: '20px', cursor: 'pointer' }}
                >
                    {videoOff ? '🚫' : '📹'}
                </button>
            </div>

        </div>
    );
};

export default VideoCall;
