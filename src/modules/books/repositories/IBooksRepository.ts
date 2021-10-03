import { Books } from '../model/Books';

interface ICreateBookDTO {
  title: string;

  publishing_company: string;

  picture: string;

  authors: string;
}

interface IBooksRepository {
  createBooks({
    title,
    publishing_company,
    picture,
    authors,
  }: ICreateBookDTO): void;

  findByTitle(title: string): Books;

  findById(id: string): Books;

  listBooks(): Books[];
}

export { ICreateBookDTO, IBooksRepository };
