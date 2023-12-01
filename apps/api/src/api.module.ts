import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { PawerModule } from './pawer/pawer.module';

@Module({
  imports: [PawerModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
