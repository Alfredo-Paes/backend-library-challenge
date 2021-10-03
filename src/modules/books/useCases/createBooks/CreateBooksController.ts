import { Request, Response } from 'express';

import { CreateBooksUseCase } from './CreateBooksUseCase';

class CreateBookController {
  private createBooksUseCase: CreateBooksUseCase;

  constructor(createBooksUseCase: CreateBooksUseCase) {
    this.createBooksUseCase = createBooksUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const { title, publishing_company, picture, authors } = request.body;

      const bookCreated = this.createBooksUseCase.execute({
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
