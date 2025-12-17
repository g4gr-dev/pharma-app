import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AddMedicationOptions from './AddMedicationOptions';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('AddMedicationOptions Component', () => {
    it('renders options', () => {
        render(
            <MemoryRouter>
                <AddMedicationOptions />
            </MemoryRouter>
        );

        expect(screen.getByText('Agregar Medicamento')).toBeInTheDocument();
        expect(screen.getByText('Ingresar Manualmente')).toBeInTheDocument();
        expect(screen.getByText('Escanear Receta')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <AddMedicationOptions />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('navigates to manual entry', () => {
        render(
            <MemoryRouter>
                <AddMedicationOptions />
            </MemoryRouter>
        );

        const manualOption = screen.getByText('Ingresar Manualmente').closest('.card');
        fireEvent.click(manualOption);
        expect(mockNavigate).toHaveBeenCalledWith('/medications/new');
    });

    // Test alert for other options?
    // Not critical, but we can if we want to spy on window.alert
});
