import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
import { IUpdateBookDTO } from '../dtos/IUpdateBookDTO';
import { Books } from '../entities/Books';

interface IBooksRepository {
  createBooks({
    title,
    publishing_company,
    picture,
    authors,
  }: ICreateBookDTO): Promise<Books>;

  findByTitle(title: string): Promise<Books>;

  findById(id: string): Promise<Books>;

  listBooks(): Promise<Books[]>;

  updateBooks(
    id: string,
    { title, publishing_company, picture, authors }: IUpdateBookDTO,
  ): Promise<Books>;

  deleteBook(id: string): Promise<Books>;
}

export { ICreateBookDTO, IBooksRepository };
