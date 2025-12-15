import React from 'react';
import Sidebar from './Sidebar';

const ResponsiveLayout = ({ children }) => {
    return (
        <div className="app-container">
            {/* Desktop Sidebar - Hidden on mobile */}
            <div className="desktop-sidebar">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>

            <style>{`
                .app-container {
                    display: flex;
                    min-height: 100vh;
                    background-color: #f5f5f5;
                    justify-content: center;
                }

                .desktop-sidebar {
                    display: none; /* Default to mobile (hidden) */
                }

                .main-content {
                    width: 100%;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .content-wrapper {
                    width: 100%;
                    max-width: 375px; /* Mobile First default */
                    background-color: white;
                    min-height: 100vh;
                    position: relative;
                    box-shadow: 0 0 20px rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                }

                /* Desktop Styles (> 768px) */
                @media (min-width: 769px) {
                    .app-container {
                        max-width: 1440px;
                        margin: 0 auto;
                        box-shadow: 0 0 40px rgba(0,0,0,0.1);
                        background-color: white;
                    }

                    .desktop-sidebar {
                        display: block;
                        flex-shrink: 0;
                        z-index: 100;
                    }

                    .main-content {
                        flex-grow: 1;
                        max-width: none;
                        background-color: #FAFAFA;
                        display: block; /* Reset centering */
                        overflow-y: auto;
                        height: 100vh;
                    }

                    .content-wrapper {
                        max-width: 100%; /* Use full width of main container */
                        width: 100%;
                        box-shadow: none;
                        background-color: transparent;
                        min-height: auto;
                        padding-bottom: 24px;
                    }
                    
                    /* Hide Bottom Navigation on Desktop */
                    .bottom-nav {
                        display: none !important;
                    }

                    /* Adjust Cards for Grid Layout on Desktop */
                    .scroll-content {
                        padding: 32px !important;
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                    /* Make cards grid-like if possible */
                    /* Note: This is a generic helper, specific pages might need tweaks */
                    .grid-desktop {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 24px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResponsiveLayout;
