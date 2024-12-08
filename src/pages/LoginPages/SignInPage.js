import { StyleSheet, Text, View, Image, Keyboard, ScrollView } from "react-native";
import React, { useReducer, useState } from "react";
import { TextInput } from "react-native-paper";
import LoginButton from "../../component/buttons/LoginButton";
import AuthAPI from "../../api/AuthAPI";
import Storage from "../../util/Storage";
import Logger from "../../util/logger";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { auth } from "../../util/Atoms";

export default function SignInPage() {
	const [form, dispatch] = useReducer(reducer, initialFormData);
	const [loading, setLoading] = useState(false);
	const setSigned = useAtom(auth)[1];
	const nav = useNavigation();

	return (
		<ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps='never'>
			<Text style={styles.title}>SIGN IN</Text>
			{/* <Image source={{uri: ""}} /> */}
			<FormField name='email' />
			<FormField name='password' secureTextEntry={true} />
			<LoginButton label='Sign in' onPress={handleSubmit} loading={loading} />
			<Text onPress={() => nav.navigate("SignUp")} style={styles.text}>
				Sign up if you don't have account
			</Text>
		</ScrollView>
	);

	async function handleSubmit() {
		setLoading(true);
		try {
			const result = await AuthAPI.login(form);
			Logger.debug("Fetch token:", result.token);
			Storage.token.setToken("t");
			setSigned(true);
			// nav.dispatch(StackActions.replace('Home'))
		} catch (error) {
			Logger.warn("Failed to login:", error);
		} finally {
			setLoading(false);
		}
	}

	function FormField({ name, secureTextEntry }) {
		const [value, setValue] = useState(form[name]);
		return (
			<TextInput
				label={name}
				value={value}
				secureTextEntry={secureTextEntry}
				style={styles.field}
				// onChangeText={(value) => dispatch({ type: "setField", field: name, value })}
				onChangeText={(value) => setValue(value)}
				onBlur={() => dispatch({ type: "setField", field: name, value })}
				mode='outlined'
				activeOutlineColor='#ffd795'
			/>
		);
	}
}

const initialFormData = {
	email: "",
	password: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "setField":
			return { ...state, [action.field]: action.value };
		case "reset":
			return initialFormData;
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
}

export const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	field: {
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 50,
		// color: "",
		// backgroundColor: "#fff",
	},
	text: {
		color: "skyblue",
		margin: 20,
	},
});
