import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import NewPost from "./NewPost"
import Login from './Login'
import SignUp from './SignUp';
import { navigationRef } from '../styles/utility/RootNavigation';

const Stack = createStackNavigator()
const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={screenOptions}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack