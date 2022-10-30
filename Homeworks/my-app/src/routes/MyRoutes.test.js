import { render, screen } from '@testing-library/react';
import Routing from './MyRoutes';

test('renders home link', () => {
    render(<Routing />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});