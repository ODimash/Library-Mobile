import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Book } from "../entity/Book";

/**
 *
 * @param {Object} param0
 * @param {Book} param0.book
 * @returns
 */
export default function FoundBookCard({ book }) {
	return (
		<View style={styles.container}>
			<View style={styles.bookCover}>
				<Image
					source={{ uri: book.bookCover }}
					style={styles.bookCover}
				/>
			</View>
			<View style={styles.dataContainer}>
				<Text>{book.title}</Text>
				<Text>{book.author}</Text>
				<Text>{book.genre}</Text>
				<Text>{book.rating}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		elevation: 8,
	},
	imageContainer: {},
	bookCover: {
		width: 100,
		aspectRatio: 3 / 4,
	},
	dataContainer: {
		// alignItems: "center",
		// justifyContent: "center",
		padding: 20,
	},
});
