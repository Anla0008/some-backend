// export class UpdateBookDto {
//   title?: string;
//   author?: string;
//   year?: string;
// }

import { CreateBookDto } from './create-book.dto';
export class UpdateBookDto extends CreateBookDto {}
