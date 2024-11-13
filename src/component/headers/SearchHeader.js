import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchHeader() {
	return (
		<View style={styles.container}>
			<AntDesign
				name='search1'
				size={24}
				color='gray'
			/>
			<TextInput style={styles.searchBar} />
			<AntDesign
				name='closecircle'
				size={24}
				color='gray'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginRight: 30,
		flexDirection: "row",
		backgroundColor: "#f0f0f0",
		alignItems: "center",
		// borderWidth: 0.7,
		borderRadius: 15,
		borderColor: "gray",
		paddingHorizontal: 10,
	},
	searchBar: {
		padding: 7,

		marginHorizontal: 5,
		// width: "80%",
		flex: 1,
	},
});
