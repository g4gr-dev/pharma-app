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
        expect(screen.getByText('Mis Medicamentos')).toBeInTheDocument();
        expect(screen.getByText('Próxima Cita')).toBeInTheDocument();
        expect(screen.getByText('Solicitar Consulta')).toBeInTheDocument();
        expect(screen.getByText('Pedir Medicamentos')).toBeInTheDocument();
    });

    it('navigates when quick action is clicked', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        const medicationsButton = screen.getByText('Mis Medicamentos');
        // The click handler is on the parent div card
        fireEvent.click(medicationsButton.closest('.card'));
        expect(mockNavigate).toHaveBeenCalledWith('/medications');
    });

    it('renders health panel with vitals', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(screen.getByText('Panel de Salud')).toBeInTheDocument();
        expect(screen.getByText('Presión Arterial')).toBeInTheDocument();
        expect(screen.getByText('120/80')).toBeInTheDocument();
    });

    it('renders reminders', () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(screen.getByText('Próximos Recordatorios')).toBeInTheDocument();
        expect(screen.getByText('Tomar Amoxicilina')).toBeInTheDocument();
    });
});
