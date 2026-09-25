import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the sign-in screen on the default route', () => {
    window.history.pushState({}, '', '/');

    render(<App />);

    expect(screen.getByText(/enter your password/i)).toBeInTheDocument();
  });

  it('renders the 2FA screen on the 2fa route', () => {
    window.history.pushState({}, '', '/2fa');

    render(<App />);

    expect(screen.getByText(/two-factor verification/i)).toBeInTheDocument();
  });
});
