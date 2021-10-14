import { container } from 'tsyringe';
import { BooksRepository } from '../../modules/books/repositories/implementations/BooksRepository';
import { IBooksRepository } from '../../modules/books/repositories/IBooksRepository';

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository,
);
