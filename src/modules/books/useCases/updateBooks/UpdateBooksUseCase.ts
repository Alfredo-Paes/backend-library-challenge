import { inject, injectable } from 'tsyringe';
import { Books } from '../../entities/Books';
import { IBooksRepository } from '../../repositories/IBooksRepository';
import { IUpdateBookDTO } from '../../dtos/IUpdateBookDTO';

@injectable()
class UpdateBooksUseCase {
  private booksRepository: IBooksRepository;

  constructor(
    @inject('BooksRepository')
    booksRepository: IBooksRepository,
  ) {
    this.booksRepository = booksRepository;
  }

  async execute(
    id: string,
    { title, publishing_company, picture, authors }: IUpdateBookDTO,
  ): Promise<Books> {
    const book = await this.booksRepository.updateBooks(id, {
      title,
      publishing_company,
      picture,
      authors,
    });
    return book;
  }
}

export { UpdateBooksUseCase };
