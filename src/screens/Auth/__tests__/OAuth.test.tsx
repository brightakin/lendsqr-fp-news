import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {loginUserSuccess} from '../../../redux/slices/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import OauthScreen from '../OAuth';

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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

interface State {}

const initialState: State = {};

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  state: {params: {}},
};

const renderComponent = (state: State = initialState) => {
  const store = mockStore(state);
  return render(
    <Provider store={store}>
      <OauthScreen navigation={mockNavigation} />
    </Provider>,
  );
};

describe('OauthScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Oauth screen correctly', () => {
    const {getByText} = renderComponent();

    expect(getByText('Create Account')).toBeTruthy();
    expect(getByText('Sign Up with Google')).toBeTruthy();
    expect(getByText("Don't have an account? Login")).toBeTruthy();
  });

  test('handles Google sign in successfully', async () => {
    const {getByText} = renderComponent();
    const signInButton = getByText('Sign Up with Google');

    fireEvent.press(signInButton);

    expect(GoogleSignin.configure).toHaveBeenCalled();
    expect(GoogleSignin.hasPlayServices).toHaveBeenCalled();
    expect(GoogleSignin.signIn).toHaveBeenCalled();

    // Wait for the async signIn to resolve
    await new Promise(process.nextTick);

    const actions = mockStore(initialState).getActions();
    expect(actions).toContainEqual(
      loginUserSuccess({
        user: {
          email: 'test@example.com',
          id: '123',
          name: 'Test User',
        },
      }),
    );
  });

  test('navigates to login screen', () => {
    const {getByText} = renderComponent();
    const loginText = getByText("Don't have an account? Login");

    fireEvent.press(loginText);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});
