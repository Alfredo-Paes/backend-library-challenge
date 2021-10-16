import { inject, injectable } from 'tsyringe';
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

    if (!listBook.id) {
      throw new Error('Book not found!');
    }

    return listBook;
  }
}

export { ListBookByIdUseCase };
