import { registerRootComponent } from 'expo';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default registerRootComponent(App);
