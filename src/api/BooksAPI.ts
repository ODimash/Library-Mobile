import { Book } from "../entity/Book";
import { Genre } from "../entity/Genre";

export class BooksAPI {
    private api: string;

    async getMostReadBooks(): Promise<Array<Book>> {
        var bookCoverURI = 'https://th.bing.com/th/id/R.c86fe9402743aa0989ae90568583ca4d?rik=4BazLvpzTVeI5A&pid=ImgRaw&r=0';
        var books: Array<Book> = [
            { id: '1', title: 'Title', author: "Author Authorov", genre: Genre.ACTION, bookCover: bookCoverURI, rating: 5 },
            { id: '2', title: 'Title', author: "Author Authorov", genre: Genre.FANTASY, bookCover: bookCoverURI, rating: 5 },
            { id: '3', title: 'Title', author: "Author Authorov", genre: Genre.HISTORICAL, bookCover: bookCoverURI , rating: 5},
            { id: '4', title: 'Title', author: "Author Authorov", genre: Genre.HORROR, bookCover: bookCoverURI, rating: 5 },
            { id: '5', title: 'Title', author: "Author Authorov", genre: Genre.MYSTERY, bookCover: bookCoverURI , rating: 5},
            { id: '6', title: 'Title', author: "Author Authorov", genre: Genre.ROMANCE, bookCover: bookCoverURI , rating: 5},
            { id: '7', title: 'Title', author: "Author Authorov", genre: Genre.ACTION, bookCover: bookCoverURI, rating: 5 },
        ]
        return books;
    }
}
