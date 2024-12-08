import AsyncStorage from "@react-native-async-storage/async-storage";

const token = {
	getToken: async function () {
		return await AsyncStorage.getItem("token");
		return undefined;
	},
	setToken: async function (token) {
		AsyncStorage.setItem("token", token);
	},
};

const username = {
	getUsername: async function () {
		return await AsyncStorage.getItem("username");
	},
	setUsername: async function (username) {
		AsyncStorage.setItem("username", username);
	},
};

const Storage = {
	token,
	username,
};

export default Storage;