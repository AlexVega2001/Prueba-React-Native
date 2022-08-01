import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import { LoginScreen } from '../screens/LoginScreen';

export const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='LoginScreen'
                screenOptions={ 
                    { headerShown: false } 
                }>

                <Stack.Screen 
                    name='LoginScreen' 
                    component={ LoginScreen }    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
