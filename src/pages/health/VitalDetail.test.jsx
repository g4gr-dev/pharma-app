import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import VitalDetail from './VitalDetail';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('VitalDetail Component', () => {
    it('renders correct title for blood pressure (bp)', () => {
        render(
            <MemoryRouter initialEntries={['/health/bp']}>
                <Routes>
                    <Route path="/health/:id" element={<VitalDetail />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Presión Arterial')).toBeInTheDocument();
        expect(screen.getByText('Historial')).toBeInTheDocument();
    });

    it('renders correct title for weight', () => {
        render(
            <MemoryRouter initialEntries={['/health/weight']}>
                <Routes>
                    <Route path="/health/:id" element={<VitalDetail />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Peso')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter initialEntries={['/health/bp']}>
                <Routes>
                    <Route path="/health/:id" element={<VitalDetail />} />
                </Routes>
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('renders history items', () => {
        render(
            <MemoryRouter initialEntries={['/health/bp']}>
                <Routes>
                    <Route path="/health/:id" element={<VitalDetail />} />
                </Routes>
            </MemoryRouter>
        );
        // We have hardcoded 5 items
        expect(screen.getAllByText('Normal').length).toBeGreaterThan(0);
        expect(screen.getAllByText('120/80 mmHg').length).toBeGreaterThan(0);
    });
});
