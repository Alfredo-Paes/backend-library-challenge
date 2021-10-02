import { Books } from '../../model/Books';
import { ICreateBookDTO } from '../IBooksRepository';

class BooksRepository {
  private books: Books[];

  private constructor() {
    this.books = [];
  }

  createBooks({
    title,
    publishing_company,
    authors,
    picture,
  }: ICreateBookDTO): void {
    const books = new Books();

    Object.assign(books, {
      title,
      publishing_company,
      authors,
      picture,
      created_at: new Date(),
    });

    this.books.push(books);
  }
}

export { BooksRepository };
