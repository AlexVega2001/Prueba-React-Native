import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import { LoginScreen } from '../screens/LoginScreen';
import { ListAuthorsScreen } from '../screens/ListAuthorsScreen';
import { ListPlays } from './ListPlays';

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

                <Stack.Screen 
                    name='ListAuthorsScreen' 
                    component={ ListAuthorsScreen }    
                />

                <Stack.Screen 
                    name='ListPlays' 
                    component={ ListPlays }    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
