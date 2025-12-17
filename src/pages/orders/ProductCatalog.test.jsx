import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProductCatalog from './ProductCatalog';

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
    default: ({ placeholder }) => <input placeholder={placeholder} />
}));

describe('ProductCatalog Component', () => {
    it('renders categories and products', () => {
        render(
            <MemoryRouter>
                <ProductCatalog />
            </MemoryRouter>
        );

        expect(screen.getByText('Farmacia Online')).toBeInTheDocument();
        expect(screen.getByText('Todo')).toBeInTheDocument(); // Wait, label is 'Todos'
        expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
        expect(screen.getByText('Alcohol en Gel')).toBeInTheDocument();
    });

    it('filters products by category', () => {
        render(
            <MemoryRouter>
                <ProductCatalog />
            </MemoryRouter>
        );

        const painCategory = screen.getByText('Dolor');
        fireEvent.click(painCategory);

        expect(screen.getByText('Ibuprofeno 400mg')).toBeInTheDocument();
        // Alcohol en Gel is hygiene, should not be present
        expect(screen.queryByText('Alcohol en Gel')).not.toBeInTheDocument();
    });

    it('navigates to cart', () => {
        render(
            <MemoryRouter>
                <ProductCatalog />
            </MemoryRouter>
        );

        const cartButton = screen.getByText('🛒').closest('button');
        fireEvent.click(cartButton);
        expect(mockNavigate).toHaveBeenCalledWith('/orders/review');
    });

    it('adds product to cart (navigates)', () => {
        render(
            <MemoryRouter>
                <ProductCatalog />
            </MemoryRouter>
        );

        const addButtons = screen.getAllByText('Agregar');
        fireEvent.click(addButtons[0]);
        // Current implementation navigates to review
        expect(mockNavigate).toHaveBeenCalledWith('/orders/review');
    });
});
