import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInPage from "../../pages/LoginPages/SignInPage";
import SignUpPage from "../../pages/LoginPages/SignUpPage";

const Stack = createStackNavigator();

export default function LoginStackNav() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='SignIn' component={SignInPage} />
			<Stack.Screen name='SignUp' component={SignUpPage} />
		</Stack.Navigator>
	);
}
