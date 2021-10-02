interface ICreateBookDTO {
  title: string;

  publishing_company: string;

  picture: string;

  authors: string;
}

interface IBooksRepository {
  createBook({
    title,
    publishing_company,
    picture,
    authors,
  }: ICreateBookDTO): void;
}

export { ICreateBookDTO, IBooksRepository };
