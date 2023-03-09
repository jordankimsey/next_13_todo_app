import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('renders footer component', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Jordan/i)).toBeInTheDocument();
  });
});
