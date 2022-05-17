import * as React from "react";
import {OrganizationScreen} from "../screens/OrganizationScreen";
import {IssueDetailsScreen} from "../screens/IssueDetailsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StackParamList} from "./types/navigation_types";
import TabNavigator from "./TabNavigator";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator<StackParamList>();
    return(
        <Stack.Navigator initialRouteName="Organization">
            <Stack.Screen
                name="Organization"
                component={OrganizationScreen}
            />
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
            />
            <Stack.Screen
                name="IssueDetails"
                component={IssueDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;