import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import LoginStackNav from "./stacks/LoginStackNav";
import MainTabNav from "./MainTabNav";
import { useAtom } from "jotai";
import { auth } from "../util/Atoms";
import Storage from "../util/Storage";
import SplashPage from "../pages/SplashPage";

const Stack = createStackNavigator();

export default function MainNavigation() {
	const [isSigned, setSigned] = useAtom(auth);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkAuth();
	}, []);

	async function checkAuth() {
		try {
			const token = Storage.token.getToken();
			setSigned(token ? true : false);
		} catch (error) {
			setSigned(false);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{loading ? (
				<Stack.Screen name='SplashPage' component={SplashPage} />
			) : isSigned ? (
				<Stack.Screen name='MainTab' component={MainTabNav} />
			) : (
				<Stack.Screen name='LoginStack' component={LoginStackNav} />
			)}
		</Stack.Navigator>
	);
}
