import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CredentialList from './CredentialList';

// Mock BottomNav to avoid rendering it and its dependencies
vi.mock('../../components/layout/BottomNav', () => ({
    default: () => <div data-testid="bottom-nav">BottomNav</div>
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('CredentialList Component', () => {
    it('renders the header and existing credentials', () => {
        render(
            <MemoryRouter>
                <CredentialList />
            </MemoryRouter>
        );

        expect(screen.getByText('Mis Credenciales')).toBeInTheDocument();
        expect(screen.getByText('OSDE')).toBeInTheDocument();
        expect(screen.getByText('Swiss Medical')).toBeInTheDocument();
        expect(screen.getByText('Agregar Nueva Credencial')).toBeInTheDocument();
        expect(screen.getByTestId('bottom-nav')).toBeInTheDocument();
    });

    it('navigates to dashboard on back click', () => {
        render(
            <MemoryRouter>
                <CredentialList />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('navigates to add credential on + button', () => {
        render(
            <MemoryRouter>
                <CredentialList />
            </MemoryRouter>
        );

        // There are two "+" in the UI. One in header, one in the dashed box.
        // The header one is usually an add button.
        const headerAddButton = screen.getAllByRole('button')[1]; // Assuming order
        fireEvent.click(headerAddButton);
        expect(mockNavigate).toHaveBeenCalledWith('/credentials/add');
    });

    it('navigates to credential detail on card click', () => {
        render(
            <MemoryRouter>
                <CredentialList />
            </MemoryRouter>
        );

        const card = screen.getByText('OSDE').closest('.credential-card');
        fireEvent.click(card);
        expect(mockNavigate).toHaveBeenCalledWith('/credentials/1');
    });
});
