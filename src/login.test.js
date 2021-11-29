import React from 'react';
import { render, screen, fireEvent, userEvent, waitFor, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from "./Login";

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(() => 'routes'),
  };
});

describe('Login Component:', () => {
  it('Should render correctly', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
  describe('Solutation Component:', () => {
    it('Have Solutation', () => {
      render(<Login />);
      expect(screen.getByTestId('solutation')).toBeInTheDocument();
    });
  });

  describe('Title Component:', () => {
    it('Have Title Login', () => {
      render(<Login />);

      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    it('Title Have Style', () => {
      render(<Login />);

      expect(screen.getByTestId('login')).toHaveStyle({
        color: '#E0E0E0',
        fontFamily: 'Mark Pro',
        fontSize: '30px',
      });
    });
  });

  describe('Inputs Component:', () => {
    it('Have Two Inputs', () => {
      render(<Login />);

      expect(screen.getByTestId('data.email')).toBeInTheDocument();
      expect(screen.getByTestId('data.password')).toBeInTheDocument();
    });

    it('Have Two Icons', () => {
      render(<Login />);

      expect(screen.getByTestId('data.email')).toBeInTheDocument();
      expect(screen.getByTestId('data.password')).toBeInTheDocument();
    });

    it('Input Have Style', () => {
      render(<Login />);

      expect(screen.getByTestId('data.email')).toHaveStyle({
        width: '310px',
        borderRadius: '50px',
        color: '#E0E0E0',
      });
      expect(screen.getByTestId('data.password')).toHaveStyle({
        width: '310px',
        borderRadius: '50px',
        color: '#E0E0E0',
      });
    });

    it('Updates onChange', async () => {
      const promise = Promise.resolve();
      const { getByTestId } = render(<Login />);

      const userInput = getByTestId('data.email');
      const passwordInput = getByTestId('data.password');

      user.type(userInput, 'leonardo@compasso.com.br');
      user.type(passwordInput, 'COMPasso#@123');

      expect(userInput.value).toBe('leonardo@compasso.com.br');
      expect(passwordInput.value).toBe('COMPasso#@123');
      await act(() => promise);
    });
  });

  describe('Button Component:', () => {
    it('Have Button', () => {
      render(<Login />);

      expect(screen.getByTestId('button-login')).toBeInTheDocument();
    });

    it('Have Text "Continuar" in button', () => {
      render(<Login />);

      expect(screen.getByText('Continuar')).toBeInTheDocument();
    });
    it('Button Have Style', () => {
      render(<Login />);

      expect(screen.getByTestId('styled.button')).toHaveStyle({
        background: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)',
        width: '379px',
        borderRadius: '50px',
        height: '67px',
        cursor: 'pointer',
        border: 'none',
      });
    });
  });
});