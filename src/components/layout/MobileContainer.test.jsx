import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MobileContainer from './MobileContainer';

describe('MobileContainer Component', () => {
    it('renders children content', () => {
        render(
            <MobileContainer>
                <div data-testid="child-content">Child Content</div>
            </MobileContainer>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });
});
