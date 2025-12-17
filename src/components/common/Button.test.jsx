import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const button = screen.getByText('Click Me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies fullWidth style when fullWidth prop is true', () => {
        render(<Button fullWidth>Full Width</Button>);
        const button = screen.getByText('Full Width');
        expect(button.closest('button')).toHaveClass('btn-full-width');
    });

    it('renders icon when icon prop is provided', () => {
        const icon = <span data-testid="icon">🔍</span>;
        render(<Button icon={icon}>Search</Button>);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('has correct type attribute', () => {
        render(<Button type="submit">Submit</Button>);
        expect(screen.getByText('Submit').closest('button')).toHaveAttribute('type', 'submit');
    });
});
