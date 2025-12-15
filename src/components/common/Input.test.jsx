import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input Component', () => {
    it('renders with label', () => {
        render(<Input label="Username" name="username" />);
        expect(screen.getByLabelText(/Username/)).toBeInTheDocument();
    });

    it('renders placeholder correctly', () => {
        render(<Input placeholder="Enter text" name="test" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('handles value changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} name="test-input" />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('shows error message when error prop is provided', () => {
        render(<Input error="This field is required" name="test" />);
        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('shows required asterisk when required is true', () => {
        render(<Input label="Email" required name="email" />);
        // Expecting the asterisk to be present looking at the code: {required && <span style={{ color: 'var(--color-danger)' }}> *</span>}
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('uses correct input type', () => {
        render(<Input type="password" name="password" label="Password" />);
        // getByLabelText with 'Password' might match the label, we need to find the input associated with it
        const input = screen.getByLabelText(/Password/);
        expect(input).toHaveAttribute('type', 'password');
    });
});
