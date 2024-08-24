import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from './pages/Intro';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import ExerciseDetails from './pages/ExerciseDetails';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Intro'>
            <Stack.Screen
                name='Intro'
                component={Intro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Exercise'
                component={Exercise}
                options={{ headerShown: false, presentation: 'fullScreenModal' }}
            />
            <Stack.Screen
                name='ExerciseDetails'
                component={ExerciseDetails}
                options={{ headerShown: false, presentation: 'modal' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}