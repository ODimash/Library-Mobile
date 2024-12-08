import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchHeader from "../component/headers/SearchHeader";
import LottieView from "lottie-react-native";
import { BooksAPI } from "../api/BooksAPI";
import FoundBooks from "../module/FoundBooks";

export default function SearchPage() {
	const booksAPI = new BooksAPI();
	const navigation = useNavigation();
	const [value, setValue] = useState(""); // value for search
	const [foundBooks, setFoundBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		navigation.setOptions({
			header: () => <SearchHeader setValue={setValue} />,
		});
	}, []);

	useEffect(() => {
		if (value.length < 2) {
			setFoundBooks([]);
			return;
		}
		booksAPI.findBooks(value).then(setFoundBooks).then(setLoading);
	}, [value]);

	if (loading) return <ActivityIndicator />;

	return (
		<View>
			<LottieView source={require("../assets/anim/cup.json")} styles={{ height: 100, width: 100 }} />
			<Text>Search value: {value}</Text>
			<FoundBooks books={foundBooks} />
		</View>
	);
}

const styles = StyleSheet.create({});
