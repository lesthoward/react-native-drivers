import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import StackNavigator from './navigators/StackNativagator';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <StackNavigator />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default registerRootComponent(App);
