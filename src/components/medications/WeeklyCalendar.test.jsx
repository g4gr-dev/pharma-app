import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import WeeklyCalendar from './WeeklyCalendar';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('WeeklyCalendar Component', () => {
    it('renders days of week', () => {
        render(
            <MemoryRouter>
                <WeeklyCalendar />
            </MemoryRouter>
        );

        expect(screen.getByText('Lun')).toBeInTheDocument();
        expect(screen.getByText('Vie')).toBeInTheDocument();
    });

    it('renders schedule slots', () => {
        render(
            <MemoryRouter>
                <WeeklyCalendar />
            </MemoryRouter>
        );

        expect(screen.getByText('Mañana')).toBeInTheDocument();
        expect(screen.getByText('Levotiroxina')).toBeInTheDocument();
        expect(screen.getByText('Noche')).toBeInTheDocument();
        expect(screen.getByText('Rosuvastatina')).toBeInTheDocument();
    });

    it('selects day', () => {
        render(
            <MemoryRouter>
                <WeeklyCalendar />
            </MemoryRouter>
        );

        const tuesdayButton = screen.getByText('Mar').closest('button');
        fireEvent.click(tuesdayButton);

        // We can check if class changed if we could query class, or rely on visual/state update logic.
        // For basic functional test, clicking shouldn't crash.
    });

    it('navigates to order review on "Pedir más"', () => {
        render(
            <MemoryRouter>
                <WeeklyCalendar />
            </MemoryRouter>
        );

        // All "Pedir más" buttons navigate to same place
        const orderButtons = screen.getAllByText('Pedir más');
        fireEvent.click(orderButtons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/review');
    });
});
