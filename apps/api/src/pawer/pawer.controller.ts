import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePowerdto } from './dtoCopy/CreatePowerdto';

import { PawerService } from './pawer.service';

@ApiTags('power')
@Controller('power')
export class PawerController {
  constructor(private readonly pawerService: PawerService) {}

  @Post()
  create(@Body() createPawerDto: CreatePowerdto) {
    return this.pawerService.create(createPawerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pawerService.remove(id);
  }
}
