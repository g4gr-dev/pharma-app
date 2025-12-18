import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Dashboard Component', () => {
    it('renders user greeting', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(screen.getByText('Hola, Juan')).toBeInTheDocument();
        expect(screen.getByText('Familia Pérez ▼')).toBeInTheDocument();
    });

    it('renders quick actions', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(screen.getByText('Pastillero Virtual')).toBeInTheDocument();
        expect(screen.getByText('Próximo Turno')).toBeInTheDocument();
        expect(screen.getByText('Solicitar Consulta')).toBeInTheDocument();
        expect(screen.getByText('Pedir Medicamentos')).toBeInTheDocument();
    });

    it('navigates when quick action is clicked', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        const medicationsButton = screen.getByText('Pastillero Virtual');
        // The click handler is on the parent div card
        fireEvent.click(medicationsButton.closest('.quick-action-card'));
        expect(mockNavigate).toHaveBeenCalledWith('/medications');
    });



    it('renders reminders', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(screen.getByText('Recordatorios')).toBeInTheDocument();
        expect(screen.getByText('Tomar Amoxicilina')).toBeInTheDocument();
    });
});
