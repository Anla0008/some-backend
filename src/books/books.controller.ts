import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

// @Body er en decorator der gør at jeg kan få fat i bodyen fra requesten.
// @Param er en decorator der gør at jeg kan få fat i parametrene fra requesten.

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
  @Put(':id')
  Update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.books.Update(id, dto);
  }
}
