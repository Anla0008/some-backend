import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

// export class CreateBookDto {
//   title!: string;
//   author!: string;
//   year!: number;
// }

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  @Min(1450)
  year: number;
}
