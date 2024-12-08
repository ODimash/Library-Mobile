import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

export default function LoginButton({ label, onPress, loading }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			{loading ? <ActivityIndicator color='#fff' /> : <Text style={styles.label}>{label}</Text>}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "40%",
		aspectRatio: 3,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffd795",
		borderRadius: 10,
		elevation: 3,
		marginVertical: 30,
	},

	label: {
		textAlign: "center",
		fontWeight: "black",
		color: "#fff",
	},
});
