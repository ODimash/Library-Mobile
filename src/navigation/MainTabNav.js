import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeStackNav from "./HomeStackNav";
const TabNav = createBottomTabNavigator();

export default function MainTabNav() {
	return (
		<TabNav.Navigator screenOptions={TabBarOptions}>
			<TabNav.Screen
				name='home'
				component={HomeStackNav}
			/>
			<TabNav.Screen
				name='book-search'
				component={SearchPage}
			/>
			<TabNav.Screen
				name='account'
				component={ProfilePage}
			/>
		</TabNav.Navigator>
	);
}

/**
 * @param route {}
 * @returns {BottomTabNavigationOptions}
 */
const TabBarOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
		const iconName = route.name + (focused ? "" : "-outline");
		return (
			<MaterialCommunityIcons
				name={iconName}
				size={size}
				color={color}
			/>
		);
	},
	tabBarActiveTintColor: "#6c3007",
	TabBarInactiveTintColor: "B59E86",
	tabBarSize: 30,
	tabBarStyle: { backgroundColor: "#f8e9d9" },
	headerShown: false,
});

const styles = StyleSheet.create({});
