import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ResponsiveLayout from './ResponsiveLayout';

// Mock Sidebar and BottomNav (though BottomNav is hidden via CSS)
vi.mock('./Sidebar', () => ({
    default: () => <div data-testid="sidebar">Sidebar</div>
}));

describe('ResponsiveLayout Component', () => {
    it('renders sidebar and content', () => {
        render(
            <ResponsiveLayout>
                <div data-testid="content">Main Content</div>
            </ResponsiveLayout>
        );

        // Sidebar should be in the document (hidden by CSS on mobile, but rendered)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
