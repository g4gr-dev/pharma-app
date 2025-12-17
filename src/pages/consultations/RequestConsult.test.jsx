import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import RequestConsult from './RequestConsult';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock Button
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick, fullWidth }) => <button onClick={onClick} data-fullwidth={fullWidth}>{children}</button>
}));

describe('RequestConsult Component', () => {
    it('renders form inputs', () => {
        render(
            <MemoryRouter>
                <RequestConsult />
            </MemoryRouter>
        );

        expect(screen.getByText('Solicitar Consulta')).toBeInTheDocument();
        expect(screen.getByText('Tipo de Consulta')).toBeInTheDocument();
        expect(screen.getByText('General')).toBeInTheDocument();
        expect(screen.getByText('Especialidad')).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Describe tu síntoma/i)).toBeInTheDocument();
        expect(screen.getByText('Buscar Médico')).toBeInTheDocument();
    });

    it('toggles urgency', () => {
        render(
            <MemoryRouter>
                <RequestConsult />
            </MemoryRouter>
        );

        const urgencyButton = screen.getByText('Normal').closest('button');
        fireEvent.click(urgencyButton);
        expect(screen.getByText('Urgente')).toBeInTheDocument();

        fireEvent.click(urgencyButton); // Toggle back
        expect(screen.getByText('Normal')).toBeInTheDocument();
    });

    it('shows specialty select when specialty type is selected', () => {
        render(
            <MemoryRouter>
                <RequestConsult />
            </MemoryRouter>
        );

        const specialtyRadio = screen.getByLabelText('Especialidad');
        fireEvent.click(specialtyRadio);

        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByText('Cardiología')).toBeInTheDocument();
    });

    it('navigates to doctors list on submit', () => {
        render(
            <MemoryRouter>
                <RequestConsult />
            </MemoryRouter>
        );

        const submitButton = screen.getByText('Buscar Médico');
        fireEvent.click(submitButton);
        expect(mockNavigate).toHaveBeenCalledWith('/consultations/doctors');
    });
});
