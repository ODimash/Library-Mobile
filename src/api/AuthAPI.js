import Logger from "../util/logger";
import { sendRequest } from "./Request";

const API = "/api/Auth/";

const AuthAPI = {
	/** @param {{email: string, password: string}} loginData */
	login: async function (loginData) {
		Logger.debug("Login data:", loginData);
		return await sendRequest("POST", API + "login", null, loginData, false);
	},

	/** @param {{email: string, name: string password: string}} registerData */
	register: async function (registerData) {
		return await sendRequest("POST", API + "register", null, registerData, false);
	},
};

export default AuthAPI;
