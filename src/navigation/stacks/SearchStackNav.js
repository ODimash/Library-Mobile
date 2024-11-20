import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import SearchPage from "../../pages/SearchPage";
import SearchHeader from "../../component/headers/SearchHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SearchStackNav() {
  const [value, setValue] = useState(""); // value for search

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
				options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
