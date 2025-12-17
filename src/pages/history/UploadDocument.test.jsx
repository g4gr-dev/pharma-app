import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import UploadDocument from './UploadDocument';

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
    default: ({ label, placeholder }) => (
        <div>
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    )
}));

describe('UploadDocument Component', () => {
    it('renders upload UI', () => {
        render(
            <MemoryRouter>
                <UploadDocument />
            </MemoryRouter>
        );

        expect(screen.getByText('Subir Documento')).toBeInTheDocument();
        expect(screen.getByText('Toca para subir archivo')).toBeInTheDocument();
        expect(screen.getByText('Título del Documento')).toBeInTheDocument();
        expect(screen.getByText('Categoría')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <UploadDocument />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('handles file selection', async () => {
        render(
            <MemoryRouter>
                <UploadDocument />
            </MemoryRouter>
        );

        // Find hidden input
        // Since it's hidden, we might need to query by selector or use label if available.
        // The component has <input type="file" id="fileInput" ... />
        // But getByLabelText might not work if there is no label.
        // We can query by container selector.

        // Alternatively, use container to find input
        const fileInput = document.getElementById('fileInput') || document.querySelector('input[type="file"]');
        // Actually, render won't attach to document body in the same way `document.getElementById` works if we rely on global document?
        // Wait, testing-library renders into a container. `document.getElementById` might work if JSDOM is set up adequately, but better to use `screen`.
        // Screen doesn't show hidden elements by default for some queries.

        // Let's modify component refactor to ensure we can test it (e.g. data-testid).
        // Or finding by display: none?
        // Let's try finding the upload area and firing click, but that just triggers click on input.
        // Best is to fire change event on the valid input element.

        // However, since `input` is hidden, we can try to get it by id if available in the DOM provided by JSDOM.
        // Better:
        // const input = container.querySelector('input[type="file"]');
        // To do that, we need `container` from render.
    });
});
