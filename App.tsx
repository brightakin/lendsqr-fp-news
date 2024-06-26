/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
//import {persistor, store} from './src/redux';
import AppNavigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import codePush from 'react-native-code-push';
import OfflineNotice from './src/components/offlineNotice';
import {persistor, store} from './src/redux';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: false,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OfflineNotice />
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor="transparent"
          />
          <AppNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const codePushApp = codePush(codePushOptions)(App);
export default codePushApp;
