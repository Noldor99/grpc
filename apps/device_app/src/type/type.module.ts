import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { PrismaService } from 'apps/device_app/prisma.service';

@Module({
  imports: [],
  controllers: [TypeController],
  providers: [TypeService, PrismaService],
  exports: [TypeService],
})
export class TypeModule {}
