import { logger, consoleTransport, fileAsyncTransport } from "react-native-logs";
//   import RNFS from "react-native-fs";

const Logger = logger.createLogger({
	transport: __DEV__ ? consoleTransport : null,
	severity: __DEV__ ? "debug" : "info",
	transportOptions: {
		colors: {
			info: "blueBright",
			warn: "yellowBright",
			error: "redBright",
			debug: "default",
		},
		extensionColors: {
			fetch: "magenta",
			ROOT: "pink",
			console: "grey",
			service: "green",
		},
		// FS: RNFS,
		// fileName: `log_{date_today}.txt`
	},
});

Logger.patchConsole();

export default Logger;
