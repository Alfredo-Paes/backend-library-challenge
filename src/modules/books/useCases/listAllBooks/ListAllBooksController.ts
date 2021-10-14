import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllBooksUseCase } from './ListAllBooksUseCase';

class ListAllBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllBooksUseCase = container.resolve(ListAllBooksUseCase);
      const listAllBooks = await listAllBooksUseCase.execute();

      return response.status(200).json(listAllBooks);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllBooksController };
