import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the test', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(button).toBeDisabled();
  });

  it('should be enabled when is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="load more" onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
