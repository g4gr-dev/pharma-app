import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MedicationDetail from './MedicationDetail';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useParams: () => ({ id: '1' }),
    };
});

// Mock Button
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick, className, style }) => (
        <button onClick={onClick} className={className} style={style}>{children}</button>
    )
}));

describe('MedicationDetail Component', () => {
    it('renders medication details', () => {
        render(
            <MemoryRouter>
                <MedicationDetail />
            </MemoryRouter>
        );

        expect(screen.getByText('Amoxicilina')).toBeInTheDocument();
        expect(screen.getByText('500mg • Cápsula')).toBeInTheDocument();
        expect(screen.getByText('Frecuencia')).toBeInTheDocument();
        expect(screen.getByText('90%')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <MedicationDetail />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    // Test interactions if needed
});
