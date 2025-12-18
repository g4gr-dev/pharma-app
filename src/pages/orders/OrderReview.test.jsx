import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import OrderReview from './OrderReview';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('OrderReview Component', () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders with current order tab active by default', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        expect(screen.getByText('Pedidos')).toBeInTheDocument();
        expect(screen.getByText('Mi Pedido')).toBeInTheDocument();
        expect(screen.getByText('Historial de Pedidos')).toBeInTheDocument();
        expect(screen.getByText('Amoxicilina 500mg')).toBeInTheDocument();
        expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
    });

    it('switches to order history tab', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        // Initially on current order tab
        expect(screen.getByText('Amoxicilina 500mg')).toBeInTheDocument();

        // Switch to history tab
        const historyTab = screen.getByText('Historial de Pedidos');
        fireEvent.click(historyTab);

        // Should show order history
        expect(screen.getByText('ORD-001')).toBeInTheDocument();
        expect(screen.getByText('ORD-002')).toBeInTheDocument();
        expect(screen.getAllByText('Entregado').length).toBeGreaterThan(0);
        expect(screen.getByText('En camino')).toBeInTheDocument();

        // Current order items should not be visible
        expect(screen.queryByText('Seleccionar Farmacia')).not.toBeInTheDocument();
    });

    it('switches back to current order tab', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        // Switch to history
        fireEvent.click(screen.getByText('Historial de Pedidos'));
        expect(screen.getByText('ORD-001')).toBeInTheDocument();

        // Switch back to current order
        fireEvent.click(screen.getByText('Mi Pedido'));
        expect(screen.getByText('Amoxicilina 500mg')).toBeInTheDocument();
        expect(screen.getByText('Seleccionar Farmacia')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('navigates to pharmacy selection from current order tab', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        const checkoutButton = screen.getByText('Seleccionar Farmacia');
        fireEvent.click(checkoutButton);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/pharmacies');
    });

    it('displays order history with correct information', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        // Switch to history tab
        fireEvent.click(screen.getByText('Historial de Pedidos'));

        // Check first order details
        expect(screen.getByText('ORD-001')).toBeInTheDocument();
        expect(screen.getByText('10 Dic 2025')).toBeInTheDocument();
        expect(screen.getByText('📍 Casa - Edificio azul')).toBeInTheDocument();
        expect(screen.getByText('• Paracetamol 500mg x2')).toBeInTheDocument();
        expect(screen.getByText('• Vitamina C x1')).toBeInTheDocument();
    });

    it('repeats order when clicking repeat button', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        // Switch to history tab
        fireEvent.click(screen.getByText('Historial de Pedidos'));

        // Click repeat order button on first order
        const repeatButtons = screen.getAllByText('Repetir pedido');
        fireEvent.click(repeatButtons[0]);

        // Should switch back to current order tab and show new items from repeated order
        expect(screen.getByText('Paracetamol 500mg')).toBeInTheDocument();
        expect(screen.getByText('Vitamina C')).toBeInTheDocument();
        expect(screen.queryByText('ORD-001')).not.toBeInTheDocument(); // History should not be visible
    });
});
