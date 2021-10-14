import { Books } from '../../entities/Books';
import { ICreateBookDTO } from '../IBooksRepository';

class BooksRepository {
  private books: Books[];

  private static INSTANCE: BooksRepository;

  private constructor() {
    this.books = [];
  }

  public static getInstance(): BooksRepository {
    if (!BooksRepository.INSTANCE) {
      BooksRepository.INSTANCE = new BooksRepository();
    }

    return BooksRepository.INSTANCE;
  }

  createBooks({
    title,
    publishing_company,
    authors,
    picture,
  }: ICreateBookDTO): Books {
    const books = new Books();

    Object.assign(books, {
      title,
      publishing_company,
      authors,
      picture,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.books.push(books);

    return books;
  }

  findByTitle(title: string): Books {
    const book = this.books.find(titleBook => titleBook.title === title);

    return book;
  }

  findById(id: string): Books {
    const bookId = this.books.find(bookId => bookId.id === id);

    return bookId;
  }

  listBooks(): Books[] {
    return this.books;
  }
}

export { BooksRepository };
