import { TodoProvider } from '@/components/TodoContext';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActiveCount from '@/components/ActiveCount';
import { stateType } from '@/components/todoReducer';

function renderActiveCount() {
  return render(
    <TodoProvider>
      <ActiveCount />
    </TodoProvider>
  );
}

describe('Render active count', () => {
  it('renders active count component', () => {
    renderActiveCount();
    expect(screen.getByText(/Items Left/i)).toBeInTheDocument();
  });
});
