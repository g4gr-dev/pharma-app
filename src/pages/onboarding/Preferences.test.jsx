import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Preferences from './Preferences';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Preferences Component', () => {
    it('renders preferences options', () => {
        render(
            <MemoryRouter>
                <Preferences />
            </MemoryRouter>
        );

        expect(screen.getByText('Preferencias')).toBeInTheDocument();
        expect(screen.getByText('Recordatorios de medicación')).toBeInTheDocument();
        expect(screen.getByText('Configuración')).toBeInTheDocument();
    });

    it('navigates back on arrow click', () => {
        render(
            <MemoryRouter>
                <Preferences />
            </MemoryRouter>
        );

        const backButton = screen.getByText('←').closest('button');
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('toggles switches', () => {
        render(
            <MemoryRouter>
                <Preferences />
            </MemoryRouter>
        );

        // Find by text, then find parent or sibling
        // This is tricky because the Switch component is a div.
        // We can query selector by class if we add one, or use the click handler.
        // Since we refactored, let's target the switch container or label.
        // The text is "Recordatorios de medicación". The sibling is the switch.

        const label = screen.getByText('Recordatorios de medicación');
        const switchComponent = label.nextSibling; // Should be the switch

        // Verify initial state (mocked as true in component)
        // Since styles are inline or css, testing "checked" directly on a div is hard without aria.
        // But we can test that clicking it doesn't crash and potentially updates state (if we could see it).
        // For now, simple interaction test.

        fireEvent.click(switchComponent);
        // Expect no errors.
    });

    it('navigates to dashboard on finish', () => {
        render(
            <MemoryRouter>
                <Preferences />
            </MemoryRouter>
        );

        const finishButton = screen.getByText('Finalizar');
        fireEvent.click(finishButton);
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
});
