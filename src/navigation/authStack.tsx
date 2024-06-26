import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/Auth/SignUp';
import LoginScreen from '../screens/Auth/Login';
import OauthScreen from '../screens/Auth/OAuth';
import {LOGIN, OAUTH, SIGNUP} from './routes';

const AuthStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={LOGIN}
        component={LoginScreen}
      />

      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={SIGNUP}
        component={SignUpScreen}
      />

      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={OAUTH}
        component={OauthScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
