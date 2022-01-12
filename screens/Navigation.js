import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import NewPost from "./NewPost"

const Stack = createStackNavigator()
const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={screenOptions}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack