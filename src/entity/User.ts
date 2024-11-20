export class User {
  id: string;
  name: string;
  email: string;
  readingSessionsId: number[];
  statistic: UserStatistic;

  constructor(id: string, name: string, email: string, readingSessionId: number[], statistic: UserStatistic) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.readingSessionsId = readingSessionId;
    this.statistic = statistic;
  }
}

interface UserStatistic {
  booksRead: number;
  readingTime: number;
  favoriteGenre: string;
  pagesRead: number;
}
