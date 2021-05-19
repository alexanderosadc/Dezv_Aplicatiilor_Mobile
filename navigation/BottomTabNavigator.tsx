
import { Ionicons, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList } from '../types';
import LibraryScreen from "../screens/LibraryScreen";
import SearchScreen from "../screens/SearchScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Entypo
                            name="home"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <EvilIcons name="search"
                                   size={30}
                                   style={{ marginBottom: -3 }}
                                   color={color} />,
                }}
            />
            <BottomTab.Screen
                name="LibraryScreen"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <AntDesign
                            name="sound"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}