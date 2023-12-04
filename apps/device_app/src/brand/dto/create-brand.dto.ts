import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({ example: 'Apple', description: 'Name of the brand' })
  name: string;
}
