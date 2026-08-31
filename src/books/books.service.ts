import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}
  // create(dto: CreateBookDto) {
  //   const book = { id: String(this.books.length + 1), ...dto };
  //   this.books.push(book);
  //   return book;
  // }
  // private books: Array<CreateBookDto & { id: string }> = [
  //   {
  //     id: '1',
  //     title: 'Dune',
  //     author: 'Frank Herbert',
  //     year: 1965,
  //   },
  //   {
  //     id: '2',
  //     title: 'The Hobbit',
  //     author: 'J.R.R. Tolkein',
  //     year: 1937,
  //   },
  // ];
  findAll() {
    return this.repo.find();
  }
  // findOne kaster en 'NotFoundException' hvis bogen ikke findes.
  async findOne(id: string) {
    const b = await this.repo.findOneBy({ id });
    if (!b) throw new NotFoundException();
    return b;
  }

  create(dto: CreateBookDto) {
    return this.repo.save(dto);
  }

  async update(id, dto: UpdateBookDto) {
    await this.findOne(id);
    return this.repo.save({ id, ...dto });
  }

  remove(id: string) {
    return this.repo.delete({ id });
  }

  // Update(id: string, dto: UpdateBookDto) {
  //   const book = this.findOne(id); //Kaster 404 hvis den ikke findes
  //   Object.assign(book, dto); // "Skriver" de nye felter ind i bogen
  //   return book;
  // }
}
