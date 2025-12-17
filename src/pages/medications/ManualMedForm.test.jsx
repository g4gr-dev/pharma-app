import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ManualMedForm from './ManualMedForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock Input
vi.mock('../../components/common/Input', () => ({
    default: ({ label, name, placeholder, value, onChange, type }) => (
        <div>
            <label>{label}</label>
            <input name={name} placeholder={placeholder} value={value} onChange={onChange} type={type} />
        </div>
    )
}));

describe('ManualMedForm Component', () => {
    it('renders form inputs', () => {
        render(
            <MemoryRouter>
                <ManualMedForm />
            </MemoryRouter>
        );

        expect(screen.getByText('Nuevo Medicamento')).toBeInTheDocument();
        expect(screen.getByText('Información Básica')).toBeInTheDocument();
        expect(screen.getByText('Nombre del Medicamento')).toBeInTheDocument();
        expect(screen.getByText('Dosis')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <ManualMedForm />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('updates frequency', () => {
        render(
            <MemoryRouter>
                <ManualMedForm />
            </MemoryRouter>
        );

        const frequencySelect = screen.getByDisplayValue('Cada 8 horas');
        fireEvent.change(frequencySelect, { target: { value: '12' } });
        expect(frequencySelect.value).toBe('12');
    });

    it('saves medication', () => {
        render(
            <MemoryRouter>
                <ManualMedForm />
            </MemoryRouter>
        );

        const saveButton = screen.getByText('Guardar Medicamento');
        fireEvent.click(saveButton);
        expect(mockNavigate).toHaveBeenCalledWith('/medications');
    });
});
