import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HealthProfile from './HealthProfile';

// Mock BottomNav
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

describe('HealthProfile Component', () => {
    it('renders profile tab by default', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <HealthProfile />
            </MemoryRouter>
        );

        expect(screen.getByText('Mi Perfil')).toBeInTheDocument();
        expect(screen.getByText('Datos Básicos')).toBeInTheDocument();
        expect(screen.getByText('Información Médica')).toBeInTheDocument();
        expect(screen.getByText('Obra Social')).toBeInTheDocument();
        expect(screen.getByTestId('bottom-nav')).toBeInTheDocument();
    });

    it('switches to credentials tab', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <HealthProfile />
            </MemoryRouter>
        );

        const credentialsTab = screen.getByText('Credenciales');
        fireEvent.click(credentialsTab);
        expect(mockNavigate).toHaveBeenCalledWith('/profile?tab=credentials');
    });

    it('renders credentials tab when query param is present', () => {
        render(
            <MemoryRouter initialEntries={['/profile?tab=credentials']}>
                <HealthProfile />
            </MemoryRouter>
        );

        expect(screen.getByText('OSDE')).toBeInTheDocument();
        expect(screen.getByText('Swiss Medical')).toBeInTheDocument();
        expect(screen.getByText('Agregar Nueva Credencial')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <HealthProfile />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('adds and removes medications in profile tab', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <HealthProfile />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText('Nombre del medicamento');
        const addButton = screen.getByText('+');

        fireEvent.change(input, { target: { value: 'Aspirina' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Aspirina')).toBeInTheDocument();

        const removeButton = screen.getByText('×');
        fireEvent.click(removeButton);

        expect(screen.queryByText('Aspirina')).not.toBeInTheDocument();
    });

    it('navigates to add credential in credentials tab', () => {
        render(
            <MemoryRouter initialEntries={['/profile?tab=credentials']}>
                <HealthProfile />
            </MemoryRouter>
        );

        const addButton = screen.getByText('Agregar Nueva Credencial');
        fireEvent.click(addButton);
        expect(mockNavigate).toHaveBeenCalledWith('/credentials/add');
    });
});

