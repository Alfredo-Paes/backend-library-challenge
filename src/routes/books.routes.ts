import { request, Router } from 'express';
import { createBooksController } from '../modules/books/useCases/createBooks';
import { listAllBooksController } from '../modules/books/useCases/listAllBooks';

const booksRoutes = Router();

booksRoutes.post('/', (request, response) =>
  createBooksController.handle(request, response),
);

booksRoutes.get('/', (request, response) =>
  listAllBooksController.handle(request, response),
);

export { booksRoutes };
