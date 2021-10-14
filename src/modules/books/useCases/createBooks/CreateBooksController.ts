import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateBooksUseCase } from './CreateBooksUseCase';

class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, publishing_company, picture, authors } = request.body;
      const createBooksUseCase = container.resolve(CreateBooksUseCase);
      const bookCreated = await createBooksUseCase.execute({
        title,
        publishing_company,
        authors,
        picture,
      });

      return response.status(201).json(bookCreated);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateBookController };
