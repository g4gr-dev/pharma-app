import React from 'react';
import './Input.css';

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
        <div className="input-field input-container">
            {label && (
                <label
                    htmlFor={name}
                    className="input-label"
                >
                    {label}
                    {required && <span className="required-mark"> *</span>}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`input-element ${error ? 'has-error' : ''}`}
            />

            {error && (
                <span className="input-error">
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
