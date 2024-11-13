import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchHeader({ setValue }) {
	const textInputRef = useRef();

	return (
		<View style={styles.container}>
			<AntDesign
				name='search1'
				size={24}
				color='gray'
			/>
			<TextInput
				ref={textInputRef}
				onEndEditing={(e) => setValue(e.nativeEvent.text)}
				style={styles.searchBar}
				placeholder='Search'
			/>
			<TouchableOpacity onPress={clearInput}>
				<AntDesign
					name='closecircle'
					size={24}
					color='silver'
				/>
			</TouchableOpacity>
		</View>
	);

	function clearInput() {
		setValue("");
		textInputRef.current.clear();
	}
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
