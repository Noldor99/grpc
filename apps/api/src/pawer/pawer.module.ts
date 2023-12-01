import { Module } from '@nestjs/common';
import { PawerService } from './pawer.service';
import { PawerController } from './pawer.controller';

@Module({
  controllers: [PawerController],
  providers: [PawerService],
})
export class PawerModule {}
