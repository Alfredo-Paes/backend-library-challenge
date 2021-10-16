import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Books } from '../../entities/Books';
import { IBooksRepository } from '../../repositories/IBooksRepository';

@injectable()
class ListAllBooksUseCase {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.booksRepository = booksRepository;
  }

  async execute(): Promise<Books[]> {
    const allBooks = await this.booksRepository.listBooks();

    if (allBooks.length === 0) {
      throw new AppError('Books not found!', 404);
    }

    return allBooks;
  }
}

export { ListAllBooksUseCase };
