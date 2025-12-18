import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MedicalHistory from './MedicalHistory';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock('../../components/layout/BottomNav', () => ({
    default: () => <div data-testid="bottom-nav">BottomNav</div>
}));

describe('MedicalHistory Component', () => {
    it('renders with Signos Vitales tab active by default', () => {
        render(
            <MemoryRouter>
                <MedicalHistory />
            </MemoryRouter>
        );

        expect(screen.getByText('Historia clínica')).toBeInTheDocument();
        expect(screen.getByText('Signos Vitales')).toHaveClass('active');
        expect(screen.getByText('Presión Arterial')).toBeInTheDocument();
        expect(screen.queryByText('Consulta General')).not.toBeInTheDocument();
    });

    it('switches to Estudios y Consultas tab', () => {
        render(
            <MemoryRouter>
                <MedicalHistory />
            </MemoryRouter>
        );

        const eventsTab = screen.getByText('Estudios y Consultas');
        fireEvent.click(eventsTab);

        expect(eventsTab).toHaveClass('active');
        expect(screen.queryByText('Presión Arterial')).not.toBeInTheDocument();
        expect(screen.getByText('Consulta General')).toBeInTheDocument();
    });

    it('navigates back to dashboard', () => {
        render(
            <MemoryRouter>
                <MedicalHistory />
            </MemoryRouter>
        );

        const backBtn = screen.getByText('←').closest('button');
        fireEvent.click(backBtn);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('navigates to log vital when in vitals tab', () => {
        render(
            <MemoryRouter>
                <MedicalHistory />
            </MemoryRouter>
        );

        const addBtn = screen.getByText('+').closest('button');
        fireEvent.click(addBtn);
        expect(mockNavigate).toHaveBeenCalledWith('/medical-history/vitals/log');
    });

    it('navigates to upload document when in events tab', () => {
        render(
            <MemoryRouter>
                <MedicalHistory />
            </MemoryRouter>
        );

        const eventsTab = screen.getByText('Estudios y Consultas');
        fireEvent.click(eventsTab);

        const addBtn = screen.getByText('+').closest('button');
        fireEvent.click(addBtn);
        expect(mockNavigate).toHaveBeenCalledWith('/medical-history/events/upload');
    });
});
