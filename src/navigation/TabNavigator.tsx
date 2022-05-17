import {IssuesListScreen} from "../screens/IssuesListScreen";
import {BookmarkedScreen} from "../screens/BookmarkedScreen";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import type {TabParamList} from "./types/navigation_types";
import {TabNavigatorScreenProps} from "./types/navigation_types";

const TabNavigator: React.FC<TabNavigatorScreenProps> = ({route}) => {
    const Tab = createBottomTabNavigator();
    const { issues } = route.params;

    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Bookmarked') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'IssuesList') {
                        iconName = 'ios-list';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                options={{headerShown: false}}
                name="IssuesList"
                initialParams={{ issues }}
                component={IssuesListScreen}
            />
            <Tab.Screen
                options={{headerShown: false}}
                name="Bookmarked"
                component={BookmarkedScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;