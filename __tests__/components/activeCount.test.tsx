import { render, screen } from '@testing-library/react';
import ActiveCount from '@/components/ActiveCount';
import '@testing-library/jest-dom';

describe('Active Count component', () => {
  it('renders text', () => {
    render(<ActiveCount />);

    const text = screen.getByText(/Items Left/i);
    
    expect(text).toBeInTheDocument();
  });
});
