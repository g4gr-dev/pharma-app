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
    it('renders cart items', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        expect(screen.getByText('Mi Pedido')).toBeInTheDocument();
        expect(screen.getByText('Amoxicilina 500mg')).toBeInTheDocument();
        expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
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

    it('navigates to pharmacy selection', () => {
        render(
            <MemoryRouter>
                <OrderReview />
            </MemoryRouter>
        );

        const checkoutButton = screen.getByText('Seleccionar Farmacia');
        fireEvent.click(checkoutButton);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/pharmacies');
    });

    // We can add tests for qty increment/decrement if functionality is implemented beyond mock
});
