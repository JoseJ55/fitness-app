import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from './assets/images/welcome.png';
import { useRouter } from 'expo-router';
import Navigation from './src/Navigation';

// Redux
// import { Provider } from 'react-redux';
// import store from './src/redux/store';

export default function App() {
    const router = useRouter;
  return (
    // <Provider store={store}>
    <>
        <StatusBar style='light' />
        {/* <NavigationContainer> */}
            <Navigation/>
        {/* </NavigationContainer> */}
    </>
    // </Provider>
  );
}

registerRootComponent(App);
