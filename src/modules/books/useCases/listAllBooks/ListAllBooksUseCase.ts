import { Books } from '../../entities/Books';
import { IBooksRepository } from '../../repositories/IBooksRepository';

class ListAllBooksUseCase {
  private booksRepository: IBooksRepository;

  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository;
  }

  execute(): Books[] {
    const allBooks = this.booksRepository.listBooks();

    return allBooks;
  }
}

export { ListAllBooksUseCase };
