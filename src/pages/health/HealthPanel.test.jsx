import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HealthPanel from './HealthPanel';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock BottomNav
vi.mock('../../components/layout/BottomNav', () => ({
    default: () => <div data-testid="bottom-nav">BottomNav</div>
}));

describe('HealthPanel Component', () => {
    it('renders header and vitals', () => {
        render(
            <MemoryRouter>
                <HealthPanel />
            </MemoryRouter>
        );

        expect(screen.getByText('Mi Salud')).toBeInTheDocument();
        expect(screen.getByText('Presión Arterial')).toBeInTheDocument();
        expect(screen.getByText('Peso')).toBeInTheDocument();
        expect(screen.getByText('Resumen Mensual')).toBeInTheDocument();
        expect(screen.getByTestId('bottom-nav')).toBeInTheDocument();
    });

    it('navigates to dashboard on back click', () => {
        render(
            <MemoryRouter>
                <HealthPanel />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('navigates to log vital on + click', () => {
        render(
            <MemoryRouter>
                <HealthPanel />
            </MemoryRouter>
        );

        const plusButton = screen.getByText('+').closest('button');
        fireEvent.click(plusButton);
        expect(mockNavigate).toHaveBeenCalledWith('/health/log');
    });

    it('navigates to vital detail on card click', () => {
        render(
            <MemoryRouter>
                <HealthPanel />
            </MemoryRouter>
        );

        const bpCard = screen.getByText('Presión Arterial').closest('.vital-card');
        fireEvent.click(bpCard);
        expect(mockNavigate).toHaveBeenCalledWith('/health/bp');
    });
});
