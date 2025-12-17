import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DocumentViewer from './DocumentViewer';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('DocumentViewer Component', () => {
    it('renders document viewer UI', () => {
        render(
            <MemoryRouter>
                <DocumentViewer />
            </MemoryRouter>
        );

        expect(screen.getByText('Análisis de Sangre')).toBeInTheDocument();
        expect(screen.getByText('Vista Previa del Documento')).toBeInTheDocument();
        expect(screen.getByText('Laboratorio Central')).toBeInTheDocument();
        expect(screen.getByText('Compartir con Médico')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <DocumentViewer />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    // Test for download icon click if functionality added
});
