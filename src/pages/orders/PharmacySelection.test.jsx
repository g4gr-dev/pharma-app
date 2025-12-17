import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PharmacySelection from './PharmacySelection';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('PharmacySelection Component', () => {
    it('renders pharmacy list', () => {
        render(
            <MemoryRouter>
                <PharmacySelection />
            </MemoryRouter>
        );

        expect(screen.getByText('Elegir Farmacia')).toBeInTheDocument();
        expect(screen.getByText('Cerca de tu ubicación')).toBeInTheDocument();
        expect(screen.getByText('Farmacia Central Oeste Mareque')).toBeInTheDocument();
        expect(screen.getByText('3100', { exact: false })).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <PharmacySelection />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('selects pharmacy (navigates)', () => {
        render(
            <MemoryRouter>
                <PharmacySelection />
            </MemoryRouter>
        );

        const selectButtons = screen.getAllByText('Seleccionar');
        fireEvent.click(selectButtons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/delivery');
    });
});
