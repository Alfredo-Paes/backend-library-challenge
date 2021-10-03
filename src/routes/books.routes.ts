import { Router } from 'express';
import { createBooksController } from '../modules/books/useCases/createBooks';

const booksRoutes = Router();

booksRoutes.post('/', (request, response) =>
  createBooksController.handle(request, response),
);

export { booksRoutes };
