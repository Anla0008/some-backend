import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';

@Injectable()
export class BooksService {
  create(dto: CreateBookDto) {
    const book = { id: String(this.books.length + 1), ...dto };
    this.books.push(book);
    return book;
  }
  private books: Array<CreateBookDto & { id: string }> = [
    {
      id: '1',
      title: 'Dune',
      author: 'Frank Herbert',
      year: 1965,
    },
  ];
  findAll() {
    return this.books;
  }
  findOne(id: string) {
    const b = this.books.find((x) => x.id === id);
    if (!b) throw new NotFoundException();
    return b;
  }

  remove(id: string) {
    this.books = this.books.filter((x) => x.id !== id);
  }
}
