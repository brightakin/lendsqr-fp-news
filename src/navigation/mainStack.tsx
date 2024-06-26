import {createStackNavigator} from '@react-navigation/stack';
import {NEWSDETAILS, NEWSLISTING} from './routes';
import NewsListingScreen from '../screens/Main/NewsListing';
import NewsDetailsScreen from '../screens/Main/NewsDetails';

const MainStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NEWSLISTING} component={NewsListingScreen} />
      <Stack.Screen name={NEWSDETAILS} component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
