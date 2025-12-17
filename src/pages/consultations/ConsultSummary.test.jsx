import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ConsultSummary from './ConsultSummary';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick }) => <button onClick={onClick}>{children}</button>
}));

describe('ConsultSummary Component', () => {
    it('renders summary information', () => {
        render(
            <MemoryRouter>
                <ConsultSummary />
            </MemoryRouter>
        );

        expect(screen.getByText('Resumen de Consulta')).toBeInTheDocument();
        expect(screen.getByText('Consulta Finalizada')).toBeInTheDocument();
        expect(screen.getByText('Diagnóstico')).toBeInTheDocument();
        expect(screen.getByText('Indicaciones')).toBeInTheDocument();
        expect(screen.getByText('Receta Electrónica')).toBeInTheDocument();
    });

    it('navigates to dashboard on close', () => {
        render(
            <MemoryRouter>
                <ConsultSummary />
            </MemoryRouter>
        );

        const closeButton = screen.getByText('✕').closest('button');
        fireEvent.click(closeButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('navigates to dashboard on footer button click', () => {
        render(
            <MemoryRouter>
                <ConsultSummary />
            </MemoryRouter>
        );

        const backButton = screen.getByText('Volver al Inicio');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
});
