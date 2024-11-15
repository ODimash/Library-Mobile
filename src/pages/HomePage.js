import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BooksAPI } from "../api/BooksAPI";
import BooksCarousel from "../module/BooksCarousel";

export default function HomePage() {
	const bookAPI = new BooksAPI();
	const bookCarousels = [
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
		{ label: "Most read books", method: bookAPI.getMostReadBooks },
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.h1}>Hi, Dimash!</Text>
				<Text style={styles.h2}>Which book would you like to read today?</Text>
			</View>

			{bookCarousels.map((item, index) => (
				<BooksCarousel
					key={index}
					label={item.label}
					method={item.method}
				/>
			))}
		</ScrollView>
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
