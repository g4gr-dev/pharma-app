import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useLocation: () => ({ pathname: '/dashboard' }), // Default mock
    };
});

describe('Sidebar Component', () => {
    it('renders sidebar navigation', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );

        expect(screen.getByText('Central Farma')).toBeInTheDocument();
        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Medicamentos')).toBeInTheDocument();
        expect(screen.getByText('Configuración')).toBeInTheDocument();
    });

    it('navigates to dashboard on click', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );

        const homeItem = screen.getByText('Inicio');
        fireEvent.click(homeItem);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('logs out', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );

        const logoutItem = screen.getByText('Salir');
        fireEvent.click(logoutItem);
        expect(mockNavigate).toHaveBeenCalledWith('/welcome');
    });

    // Similar to BottomNav, testing 'active' class depends on mocking useLocation differently or trusting logic logic + rendering. 
    // We are refactoring, so we ensure className logic is in place.
});
