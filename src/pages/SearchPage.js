import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchHeader from "../component/headers/SearchHeader";
import LottieView from "lottie-react-native";

export default function SearchPage() {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerTitle: SearchHeader,
			headerTitleAlign: "center",
		});
	}, []);
	return (
		<View>
			<LottieView
				source={require("../assets/anim/cup.json")}
				styles={{ height: 100, width: 100 }}
			/>
			<Text>SearchPage</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
