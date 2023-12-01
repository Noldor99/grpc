import { PartialType } from '@nestjs/mapped-types';
import { CreatePawerDto } from './create-pawer.dto';

export class UpdatePawerDto extends PartialType(CreatePawerDto) {
  id: number;
}
