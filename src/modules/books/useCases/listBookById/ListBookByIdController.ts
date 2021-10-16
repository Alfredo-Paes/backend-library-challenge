import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBookByIdUseCase } from './ListBookByIdUseCase';

class ListBookByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listBookUseCase = container.resolve(ListBookByIdUseCase);
    const listBook = await listBookUseCase.execute(id);

    return response.status(200).json(listBook);
  }
}

export { ListBookByIdController };
