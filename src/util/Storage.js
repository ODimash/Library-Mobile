import AsyncStorage from "@react-native-async-storage/async-storage";

const token = {
	getToken: async function () {
		return await AsyncStorage.getItem("token");
	},
	setToken: async function (token) {
		AsyncStorage.setItem("token", token);
	},
	removeToken: async function () {
		AsyncStorage.removeItem("token");
	},
};

const username = {
	getUsername: async function () {
		return await AsyncStorage.getItem("username");
	},
	setUsername: async function (username) {
		AsyncStorage.setItem("username", username);
	},
	removeUsername: async function () {
		AsyncStorage.removeItem("username");
	},
};

const Storage = {
	token,
	username,
};

export default Storage;
