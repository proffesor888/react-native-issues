import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./StackNavigator";

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};