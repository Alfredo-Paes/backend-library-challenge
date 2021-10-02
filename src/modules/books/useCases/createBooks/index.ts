import { BooksRepository } from '../../repositories/implementations/BooksRepository';
import { CreateBookController } from './CreateBooksController';
import { CreateBooksUseCase } from './CreateBooksUseCase';

const booksRepository = BooksRepository.getInstance();

const createBooksUseCase = new CreateBooksUseCase(booksRepository);

const createBooksController = new CreateBookController(createBooksUseCase);

export { createBooksController };
