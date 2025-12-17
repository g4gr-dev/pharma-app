import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HistoryList from './HistoryList';

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

describe('HistoryList Component', () => {
    it('renders history events', () => {
        render(
            <MemoryRouter>
                <HistoryList />
            </MemoryRouter>
        );

        expect(screen.getByText('Historial Médico')).toBeInTheDocument();
        expect(screen.getByText('Consulta General')).toBeInTheDocument();
        expect(screen.getByText('Análisis de Sangre')).toBeInTheDocument();
        expect(screen.getByText('Vacuna Gripe')).toBeInTheDocument();
    });

    it('filters events', () => {
        render(
            <MemoryRouter>
                <HistoryList />
            </MemoryRouter>
        );

        // Filter by Consultas
        const consultFilter = screen.getByText('Consultas');
        fireEvent.click(consultFilter);

        expect(screen.getByText('Consulta General')).toBeInTheDocument();
        expect(screen.queryByText('Análisis de Sangre')).not.toBeInTheDocument(); // Lab shouldn't be visible
    });

    it('navigates to event detail', () => {
        render(
            <MemoryRouter>
                <HistoryList />
            </MemoryRouter>
        );

        const eventCard = screen.getByText('Consulta General').closest('.timeline-item');
        fireEvent.click(eventCard);
        expect(mockNavigate).toHaveBeenCalledWith('/history/1');
    });

    it('navigates to upload', () => {
        render(
            <MemoryRouter>
                <HistoryList />
            </MemoryRouter>
        );

        const uploadButton = screen.getByText('+');
        fireEvent.click(uploadButton);
        expect(mockNavigate).toHaveBeenCalledWith('/history/upload');
    });
});
