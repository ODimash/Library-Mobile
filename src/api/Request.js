import Logger from "../util/logger";
import { SERVER_URL } from "../util/constants";
import Storage from "../util/Storage";

const logger = Logger.extend("fetch");

/**
 *
 * @param {string} method HTTP request type
 * @param {string} api endpoint
 * @param {Object} params request parameters
 * @param {Object} body request body
 * @returns {Promise<Object>}
 */
export async function sendRequest(method, api, params = null, body = null, auth = true) {
	try {
		const accessToken = auth ? await getAccessToken() : "";
		console.log("user access token:", accessToken);
		const url = addRequestParams(params, SERVER_URL + api);
		logger.info(`Request to ${url} was started`);
		const response = await fetching(url, method, accessToken, body);

		if (!response.ok) throw new Error(`Request to ${url} failed. Response code: ${response.status}`);

		// if (method != 'GET') return response;

		const data = await response.json();
		return data;
	} catch (error) {
		logger.error(`Failed to send request to URL ${api}:`, error);
	} finally {
		logger.info(`Executed request to API ${api} with params:`, params);
	}
}

async function fetching(url, method, accessToken, body) {
	const options = {
		method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	};

	if (body) options.body = JSON.stringify(body);

	return await fetch(url, options);
}

async function getAccessToken() {
	const accessToken = await Storage.token.getToken();
	if (!accessToken) throw new Error("Access token not found");
	return accessToken;
}

function addRequestParams(params, url) {
	if (params) {
		url += "?";
		Object.keys(params).map((key) => (params[key] != null ? (url += key + "=" + params[key] + "&") : ""));
		url = url.substring(0, url.length - 1);
	}
	return url;
}
