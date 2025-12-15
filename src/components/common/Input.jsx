import React from 'react';

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    name,
    required = false
}) => {
    return (
        <div className="input-field" style={{ marginBottom: '16px' }}>
            {label && (
                <label
                    htmlFor={name}
                    style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600',
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    {label}
                    {required && <span style={{ color: 'var(--color-danger)' }}> *</span>}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: 'var(--border-radius-sm)',
                    border: error ? '1px solid var(--color-danger)' : '1px solid #E0E0E0',
                    backgroundColor: 'var(--color-bg-input)',
                    fontSize: 'var(--font-size-md)',
                    color: 'var(--color-text-main)',
                    transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = error ? 'var(--color-danger)' : 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = error ? 'var(--color-danger)' : '#E0E0E0'}
            />

            {error && (
                <span style={{
                    display: 'block',
                    marginTop: '4px',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-danger)'
                }}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
