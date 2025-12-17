import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCall.css';

const VideoCall = () => {
    const navigate = useNavigate();
    const [muted, setMuted] = useState(false);
    const [videoOff, setVideoOff] = useState(false);
    const localVideoRef = React.useRef(null);

    React.useEffect(() => {
        let stream = null;

        const startCamera = async () => {
            try {
                // Check if mediaDevices is supported
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                    if (localVideoRef.current) {
                        localVideoRef.current.srcObject = stream;
                    }
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
        <div className="video-call-container">
            {/* Header / Back Button */}
            <div className="video-back-container">
                <button
                    onClick={() => navigate(-1)}
                    className="video-back-btn"
                >
                    ←
                </button>
            </div>

            {/* Remote Video (Mock) */}
            <div className="remote-video-container">
                <img src="https://via.placeholder.com/400x800" alt="Doctor Video" className="remote-video-img" />
            </div>

            {/* Local Video (PIP) */}
            <div className="local-video-pip">
                {videoOff ? (
                    <div className="local-video-off-placeholder">
                        🚫
                    </div>
                ) : (
                    <video
                        ref={localVideoRef}
                        autoPlay
                        muted
                        playsInline
                        className="local-video-element"
                    />
                )}
            </div>

            {/* Overlay Info */}
            <div className="overlay-info-container">
                <div className="overlay-info-badge">
                    <div className="doctor-name-overlay">Dra. Ana Gómez</div>
                    <div className="call-timer">10:23</div>
                </div>
            </div>

            {/* Controls */}
            <div className="call-controls-container">
                <button
                    onClick={() => setMuted(!muted)}
                    className="control-btn"
                    style={{
                        backgroundColor: muted ? 'white' : 'rgba(255,255,255,0.2)',
                        color: muted ? 'black' : 'white'
                    }}
                >
                    {muted ? '🔇' : '🎤'}
                </button>

                <button
                    onClick={() => navigate('/consultations/summary')}
                    className="end-call-btn"
                >
                    📞
                </button>

                <button
                    onClick={() => setVideoOff(!videoOff)}
                    className="control-btn"
                    style={{
                        backgroundColor: videoOff ? 'white' : 'rgba(255,255,255,0.2)',
                        color: videoOff ? 'black' : 'white'
                    }}
                >
                    {videoOff ? '🚫' : '📹'}
                </button>
            </div>

        </div>
    );
};

export default VideoCall;
