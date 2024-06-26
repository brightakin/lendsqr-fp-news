import Login from '../Login';
import {fireEvent, render} from '@testing-library/react-native';
describe('Login Screen', () => {
  const page = render(<Login />);

  const loginButton = page.getByTestId('LoginButton');

  fireEvent.press(loginButton);
});
