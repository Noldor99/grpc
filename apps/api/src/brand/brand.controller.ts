import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() name: CreateBrandDto) {
    return this.brandService.create(name);
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return this.brandService.getBrandById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
