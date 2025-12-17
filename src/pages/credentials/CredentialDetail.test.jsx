import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CredentialDetail from './CredentialDetail';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('CredentialDetail Component', () => {
    it('renders credential details', () => {
        render(
            <MemoryRouter>
                <CredentialDetail />
            </MemoryRouter>
        );

        expect(screen.getByText('Vista Credencial')).toBeInTheDocument();
        expect(screen.getByText('OSDE')).toBeInTheDocument();
        expect(screen.getByText('Gabriela Gómez')).toBeInTheDocument();
    });

    it('navigates back on close button click', () => {
        render(
            <MemoryRouter>
                <CredentialDetail />
            </MemoryRouter>
        );

        const closeButton = screen.getByText('✕').closest('button');
        fireEvent.click(closeButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('flips card on click', () => {
        render(
            <MemoryRouter>
                <CredentialDetail />
            </MemoryRouter>
        );

        const card = screen.getByText('OSDE').closest('.credential-flip-card');

        // Initial state: not flipped -> Front visible
        expect(screen.getByText('Plan 410')).toBeInTheDocument();

        // Click to flip
        fireEvent.click(card);

        // It should have 'flipped' class or style change. 
        // In our refactor we use a class .flipped conditionally.
        expect(card).toHaveClass('flipped');

        // Back content should be rendered (it is always rendered in DOM but rotated)
        expect(screen.getByText(/Emergencias/)).toBeInTheDocument();
    });
});
