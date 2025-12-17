import React from 'react';
import Sidebar from './Sidebar';
import './ResponsiveLayout.css';

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
        </div>
    );
};

export default ResponsiveLayout;
