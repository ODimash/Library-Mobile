import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchHeader({ setValue }) {
  const textInputRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AntDesign name="search1" size={24} color="gray" />
        <TextInput
          ref={textInputRef}
          onEndEditing={(e) => setValue(e.nativeEvent.text)}
          style={styles.searchBar}
          placeholder="Search"
        />
        <TouchableOpacity onPress={clearInput}>
          <AntDesign name="closecircle" size={24} color="silver" />
        </TouchableOpacity>
      </View>
    </View>
  );

  function clearInput() {
    setValue("");
    textInputRef.current.clear();
    console.log("Clear button was pressed");
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    paddingVertical: 6,
    marginBottom: 10,
		marginHorizontal: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
  },
	container: {
		justifyContent: 'flex-end',
		backgroundColor: '#fff',
		elevation: 2,
	}
});
