import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  // private books gør så jeg kun skal skrive .books i stedet for .booksService.books
  constructor(private books: BooksService) {}
  @Get()
  findAll() {
    return this.books.findAll();
  }
  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.books.create(dto);
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.books.remove(id);
  }
}
