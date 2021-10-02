import { IBooksRepository } from '../../repositories/IBooksRepository';

interface IRequest {
  title: string;

  publishing_company: string;

  picture: string;

  authors: string;
}

class CreateBooksUseCase {
  private booksRepository: IBooksRepository;

  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository;
  }

  execute({ title, publishing_company, picture, authors }: IRequest): void {
    this.booksRepository.createBooks({
      title,
      publishing_company,
      picture,
      authors,
    });
  }
}

export { CreateBooksUseCase };
