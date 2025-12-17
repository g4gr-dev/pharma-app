import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MedicationList from './MedicationList';

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

vi.mock('../../components/medications/WeeklyCalendar', () => ({
    default: () => <div data-testid="weekly-calendar">WeeklyCalendar</div>
}));

describe('MedicationList Component', () => {
    it('renders medication list UI', () => {
        render(
            <MemoryRouter>
                <MedicationList />
            </MemoryRouter>
        );

        expect(screen.getByText('Mis Medicamentos')).toBeInTheDocument();
        expect(screen.getByText('Amoxicilina')).toBeInTheDocument();
        expect(screen.getByText('Ibuprofeno')).toBeInTheDocument();
        expect(screen.getByText('85%')).toBeInTheDocument();
    });

    it('navigates to add medication', () => {
        render(
            <MemoryRouter>
                <MedicationList />
            </MemoryRouter>
        );

        const addButton = screen.getByText('+').closest('button');
        fireEvent.click(addButton);
        expect(mockNavigate).toHaveBeenCalledWith('/medications/add');
    });

    it('navigates to details', () => {
        render(
            <MemoryRouter>
                <MedicationList />
            </MemoryRouter>
        );

        const detailsButtons = screen.getAllByText('Detalles');
        fireEvent.click(detailsButtons[0]);
        // Assuming ID 1 for first med
        expect(mockNavigate).toHaveBeenCalledWith('/medications/1');
    });

    // Test alert on take?
    // window.alert is not mocked by default in JSDOM?
    // We can spy on window.alert
});
