import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/books.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot({ isGlobal: true }),

    // Dette gør at vi kan bruge TypeORM i vores projekt.
    // Vi fortæller den hvilken database vi vil bruge, og hvor den er.
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'books',
      entities: [Book],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
