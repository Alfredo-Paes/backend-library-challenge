import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Books } from '../../entities/Books';
import { IBooksRepository } from '../../repositories/IBooksRepository';

@injectable()
class DeleteBookUseCase {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.booksRepository = booksRepository;
  }

  async execute(id: string): Promise<Books> {
    const findBook = await this.booksRepository.findById(id);

    if (!findBook) {
      throw new AppError('Book not found!', 404);
    }

    const book = await this.booksRepository.deleteBook(id);

    return book;
  }
}

export { DeleteBookUseCase };
