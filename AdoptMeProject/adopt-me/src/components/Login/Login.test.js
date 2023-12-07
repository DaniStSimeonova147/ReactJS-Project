import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Login } from './Login';

describe('Login Component', () => {
    const mockAuthContextValue = {
      onLoginSubmit: jest.fn(),
    };
  
    it('calls onLoginSubmit when the form is submitted', () => {
      render(
        <MemoryRouter>
          <AuthContext.Provider value={mockAuthContextValue}>
            <Login />
          </AuthContext.Provider>
        </MemoryRouter>
      );
  
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Password');
      const loginButton = screen.getByText('LogIn');
  
      fireEvent.change(emailInput, { target: { value: 'test@abv.bg' } });
      fireEvent.change(passwordInput, { target: { value: '123456' } });
  
      fireEvent.click(loginButton);
  
      expect(mockAuthContextValue.onLoginSubmit).toHaveBeenCalledWith({
        email: 'test@abv.bg',
        password: '123456',
      });
    });
  });


