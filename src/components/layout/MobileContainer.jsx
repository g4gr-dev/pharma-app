import React from 'react';

const MobileContainer = ({ children }) => {
    return (
        <div className="mobile-wrapper">
            <div className="mobile-content">
                {children}
            </div>
            <style>{`
        .mobile-wrapper {
          min-height: 100vh;
          background-color: #e0e0e0;
          display: flex;
          justify-content: center;
        }
        
        .mobile-content {
          width: 100%;
          max-width: 375px; /* Mobile-first constraint */
          min-height: 100vh;
          background-color: white;
          position: relative;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
          overflow-x: hidden;
        }

        @media (max-width: 480px) {
          .mobile-wrapper {
            background-color: white;
          }
          .mobile-content {
            max-width: 100%;
            box-shadow: none;
          }
        }
      `}</style>
        </div>
    );
};

export default MobileContainer;
