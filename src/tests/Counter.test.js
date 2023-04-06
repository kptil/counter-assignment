import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'

const setup = () => render(<Counter />);

// beforeEach removed and setup called in each test to comply with below rule
// https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md

test('renders counter message', () => {
  setup();
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  setup();
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  setup();
  userEvent.click(screen.getByText('+'));
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  setup();
  userEvent.click(screen.getByText('-'));
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('-1');
});
