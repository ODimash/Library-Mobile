import { StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BooksAPI } from "../api/BooksAPI";
import BooksCarousel from "../module/BooksCarousel";
import { User } from "../entity/User";

export default function ProfilePage() {
  const bookAPI = new BooksAPI();
  const user = new User(1, "Dimash Osmanov", "email", [], {
    booksRead: 156,
    readingTime: 200,
    favoriteGenre: "Horror",
    pagesRead: 1231,
  });

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
            <Text style={styles.username}>{user.name}</Text>
            <Text>Books read: {user.statistic.booksRead}</Text>
            <Text>Reading time: {user.statistic.readingTime} hours</Text>
          </View>
        </View>
        <View style={styles.statisticContainer}>
          {Object.keys(user.statistic).map((key, index) => (
            <View style={styles.dataRow} key={index}>
              <Text>{key}:</Text>
              <Text>{user.statistic[key]}</Text>
            </View>
          ))}
        </View>
        {bookCarousels.map(({ label, method }, index) => (
          <BooksCarousel key={index} label={label} method={method} />
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
    margin: "10%",
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "grey",
    borderStyle: "dashed",
    marginVertical: 10,
  },
});
