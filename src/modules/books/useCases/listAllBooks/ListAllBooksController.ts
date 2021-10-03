import { Request, Response } from 'express';

import { ListAllBooksUseCase } from './ListAllBooksUseCase';

class ListAllBooksController {
  private listAllBooksUseCase: ListAllBooksUseCase;

  constructor(listAllBooksUseCase: ListAllBooksUseCase) {
    this.listAllBooksUseCase = listAllBooksUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const listAllBooks = this.listAllBooksUseCase.execute();

      return response.status(200).json(listAllBooks);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllBooksController };
