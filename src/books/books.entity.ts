import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
// Book fordi den er en entity, som skal gemmes i databasen pog derfor ikke Books
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  author: string;

  @Column('int')
  year: number;
}
