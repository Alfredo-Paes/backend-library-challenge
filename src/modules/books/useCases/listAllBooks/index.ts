import { BooksRepository } from '../../repositories/implementations/BooksRepository';
import { ListAllBooksUseCase } from './ListAllBooksUseCase';
import { ListAllBooksController } from './ListAllBooksController';

const booksRepository = BooksRepository.getInstance();
const listAllBooksUseCase = new ListAllBooksUseCase(booksRepository);
const listAllBooksController = new ListAllBooksController(listAllBooksUseCase);

export { listAllBooksController };
