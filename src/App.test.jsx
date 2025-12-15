import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock the page components to avoid deep rendering and dependency issues
vi.mock('./pages/onboarding/WelcomeDetails', () => ({ default: () => <div data-testid="welcome-page">Welcome Page</div> }));
vi.mock('./pages/onboarding/CreateAccount', () => ({ default: () => <div data-testid="create-account-page">Create Account Page</div> }));
vi.mock('./pages/dashboard/Dashboard', () => ({ default: () => <div data-testid="dashboard-page">Dashboard Page</div> }));
vi.mock('./components/layout/ResponsiveLayout', () => ({ default: ({ children }) => <div data-testid="responsive-layout">{children}</div> }));

// Mock other simple components if necessary, or just rely on the fact that if they are not visited they won't render.
// Since we are using MemoryRouter inside the test (or relying on App to have Router if it had one, but App uses Routes so it needs a Router wrapping it)
// App.jsx contains Routes but NOT BrowserRouter. Usually main.jsx has BrowserRouter. 
// So we need to wrap App in MemoryRouter in tests.

describe('App Routing', () => {
    it('redirects root path to welcome', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('welcome-page')).toBeInTheDocument();
    });

    it('renders dashboard when visiting /dashboard', () => {
        render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
    });

    it('wraps content in ResponsiveLayout', () => {
        render(
            <MemoryRouter initialEntries={['/welcome']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('responsive-layout')).toBeInTheDocument();
    });
});
