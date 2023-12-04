import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
  @ApiProperty({ example: 'Phone', description: 'Name of the type' })
  name: string;
}
