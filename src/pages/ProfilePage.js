import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BooksAPI } from "../api/BooksAPI";
import BooksCarousel from "../module/BooksCarousel";

export default function ProfilePage() {
  const bookAPI = new BooksAPI();
  const username = "Dimash Osmanov";
  const readBookCount = 156;
  const readingTime = 200;
  const UserStatisticInfo = {
    booksRead: 156,
    readingTime: 200,
    averageReadingTIme: 3,
    favoriteGenre: "Horror",
    pagesRead: 1231,
  };

  const bookCarousels = [
		{ label: "History", method: bookAPI.getMostReadBooks },
		{ label: "Saved books", method: bookAPI.getMostReadBooks },
		{ label: "My books", method: bookAPI.getMostReadBooks },
	];


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avaContainer}>
          {/* <Image src={} /> */}
          <AntDesign name="user" size={70} color="silver" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text>Books read: {readBookCount}</Text>
          <Text>Reading time: {readingTime} hours</Text>
        </View>
      </View>
      <View style={styles.statisticContainer}>
        {Object.keys(UserStatisticInfo).map((key, index) => (
          <View style={styles.dataRow}>
            <Text>{key}:</Text>
            <Text>{UserStatisticInfo[key]}</Text>
          </View>
        ))}
      </View>
      {bookCarousels.map((item, index) => (
				<BooksCarousel
					key={index}
					label={item.label}
					method={item.method}
				/>
			))}
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  avaContainer: {
    padding: 10,
    width: 100,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "silver",
    borderRadius: 100,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "silver",
  },

  infoContainer: {
    // backgroundColor: 'yellow',
    flex: 1,
    marginHorizontal: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statisticContainer: {
    margin: '10%'
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey',
    borderStyle: 'dashed',
    marginVertical: 10,
  }
});
