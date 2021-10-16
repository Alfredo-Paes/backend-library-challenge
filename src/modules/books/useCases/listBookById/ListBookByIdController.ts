import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBookByIdUseCase } from './ListBookByIdUseCase';

class ListBookByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const listBookUseCase = container.resolve(ListBookByIdUseCase);
      const listBook = await listBookUseCase.execute(id);

      return response.status(200).json(listBook);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListBookByIdController };
