import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Book } from "../entity/Book";
import { useNavigation } from "@react-navigation/native";

/**
 *
 * @param {{book: Book}} param
 * @returns
 */
const BookCard = ({ book }) => {
	const nav = useNavigation();
	return (
		<TouchableOpacity style={styles.container} onPress={() => nav.navigate('BookOverview', {book})}>
			<Image
				source={{ uri: book.bookCover }}
				style={styles.cover}
			/>
			<Text
				style={styles.author}
				numberOfLines={1}>
				{book.author}
			</Text>
			<Text
				style={styles.title}
				numberOfLines={1}>
				{book.title}
			</Text>
			{/* <Text>Genre: {Genre.ACTION}</Text> */}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 120,
		alignItems: "center",
	},
	cover: {
		width: 100,
		aspectRatio: 3 / 4,
	},
	author: {
		color: "grey",
	},
	title: {
		fontWeight: "600",
	},
});

export default BookCard;
