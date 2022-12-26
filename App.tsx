import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

const styles = StyleSheet.create({});
