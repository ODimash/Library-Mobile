import { Book } from "../entity/Book";
import { Ganre } from "../entity/Ganre";

export class BooksAPI {
    private api: string;

    async getMostReadedBooks(): Promise<Array<Book>> {
        var bookCoverURI = 'https://th.bing.com/th/id/R.c86fe9402743aa0989ae90568583ca4d?rik=4BazLvpzTVeI5A&pid=ImgRaw&r=0';
        var books: Array<Book> = [
            { id: '1', title: 'Title', author: "Author Authorov", ganre: Ganre.ACTION, bookCover: bookCoverURI, rating: 5 },
            { id: '2', title: 'Title', author: "Author Authorov", ganre: Ganre.FANTASY, bookCover: bookCoverURI, rating: 5 },
            { id: '3', title: 'Title', author: "Author Authorov", ganre: Ganre.HISTORICAL, bookCover: bookCoverURI , rating: 5},
            { id: '4', title: 'Title', author: "Author Authorov", ganre: Ganre.HORROR, bookCover: bookCoverURI, rating: 5 },
            { id: '5', title: 'Title', author: "Author Authorov", ganre: Ganre.MYSTERY, bookCover: bookCoverURI , rating: 5},
            { id: '6', title: 'Title', author: "Author Authorov", ganre: Ganre.ROMANCE, bookCover: bookCoverURI , rating: 5},
            { id: '7', title: 'Title', author: "Author Authorov", ganre: Ganre.ACTION, bookCover: bookCoverURI, rating: 5 },
        ]
        return books;
    }
}
