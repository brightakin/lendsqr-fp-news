import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginScreen from '../Login'; // Adjust the path

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  state: {params: {}},
};

const renderComponent = (state = initialState) => {
  const store = mockStore(state);
  return render(
    <Provider store={store}>
      <LoginScreen navigation={mockNavigation} />
    </Provider>,
  );
};

describe('LoginScreen', () => {
  test('renders login screen correctly', () => {
    const {getByPlaceholderText, getByText} = renderComponent();

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  test('handles login button press', () => {
    const {getByText} = renderComponent();
    const loginButton = getByText('Login');

    fireEvent.press(loginButton);

    // Add your assertions here to check if the login action was dispatched
  });

  test('handles Google login button press', () => {
    const {getByText} = renderComponent();
    const googleLoginButton = getByText('Sign in with Google');

    fireEvent.press(googleLoginButton);

    // Add your assertions here to check if the Google login action was dispatched
  });
});
