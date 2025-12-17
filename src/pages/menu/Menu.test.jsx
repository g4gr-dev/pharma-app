import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock BottomNav since it's a child component
vi.mock('../../components/layout/BottomNav', () => ({
    default: () => <div data-testid="bottom-nav">BottomNav</div>
}));

describe('Menu Component', () => {
    it('renders user info', () => {
        render(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );

        expect(screen.getByText('Gabriela Gómez')).toBeInTheDocument();
        expect(screen.getByText('Plan Premium')).toBeInTheDocument();
    });

    it('renders menu items', () => {
        render(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );

        expect(screen.getByText('Perfil de Salud')).toBeInTheDocument();
        expect(screen.getByText('Mi Familia')).toBeInTheDocument();
        expect(screen.getByText('Ayuda y Soporte')).toBeInTheDocument();
    });

    it('navigates to menu item path', () => {
        render(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );

        const profileItem = screen.getByText('Perfil de Salud');
        fireEvent.click(profileItem);
        expect(mockNavigate).toHaveBeenCalledWith('/profile');
    });

    it('logs out', () => {
        render(
            <MemoryRouter>
                <Menu />
            </MemoryRouter>
        );

        const logoutItem = screen.getByText('Cerrar Sesión');
        fireEvent.click(logoutItem);
        expect(mockNavigate).toHaveBeenCalledWith('/welcome');
    });
});
