import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders chat room text', () => {
  render(<App />);
  const element = screen.getByText('chat room');
  expect(element).toBeInTheDocument();
});
