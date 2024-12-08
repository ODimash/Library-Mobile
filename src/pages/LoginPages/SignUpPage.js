import { StyleSheet, Text, View, Image, Keyboard, ScrollView } from "react-native";
import React, { useCallback, useReducer, useState } from "react";
import { TextInput } from "react-native-paper";
import LoginButton from "../../component/buttons/LoginButton";
import AuthAPI from "../../api/AuthAPI";
import Storage from "../../util/Storage";
import Logger from "../../util/logger";
import { useAtom } from "jotai";
import { auth } from "../../util/Atoms";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./SignInPage";

export default function SignUpPage() {
	const reducerCallback = useCallback(reducer, []);
	const [form, dispatch] = useReducer(reducerCallback, initialFormData);
	const [loading, setLoading] = useState(false);
	const nav = useNavigation();
	const setSigned = useAtom(auth)[1];

	return (
		<ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps='never'>
			<Text style={styles.title}>SIGN UP</Text>
			{/* <Image source={{uri: ""}} /> */}
			<FormField name='email' />
			<FormField name='name' />
			<FormField name='password' secureTextEntry={true} />
			<FormField name='repeat password' secureTextEntry={true} />
			<LoginButton style={styles.button} label='Sign up' onPress={handleSubmit} loading={loading} />
			<Text onPress={() => nav.navigate("SignIn")} style={styles.text}>
				Press here if you already have account
			</Text>
		</ScrollView>
	);

	async function handleSubmit() {
		setLoading(true);
		try {
			const result = await AuthAPI.register(form);
			Storage.token.setToken(result.token);
			setSigned(true);
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
	name: "",
	password: "",
	confirmPassword: "",
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
