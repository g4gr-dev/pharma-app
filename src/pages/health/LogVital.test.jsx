import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LogVital from './LogVital';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock Common Components
vi.mock('../../components/common/Button', () => ({
    default: ({ children, onClick }) => <button onClick={onClick}>{children}</button>
}));

vi.mock('../../components/common/Input', () => ({
    default: ({ label, placeholder, type }) => (
        <div>
            <label>{label}</label>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}));

describe('LogVital Component', () => {
    it('renders the form', () => {
        render(
            <MemoryRouter>
                <LogVital />
            </MemoryRouter>
        );

        expect(screen.getByText('Registrar Medición')).toBeInTheDocument();
        expect(screen.getByText('Tipo de Medición')).toBeInTheDocument();
        expect(screen.getByText('Notas')).toBeInTheDocument();
        expect(screen.getByText('Guardar Registro')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <LogVital />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('navigates to health on save', () => {
        render(
            <MemoryRouter>
                <LogVital />
            </MemoryRouter>
        );

        const saveButton = screen.getByText('Guardar Registro');
        fireEvent.click(saveButton);
        expect(mockNavigate).toHaveBeenCalledWith('/health');
    });

    it('shows blood pressure inputs by default', () => {
        render(
            <MemoryRouter>
                <LogVital />
            </MemoryRouter>
        );
        expect(screen.getByText('Sistólica')).toBeInTheDocument();
        expect(screen.getByText('Diastólica')).toBeInTheDocument();
    });

    it('changes inputs when type changes', () => {
        render(
            <MemoryRouter>
                <LogVital />
            </MemoryRouter>
        );

        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'weight' } });

        expect(screen.queryByText('Sistólica')).not.toBeInTheDocument();
        expect(screen.getByText('Valor')).toBeInTheDocument();
    });
});
