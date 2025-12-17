import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('CreateAccount Component', () => {
    it('renders form fields', () => {
        render(
            <MemoryRouter>
                <CreateAccount />
            </MemoryRouter>
        );

        expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Juan Pérez')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('juan@ejemplo.com')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <CreateAccount />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('validates form and navigates on submit', () => {
        render(
            <MemoryRouter>
                <CreateAccount />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText('Juan Pérez'), { target: { value: 'Test User' } });
        fireEvent.change(screen.getByPlaceholderText('juan@ejemplo.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('********', { selector: 'input[name="password"]' }), { target: { value: 'password123' } });
        fireEvent.change(screen.getByPlaceholderText('********', { selector: 'input[name="confirmPassword"]' }), { target: { value: 'password123' } });

        const checkbox = screen.getByLabelText((content, element) => {
            return element.tagName.toLowerCase() === 'input' && element.type === 'checkbox';
        });
        fireEvent.click(checkbox);

        const submitButton = screen.getByText('Crear Cuenta');
        fireEvent.click(submitButton);

        expect(mockNavigate).toHaveBeenCalledWith('/profile');
    });

    it('shows error if fields are empty', () => {
        render(
            <MemoryRouter>
                <CreateAccount />
            </MemoryRouter>
        );

        const submitButton = screen.getByText('Crear Cuenta');
        fireEvent.click(submitButton);

        expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument();
        expect(mockNavigate).not.toHaveBeenCalledWith('/profile');
    });
});
