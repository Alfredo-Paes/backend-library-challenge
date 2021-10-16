import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteBookUseCase } from './DeleteBookUseCase';

class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const deleteBookUseCase = container.resolve(DeleteBookUseCase);
      const deleteBook = await deleteBookUseCase.execute(id);

      return response.status(200).json(deleteBook);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteBookController };
