import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginScreen from '../Login'; // Adjust the path

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
interface State {}

const initialState: State = {};
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  state: {params: {}},
};

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    hasPlayServices: jest.fn().mockResolvedValue(true),
    signIn: jest.fn().mockResolvedValue({
      user: {
        email: 'test@example.com',
        id: '123',
        name: 'Test User',
      },
    }),
  },
}));

jest.mock('@react-native-firebase/analytics', () => ({}));

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
    const {getByText} = renderComponent();
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
    const googleLoginButton = getByText('Sign In with Google');

    fireEvent.press(googleLoginButton);
  });
});
