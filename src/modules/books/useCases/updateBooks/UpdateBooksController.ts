import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateBooksUseCase } from './UpdateBooksUseCase';

class UpdateBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, publishing_company, picture, authors } = request.body;
    const updateBooksUseCase = await container.resolve(UpdateBooksUseCase);
    const bookUpdated = await updateBooksUseCase.execute(id, {
      title,
      publishing_company,
      picture,
      authors,
    });
    return response.status(201).json(bookUpdated);
  }
}

export { UpdateBooksController };
