import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

// Redux
// import { Provider } from 'react-redux';
// import store from './src/redux/store';

export default function App() {
  return (
    // <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    // </Provider>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});