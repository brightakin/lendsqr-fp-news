import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {COLORS} from '../../../constants/theme';
import {LOGIN, OAUTH} from '../../../navigation/routes';
import SignUpScreen from '../SignUp';

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
      <SignUpScreen navigation={mockNavigation} />
    </Provider>,
  );
};

describe('SignUpScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders SignUp screen correctly', () => {
    const {getByText, getByPlaceholderText} = renderComponent();

    expect(getByText('Sign Up')).toBeTruthy();
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Phone Number')).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByText('Done')).toBeTruthy();
    expect(getByText("Don't have an account? Login")).toBeTruthy();
  });

  test('handles form submission and navigation to OAUTH screen', async () => {
    const {getByPlaceholderText, getByText} = renderComponent();

    fireEvent.changeText(getByPlaceholderText('First Name'), 'John');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Phone Number'), '1234567890');
    fireEvent.changeText(
      getByPlaceholderText('Email Address'),
      'john.doe@example.com',
    );

    fireEvent.press(getByText('Done'));

    await new Promise(process.nextTick);

    expect(mockNavigation.navigate).toHaveBeenCalledWith(OAUTH);
  });

  test('navigates to login screen', () => {
    const {getByText} = renderComponent();
    const loginText = getByText("Don't have an account? Login");

    fireEvent.press(loginText);

    expect(mockNavigation.navigate).toHaveBeenCalledWith(LOGIN);
  });

  test('validates form fields correctly', async () => {
    const {getByText, getByPlaceholderText} = renderComponent();

    fireEvent.press(getByText('Done'));

    await new Promise(process.nextTick);

    expect(getByText('First Name is a required field')).toBeTruthy();
    expect(getByText('Last Name is a required field')).toBeTruthy();
    expect(getByText('Phone Number is a required field')).toBeTruthy();
    expect(getByText('Email Address is a required field')).toBeTruthy();
  });
});
