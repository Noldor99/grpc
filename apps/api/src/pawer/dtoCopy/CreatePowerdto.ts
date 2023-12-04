import { ApiProperty } from '@nestjs/swagger';

export class CreatePowerdto {
  @ApiProperty({ example: 'Some power value', description: 'The power value' })
  power: string;
}
