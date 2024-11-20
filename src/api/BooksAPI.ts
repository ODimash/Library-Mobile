import { Book } from "../entity/Book";
import { Genre } from "../entity/Genre";

export class BooksAPI {
  private api: string = 'books';

  async getMostReadBooks(): Promise<Book[]> {
    return this.bookList;
  }

  async findBooks(text: string): Promise<Book[]> {
    return this.bookList;
  }

  private cover = "https://th.bing.com/th/id/R.c86fe9402743aa0989ae90568583ca4d?rik=4BazLvpzTVeI5A&pid=ImgRaw&r=0";

  private bookList: Book[] = [
    { id: "1", title: "Title", author: "Author Authorov", genre: Genre.ACTION, bookCover: this.cover, rating: 5 },
    { id: "2", title: "Title", author: "Author Authorov", genre: Genre.FANTASY, bookCover: this.cover, rating: 5 },
    { id: "3", title: "Title", author: "Author Authorov", genre: Genre.ACTION, bookCover: this.cover, rating: 5 },
    { id: "4", title: "Title", author: "Author Authorov", genre: Genre.HORROR, bookCover: this.cover, rating: 5 },
    { id: "5", title: "Title", author: "Author Authorov", genre: Genre.MYSTERY, bookCover: this.cover, rating: 5 },
    { id: "6", title: "Title", author: "Author Authorov", genre: Genre.ROMANCE, bookCover: this.cover, rating: 5 },
    { id: "7", title: "Title", author: "Author Authorov", genre: Genre.ACTION, bookCover: this.cover, rating: 5 },
  ];
}
