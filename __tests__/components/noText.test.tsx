import { render, screen } from '@testing-library/react';
import NoTodos from '@/components/NoTodos';
import '@testing-library/jest-dom';

describe('Active Count component', () => {
  it('renders text', () => {
    render(<NoTodos />);

    const text = screen.getByRole('heading');
    const headerText = "All caught up, add more todo's";

    expect(text).toHaveTextContent(headerText);
  });
});
