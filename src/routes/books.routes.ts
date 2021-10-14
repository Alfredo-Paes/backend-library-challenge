import { Router } from 'express';
import { CreateBookController } from '../modules/books/useCases/createBooks/CreateBooksController';
import { ListAllBooksController } from '../modules/books/useCases/listAllBooks/ListAllBooksController';

const booksRoutes = Router();

const createBooksController = new CreateBookController();
const listAllBooksController = new ListAllBooksController();

booksRoutes.post('/', createBooksController.handle);

booksRoutes.get('/', listAllBooksController.handle);

export { booksRoutes };
