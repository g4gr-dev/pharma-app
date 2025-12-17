import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DoctorSelection from './DoctorSelection';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock Button
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick, className }) => (
        <button onClick={onClick} className={className}>{children}</button>
    )
}));

describe('DoctorSelection Component', () => {
    it('renders list of doctors', () => {
        render(
            <MemoryRouter>
                <DoctorSelection />
            </MemoryRouter>
        );

        expect(screen.getByText('Médicos Disponibles')).toBeInTheDocument();
        expect(screen.getByText('Dr. Roberto Fernández')).toBeInTheDocument();
        expect(screen.getByText('Dra. Ana Gómez')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <DoctorSelection />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('navigates to waiting room on select', () => {
        render(
            <MemoryRouter>
                <DoctorSelection />
            </MemoryRouter>
        );

        const selectButtons = screen.getAllByText('Seleccionar');
        fireEvent.click(selectButtons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/consultations/waiting-room');
    });
});
