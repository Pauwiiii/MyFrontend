import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Reviewpage from './pages/Reviewpage';


const Stack=createNativeStackNavigator();

export default function Dashboard(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage}/>
                <Stack.Screen name="Register" component={Registerpage}/>
                <Stack.Screen name="Review" component={Reviewpage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
