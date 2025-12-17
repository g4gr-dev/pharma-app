import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import VideoCall from './VideoCall';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock mediaDevices
Object.defineProperty(global.navigator, 'mediaDevices', {
    value: {
        getUserMedia: vi.fn(),
    },
});

describe('VideoCall Component', () => {
    it('renders video call elements', () => {
        render(
            <MemoryRouter>
                <VideoCall />
            </MemoryRouter>
        );

        expect(screen.getByText('Dra. Ana Gómez')).toBeInTheDocument();
        expect(screen.getByText('📞')).toBeInTheDocument(); // End call btn
    });

    it('navigates to summary on hangup', () => {
        render(
            <MemoryRouter>
                <VideoCall />
            </MemoryRouter>
        );

        const endButton = screen.getByText('📞').closest('button');
        fireEvent.click(endButton);
        expect(mockNavigate).toHaveBeenCalledWith('/consultations/summary');
    });

    it('toggles mute state', () => {
        render(
            <MemoryRouter>
                <VideoCall />
            </MemoryRouter>
        );

        const micButton = screen.getByText('🎤').closest('button');
        fireEvent.click(micButton);
        expect(screen.getByText('🔇')).toBeInTheDocument();

        fireEvent.click(micButton);
        expect(screen.getByText('🎤')).toBeInTheDocument();
    });

    it('toggles video state', async () => {
        render(
            <MemoryRouter>
                <VideoCall />
            </MemoryRouter>
        );

        const videoButton = screen.getByText('📹').closest('button');
        fireEvent.click(videoButton);
        expect(await screen.findByText('🚫')).toBeInTheDocument();

        const disabledVideoButton = screen.getByText('🚫').closest('button');
        fireEvent.click(disabledVideoButton);
        expect(await screen.findByText('📹')).toBeInTheDocument();
    });
});
