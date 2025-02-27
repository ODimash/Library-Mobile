import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../pages/HomePage";
import BookOverview from "../../pages/BookOverview";
import AddBookPage from "../../pages/AddBookPage";

const Stack = createStackNavigator();

export default function HomeStackNav() {
	return (
		<Stack.Navigator initialRouteName='HomePage'>
			<Stack.Screen name='HomePage' component={HomePage} options={{ headerTitle: "Home" }} />
			<Stack.Screen name='BookOverview' component={BookOverview} />
			<Stack.Screen name='AddBook' component={AddBookPage} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
