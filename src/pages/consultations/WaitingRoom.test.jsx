import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import WaitingRoom from './WaitingRoom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('WaitingRoom Component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('renders doctor info and progress', () => {
        render(
            <MemoryRouter>
                <WaitingRoom />
            </MemoryRouter>
        );

        expect(screen.getByText('Dra. Ana Gómez')).toBeInTheDocument();
        expect(screen.getByText('Conectando...')).toBeInTheDocument();
        expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('progresses progress bar over time', () => {
        render(
            <MemoryRouter>
                <WaitingRoom />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(200); // +5%
        });

        expect(screen.queryByText('0%')).not.toBeInTheDocument();
    });

    it('redirects when progress completes', () => {
        render(
            <MemoryRouter>
                <WaitingRoom />
            </MemoryRouter>
        );

        act(() => {
            // Need to advance enough to reach 100%. 5% every 200ms -> 20 steps -> 4000ms.
            // Plus 1000ms timeout for navigation.
            vi.advanceTimersByTime(10000);
        });

        expect(mockNavigate).toHaveBeenCalledWith('/consultations/video');
    });
});
