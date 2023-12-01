import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PawerService } from './pawer.service';
import { CreatePawerDto } from './dto/create-pawer.dto';
import { UpdatePawerDto } from './dto/update-pawer.dto';

@Controller()
export class PawerController {
  constructor(private readonly pawerService: PawerService) {}

  @MessagePattern('createPawer')
  create(@Payload() createPawerDto: CreatePawerDto) {
    return this.pawerService.create(createPawerDto);
  }

  @MessagePattern('findAllPawer')
  findAll() {
    return this.pawerService.findAll();
  }

  @MessagePattern('findOnePawer')
  findOne(@Payload() id: number) {
    return this.pawerService.findOne(id);
  }

  @MessagePattern('updatePawer')
  update(@Payload() updatePawerDto: UpdatePawerDto) {
    return this.pawerService.update(updatePawerDto.id, updatePawerDto);
  }

  @MessagePattern('removePawer')
  remove(@Payload() id: number) {
    return this.pawerService.remove(id);
  }
}
