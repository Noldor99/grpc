import { Injectable } from '@nestjs/common';
import { CreatePawerDto } from './dto/create-pawer.dto';
import { UpdatePawerDto } from './dto/update-pawer.dto';

@Injectable()
export class PawerService {
  create(createPawerDto: CreatePawerDto) {
    return 'This action adds a new pawer';
  }

  findAll() {
    return `This action returns all pawer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pawer`;
  }

  update(id: number, updatePawerDto: UpdatePawerDto) {
    return `This action updates a #${id} pawer`;
  }

  remove(id: number) {
    return `This action removes a #${id} pawer`;
  }
}
