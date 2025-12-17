import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import WelcomeDetails from './WelcomeDetails';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('WelcomeDetails Component', () => {
    it('renders welcome message', () => {
        render(
            <MemoryRouter>
                <WelcomeDetails />
            </MemoryRouter>
        );

        expect(screen.getByText('Bienvenido')).toBeInTheDocument();
        expect(screen.getByText('Registrarse con Email')).toBeInTheDocument();
    });

    it('navigates to register', () => {
        render(
            <MemoryRouter>
                <WelcomeDetails />
            </MemoryRouter>
        );

        const registerButton = screen.getByText('Registrarse con Email');
        fireEvent.click(registerButton);
        expect(mockNavigate).toHaveBeenCalledWith('/register');
    });

    it('navigates to login', () => {
        render(
            <MemoryRouter>
                <WelcomeDetails />
            </MemoryRouter>
        );

        const loginLink = screen.getByText('Iniciar sesión');
        fireEvent.click(loginLink);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
});
