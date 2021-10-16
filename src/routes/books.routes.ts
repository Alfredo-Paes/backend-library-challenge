import { Router } from 'express';
import { CreateBookController } from '../modules/books/useCases/createBooks/CreateBooksController';
import { ListAllBooksController } from '../modules/books/useCases/listAllBooks/ListAllBooksController';
import { ListBookByIdController } from '../modules/books/useCases/listBookById/ListBookByIdController';
import { UpdateBooksController } from '../modules/books/useCases/updateBooks/UpdateBooksController';
import { DeleteBookController } from '../modules/books/useCases/deleteBook/DeletebookController';

const booksRoutes = Router();

const createBooksController = new CreateBookController();
const listAllBooksController = new ListAllBooksController();
const listBookByIdController = new ListBookByIdController();
const updateBooksController = new UpdateBooksController();
const deleteBookController = new DeleteBookController();

booksRoutes.post('/', createBooksController.handle);

booksRoutes.get('/', listAllBooksController.handle);

booksRoutes.get('/:id', listBookByIdController.handle);

booksRoutes.put('/:id', updateBooksController.handle);

booksRoutes.delete('/:id', deleteBookController.handle);

export { booksRoutes };
