import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BooksAPI } from "../api/BooksAPI";
import BooksCarousel from "../module/BooksCarousel";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
	const bookAPI = new BooksAPI();
	const nav = useNavigation();
	const bookCarousels = [
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
	];

	return (
		<View>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.topContainer}>
					<Text style={styles.h1}>Hi, Dimash!</Text>
					<Text style={styles.h2}>Which book would you like to read today?</Text>
				</View>

				{bookCarousels.map((item, index) => (
					<BooksCarousel key={index} label={item.label} method={item.method} />
				))}
			</ScrollView>
			<AntDesign
				name='plus'
				size={50}
				color='black'
				style={{
					position: "absolute",
					bottom: 30,
					right: 20,
					backgroundColor: "pink",
					borderRadius: 50,
					padding: 10,
					borderWidth: 1,
				}}
				onPress={() => nav.navigate("AddBook")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	topContainer: {
		marginHorizontal: 20,
		paddingVertical: 10,
		gap: 10,
	},
	h1: {
		fontSize: 22,
		fontWeight: "500",
	},
	h2: {
		fontSize: 18,
	},
});
