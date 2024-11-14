import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoundBookCard from "../component/FoundBookCard";

/**
 *
 * @param {Object} param
 * @param {Book[]} param.books
 * @returns
 */
export default function FoundBooks({ books }) {
	return (
		<FlatList
			data={books}
			renderItem={({ item }) => <FoundBookCard book={item} />}
			keyExtractor={(item, index) => (item.key = index)}
			contentContainerStyle={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		margin: 10,
	},
});
