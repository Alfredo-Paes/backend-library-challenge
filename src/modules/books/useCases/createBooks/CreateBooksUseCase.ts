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
    const bookAlreadyRegistered = this.booksRepository.findByTitle(title);

    if (bookAlreadyRegistered) {
      throw new Error('This book is already registered!');
    }

    const user = this.booksRepository.createBooks({
      title,
      publishing_company,
      picture,
      authors,
    });

    return user;
  }
}

export { CreateBooksUseCase };
