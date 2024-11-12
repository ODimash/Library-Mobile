import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";

const StackNav = createStackNavigator();

export default function HomeStackNav() {
	return (
		<StackNav.Navigator initialRouteName='HomePage'>
			<StackNav.Screen
				name='HomePage'
				component={HomePage}
				options={{ headerTitle: () => <Text>Hi, DImash</Text> }}
			/>
		</StackNav.Navigator>
	);
}

const styles = StyleSheet.create({});
