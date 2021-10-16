import { inject, injectable } from 'tsyringe';
import { Books } from '../../entities/Books';
import { ICreateBookDTO } from '../../dtos/ICreateBookDTO';
import { IBooksRepository } from '../../repositories/IBooksRepository';

@injectable()
class CreateBooksUseCase {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.booksRepository = booksRepository;
  }

  async execute({
    id,
    title,
    publishing_company,
    picture,
    authors,
  }: ICreateBookDTO): Promise<Books> {
    const bookAlreadyRegistered = await this.booksRepository.findByTitle(title);

    if (bookAlreadyRegistered) {
      throw new Error('This book is already registered!');
    }

    const book = await this.booksRepository.createBooks({
      id,
      title,
      publishing_company,
      picture,
      authors,
    });

    return book;
  }
}

export { CreateBooksUseCase };
