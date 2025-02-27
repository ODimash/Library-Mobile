import { sendFileRequest } from "./Request";

const UploadAPI = {
	uploadBookCover: async function (bookId, file) {
		const formData = new FormData();
		formData.append("File", file, "Screenshot_1732604333.png"); // указываем имя файла
		return await sendFileRequest("POST", `/api/upload/book-cover/${bookId}`, null, formData);
	},
	uploadBookContext: async function (bookId, file) {
		const formData = new FormData();
		formData.append("File", file, "book.epub");
		return await sendFileRequest("POST", `/api/upload/book-context/${bookId}`, null, formData);
	},
	uploadUserPhoto: async function (userId, file) {
		const formData = new FormData();
		formData.append("File", file, "userphoto.jpg");
		return await sendFileRequest("POST", `/api/upload/user-photo/${userId}`, null, formData);
	},
};
