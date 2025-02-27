import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Image } from "react-native";
import React, { useState } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { Genre } from "../entity/Genre";
import { Picker } from "@react-native-picker/picker";
import BookAPI from "../api/BooksAPI";
// import { Toast } from "react-native-toast-notifications";
import { launchImageLibrary } from "react-native-image-picker"; // для загрузки изображения
// import DocumentPicker from "react-native-document-picker"; // для загрузки файла
import UploadAPI from "../api/UploadAPI"; // предположим, что у вас есть этот API файл

export default function AddBookPage() {
	const genres = [Genre.ACTION, Genre.FANTASY, Genre.HISTORICAL, Genre.HORROR, Genre.MYSTERY, Genre.ROMANCE];
	const [genre, setGenre] = useState(0);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [bookCover, setBookCover] = useState(null); // для хранения обложки
	const [bookContext, setBookContext] = useState(null); // для хранения контекста книги (файла)

	return (
		<ScrollView contentContainerStyle={styles.page}>
			<Text style={styles.title}>Заполните данные о книге</Text>
			<View style={styles.formContainer}>
				<TextInput
					label={"Название книги"}
					value={title}
					onChangeText={setTitle}
					mode='outlined'
					activeOutlineColor='#6c3007'
					style={styles.input}
				/>
				<TextInput
					label={"ФИО автора"}
					value={author}
					onChangeText={setAuthor}
					mode='outlined'
					activeOutlineColor='#6c3007'
					style={styles.input}
				/>
				<TextInput
					label={"Описание книги"}
					mode='outlined'
					activeOutlineColor='#6c3007'
					value={description}
					onChangeText={setDescription}
					style={[styles.input, { height: 150 }]}
					right={<TextInput.Affix text={`${description.length}/128`} />}
					multiline={true}
				/>
				<Text style={{ marginTop: 20 }}>Выберите жанр</Text>
				<Picker
					selectedValue={genres[genre]}
					onValueChange={(_, index) => setGenre(index)}
					mode='dropdown'
					style={styles.genrePicker}>
					{genres.map((genre, index) => (
						<Picker.Item key={index} label={genre} value={genre} />
					))}
				</Picker>
			</View>

			<Button title='Выбрать обложку книги' onPress={handleChooseBookCover} />
			{bookCover && <Image source={{ uri: bookCover.uri }} style={styles.image} />}

			<Button title='Выбрать контекст книги (файл)' onPress={handleChooseBookContext} />
			{bookContext && <Text>Файл выбран: {bookContext.name}</Text>}

			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				{loading ? <ActivityIndicator color='#fff' /> : <Text style={styles.buttonText}>Продолжить</Text>}
			</TouchableOpacity>
		</ScrollView>
	);

	async function handleSubmit() {
		setLoading(true);
		const book = {
			"title": title,
			"author": author,
			"description": description,
			"publishedDate": new Date().toISOString(),
			"contextPath": "",
			"coverPath": "",
			"ratingCount": 0,
			"rating": 0,
			"ganre": genres[genre],
		};
		try {
			const createdBook = await BookAPI.createBook(book);
			console.log("created book: ", createdBook);

			if (bookCover) {
				await UploadAPI.uploadBookCover(createdBook.id, bookCover);
			}
			if (bookContext) {
				await UploadAPI.uploadBookContext(createdBook.id, bookContext);
			}

			Toast.show("Книга успешно создана!");
		} catch (error) {
			Toast.show("Не удалось создать книгу, проверьте данные");
		} finally {
			setLoading(false);
		}
	}

	function handleChooseBookCover() {
		launchImageLibrary({ mediaType: "photo", quality: 0.5 }, (response) => {
			if (response.didCancel) {
				console.log("User cancelled image picker");
			} else if (response.errorCode) {
				console.log("ImagePicker Error: ", response.errorMessage);
			} else {
				setBookCover(response.assets[0]); // сохраняем объект с информацией о файле
			}
		});
	}

	async function handleChooseBookContext() {
		try {
			const res = await DocumentPicker.pick({
				type: [DocumentPicker.types.allFiles],
			});
			setBookContext(res[0]); // сохраняем объект с информацией о файле
		} catch (err) {
			if (DocumentPicker.isCancel(err)) {
				console.log("User cancelled document picker");
			} else {
				console.error("DocumentPicker Error: ", err);
			}
		}
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		margin: 30,
		fontWeight: "300",
	},
	formContainer: {
		marginHorizontal: 30,
		gap: 10,
	},
	genrePicker: {
		backgroundColor: "#fff",
		borderRadius: 10,
		elevation: 4,
	},
	input: {
		elevation: 4,
	},
	button: {
		backgroundColor: "#d3b27c",
		padding: 20,
		margin: 50,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
	image: {
		width: 100,
		height: 100,
		marginTop: 16,
	},
});
