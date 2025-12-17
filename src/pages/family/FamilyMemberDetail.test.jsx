import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import FamilyMemberDetail from './FamilyMemberDetail';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useParams: () => ({ id: '1' }),
    };
});

// Mock Button to accept className
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick, className, style }) => (
        <button onClick={onClick} className={className} style={style}>{children}</button>
    )
}));

describe('FamilyMemberDetail Component', () => {
    it('renders member details', () => {
        render(
            <MemoryRouter>
                <FamilyMemberDetail />
            </MemoryRouter>
        );

        expect(screen.getByText('Perfil Familiar')).toBeInTheDocument();
        expect(screen.getByText('Tía Marta')).toBeInTheDocument();
        expect(screen.getByText('Sangre')).toBeInTheDocument();
        expect(screen.getByText('A+')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <FamilyMemberDetail />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('renders action buttons', () => {
        render(
            <MemoryRouter>
                <FamilyMemberDetail />
            </MemoryRouter>
        );

        expect(screen.getByText(/Ver Historial Médico/i)).toBeInTheDocument();
        expect(screen.getByText(/Medicamentos Activos/i)).toBeInTheDocument();
    });
});
