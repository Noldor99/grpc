import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('type')
@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  create(@Body() name: CreateTypeDto) {
    return this.typeService.create(name);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.typeService.remove(+id);
  }
}
