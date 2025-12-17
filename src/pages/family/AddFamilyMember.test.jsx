import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AddFamilyMember from './AddFamilyMember';

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

// Mock Button
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick, fullWidth }) => (
        <button onClick={onClick} data-fullwidth={fullWidth}>{children}</button>
    )
}));

describe('AddFamilyMember Component', () => {
    it('renders form elements', () => {
        render(
            <MemoryRouter>
                <AddFamilyMember />
            </MemoryRouter>
        );

        expect(screen.getByText('Nuevo Integrante')).toBeInTheDocument();
        expect(screen.getByText('Nombre Completo')).toBeInTheDocument();
        expect(screen.getByText('Parentesco')).toBeInTheDocument();
        expect(screen.getByText('Subir Foto')).toBeInTheDocument();
        expect(screen.getByText('Guardar Familiar')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <AddFamilyMember />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('updates inputs', () => {
        render(
            <MemoryRouter>
                <AddFamilyMember />
            </MemoryRouter>
        );

        const nameInput = screen.getByPlaceholderText('Ej: Marta Pérez');
        fireEvent.change(nameInput, { target: { value: 'New Member' } });
        expect(nameInput.value).toBe('New Member');

        const relationSelect = screen.getByRole('combobox');
        fireEvent.change(relationSelect, { target: { value: 'Hijo/a' } });
        expect(relationSelect.value).toBe('Hijo/a');
    });

    it('navigates to family list on save', () => {
        render(
            <MemoryRouter>
                <AddFamilyMember />
            </MemoryRouter>
        );

        const saveButton = screen.getByText('Guardar Familiar');
        fireEvent.click(saveButton);
        expect(mockNavigate).toHaveBeenCalledWith('/family');
    });
});
