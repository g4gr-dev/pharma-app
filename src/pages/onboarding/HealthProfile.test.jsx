import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HealthProfile from './HealthProfile';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('HealthProfile Component', () => {
    it('renders form sections', () => {
        render(
            <MemoryRouter>
                <HealthProfile />
            </MemoryRouter>
        );

        expect(screen.getByText('Perfil de Salud')).toBeInTheDocument();
        expect(screen.getByText('Datos Básicos')).toBeInTheDocument();
        expect(screen.getByText('Información Médica')).toBeInTheDocument();
        expect(screen.getByText('Obra Social')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <HealthProfile />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('adds and removes medications', () => {
        render(
            <MemoryRouter>
                <HealthProfile />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText('Nombre del medicamento');
        const addButton = screen.getByText('+');

        fireEvent.change(input, { target: { value: 'Aspirina' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Aspirina')).toBeInTheDocument();

        const removeButton = screen.getByText('×'); // Using &times; entity or equivalent, rendered text might be '×'
        fireEvent.click(removeButton);

        expect(screen.queryByText('Aspirina')).not.toBeInTheDocument();
    });

    it('navigates to preferences on continue', () => {
        render(
            <MemoryRouter>
                <HealthProfile />
            </MemoryRouter>
        );

        const continueButton = screen.getByText('Continuar');
        fireEvent.click(continueButton);
        expect(mockNavigate).toHaveBeenCalledWith('/preferences');
    });
});
