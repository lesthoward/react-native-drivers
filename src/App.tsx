import { registerRootComponent } from 'expo';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';


export const App = () => {
  return (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default registerRootComponent(App);