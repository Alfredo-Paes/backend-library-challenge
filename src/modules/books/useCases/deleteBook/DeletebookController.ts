import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteBookUseCase } from './DeleteBookUseCase';

class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBookUseCase = container.resolve(DeleteBookUseCase);
    const deleteBook = await deleteBookUseCase.execute(id);

    return response.status(200).json(deleteBook);
  }
}

export { DeleteBookController };
