import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DeliveryMethod from './DeliveryMethod';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('DeliveryMethod Component', () => {
    it('renders delivery options', () => {
        render(
            <MemoryRouter>
                <DeliveryMethod />
            </MemoryRouter>
        );

        expect(screen.getByText('Método de Entrega')).toBeInTheDocument();
        expect(screen.getByText('Delivery')).toBeInTheDocument();
        expect(screen.getByText('Retiro')).toBeInTheDocument();
        expect(screen.getByText('Total')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <DeliveryMethod />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('toggles delivery method', () => {
        render(
            <MemoryRouter>
                <DeliveryMethod />
            </MemoryRouter>
        );

        const pickupButton = screen.getByText('Retiro');
        fireEvent.click(pickupButton);
        expect(screen.getByText('Punto de Retiro')).toBeInTheDocument();
        expect(screen.queryByText('Dirección de Envío')).not.toBeInTheDocument();

        const deliveryButton = screen.getByText('Delivery');
        fireEvent.click(deliveryButton);
        expect(screen.getByText('Dirección de Envío')).toBeInTheDocument();
    });

    it('navigates to confirmation', () => {
        render(
            <MemoryRouter>
                <DeliveryMethod />
            </MemoryRouter>
        );

        const confirmButton = screen.getByText('Confirmar y Pagar');
        fireEvent.click(confirmButton);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/confirmation');
    });

    it('opens address list', () => {
        render(
            <MemoryRouter>
                <DeliveryMethod />
            </MemoryRouter>
        );

        const changeButton = screen.getByText('Cambiar');
        fireEvent.click(changeButton);
        expect(screen.getByText('Casa de Mamá')).toBeInTheDocument();
    });
});
