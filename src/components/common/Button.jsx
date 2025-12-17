import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    fullWidth = false,
    onClick,
    icon,
    type = 'button',
    className = ''
}) => {

    const getVariantClass = (variant) => {
        switch (variant) {
            case 'secondary': return 'btn-secondary';
            case 'ghost': return 'btn-ghost';
            case 'google': return 'btn-google';
            case 'facebook': return 'btn-facebook';
            case 'email': return 'btn-email';
            case 'primary':
            default:
                return 'btn-primary';
        }
    };

    return (
        <button
            type={type}
            className={`btn-base ${getVariantClass(variant)} ${fullWidth ? 'btn-full-width' : ''} ${className}`}
            onClick={onClick}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
