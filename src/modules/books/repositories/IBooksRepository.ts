import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
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
}

export { ICreateBookDTO, IBooksRepository };
