import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Books } from '../../entities/Books';
import { IBooksRepository } from '../../repositories/IBooksRepository';

@injectable()
class ListBookByIdUseCase {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.booksRepository = booksRepository;
  }

  async execute(id: string): Promise<Books> {
    const listBook = await this.booksRepository.findById(id);

    if (!listBook) {
      throw new AppError('Book not found!', 404);
    }

    return listBook;
  }
}

export { ListBookByIdUseCase };
