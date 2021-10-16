import { getRepository, Repository } from 'typeorm';
import { Books } from '../../entities/Books';
import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';
import { IBooksRepository } from '../IBooksRepository';
import { IUpdateBookDTO } from '../../dtos/IUpdateBookDTO';

class BooksRepository implements IBooksRepository {
  private repository: Repository<Books>;

  constructor() {
    this.repository = getRepository(Books);
  }

  async createBooks({
    id,
    title,
    publishing_company,
    authors,
    picture,
  }: ICreateBookDTO): Promise<Books> {
    const book = this.repository.create({
      id,
      title,
      publishing_company,
      authors,
      picture,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await this.repository.save(book);
    return book;
  }

  async findByTitle(title: string): Promise<Books> {
    const book = await this.repository.findOne({ title });

    return book;
  }

  async findById(id: string): Promise<Books> {
    const book_id = await this.repository.findOne(id);

    return book_id;
  }

  async listBooks(): Promise<Books[]> {
    const books = await this.repository.find();

    return books;
  }

  async updateBooks(
    id: string,
    { title, publishing_company, picture, authors }: IUpdateBookDTO,
  ): Promise<Books> {
    const updatedBook = await this.repository
      .createQueryBuilder('books')
      .update<Books>(Books, { title, publishing_company, picture, authors })
      .where('books.id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute();
    return updatedBook.raw[0];
  }
}

export { BooksRepository };
