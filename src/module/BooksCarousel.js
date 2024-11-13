import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Book } from "../entity/Book";
import BookCard from "../component/BookCard";

/**
 *
 * @param {{label: string, method: ()=>Promise<Array<Book>>}} param0
 * @returns
 */
export default function BooksCarousel({ label, method, key }) {
	/** @type {[Book[], () => void]}*/
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		method().then((b) => {
			setBooks(b);
			setLoading(false);
		});
	}, []);

	if (loading) return <ActivityIndicator />;

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<FlatList
				data={books}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.listContainer}
				renderItem={({ item }) => <BookCard book={item} />}
				keyExtractor={(item) => (item.key = item.id)}
				horizontal
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 10,
		borderTopWidth: 1,
		borderColor: "silver",
	},
	label: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 15,
	},
	listContainer: {
		columnGap: 10,
	},
});
