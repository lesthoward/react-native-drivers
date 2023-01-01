import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import StackNavigator from './navigators/StackNativagator';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default registerRootComponent(App);
