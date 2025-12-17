import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FamilyList from './FamilyList';

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

describe('FamilyList Component', () => {
    it('renders family members', () => {
        render(
            <MemoryRouter>
                <FamilyList />
            </MemoryRouter>
        );

        expect(screen.getByText('Mi Familia')).toBeInTheDocument();
        expect(screen.getByText('Tía Marta')).toBeInTheDocument();
        expect(screen.getByText('Juan (Hijo)')).toBeInTheDocument();
        expect(screen.getByText('Agregar nuevo integrante')).toBeInTheDocument();
    });

    it('navigates to member detail on click', () => {
        render(
            <MemoryRouter>
                <FamilyList />
            </MemoryRouter>
        );

        const memberCard = screen.getByText('Tía Marta').closest('div').closest('.card');
        fireEvent.click(memberCard);
        // Assuming ID 1 for Tia Marta
        expect(mockNavigate).toHaveBeenCalledWith('/family/1');
    });

    it('navigates to add member on click', () => {
        render(
            <MemoryRouter>
                <FamilyList />
            </MemoryRouter>
        );

        const addButton = screen.getByText('Agregar nuevo integrante').closest('div');
        fireEvent.click(addButton);
        expect(mockNavigate).toHaveBeenCalledWith('/family/add');
    });

    it('renders header add button', () => {
        render(
            <MemoryRouter>
                <FamilyList />
            </MemoryRouter>
        );

        const headerAddButtons = screen.getAllByText('+');
        // Both buttons navigate to same place, so clicking the first one (header) is fine
        fireEvent.click(headerAddButtons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/family/add');
    });
});
