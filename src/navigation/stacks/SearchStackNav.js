import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchPage from "../../pages/SearchPage";
import SearchHeader from "../../component/headers/SearchHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SearchStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='SearchPage'
				component={SearchPage}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {},
});
