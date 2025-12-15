import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    fullWidth = false,
    onClick,
    icon,
    type = 'button',
    className = ''
}) => {
    const baseStyle = {
        padding: '1rem 2rem',
        borderRadius: 'var(--border-radius-md)',
        fontSize: 'var(--font-size-md)',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'var(--transition-fast)',
        width: fullWidth ? 'fit-content' : 'auto',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
        },
        secondary: {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary)',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
        },
        google: {
            backgroundColor: '#DB4437',
            color: 'white',
        },
        facebook: {
            backgroundColor: '#4267B2',
            color: 'white',
        },
        email: {
            backgroundColor: 'var(--color-primary)',
            color: 'white',
        }
    };

    const style = { ...baseStyle, ...variants[variant] };

    return (
        <button
            type={type}
            className={className}
            style={style}
            onClick={onClick}
        >
            {icon && <span className="icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
