import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import OrderConfirmation from './OrderConfirmation';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('OrderConfirmation Component', () => {
    it('renders confirmation message', () => {
        render(
            <MemoryRouter>
                <OrderConfirmation />
            </MemoryRouter>
        );

        expect(screen.getByText('¡Pedido Confirmado!')).toBeInTheDocument();
        expect(screen.getByText('Pedido Recibido')).toBeInTheDocument();
    });

    it('navigates to dashboard', () => {
        render(
            <MemoryRouter>
                <OrderConfirmation />
            </MemoryRouter>
        );

        const homeButton = screen.getByText('Volver al Inicio');
        fireEvent.click(homeButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
});
