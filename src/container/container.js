import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RegisterScreen, RoomScreen } from 'screens';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

export function Container() {
    const Stack = createNativeStackNavigator();
    const user = auth().currentUser;
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={!user ? 'LoginScreen' : "HomeScreen"}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen} />
                <Stack.Screen
                    name='RegisterScreen'
                    component={RegisterScreen} />
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen} />
                <Stack.Screen
                    name='RoomScreen'
                    component={RoomScreen} />
            </Stack.Navigator>
            <FlashMessage position='top' />
        </NavigationContainer>
    )
}