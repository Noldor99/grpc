import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({ example: 'Phone', description: 'Name of the device' })
  name: string;

  @ApiProperty({ example: 999, description: 'Price of the device' })
  price: number;

  @ApiProperty({ example: 4, description: 'Rating of the device' })
  rating: number;

  @ApiProperty({
    example: 1,
    description: 'Brand of the device',
  })
  brandId: number;

  @ApiProperty({
    example: 1,
    description: 'Type of the device',
  })
  typeId: number;
}
