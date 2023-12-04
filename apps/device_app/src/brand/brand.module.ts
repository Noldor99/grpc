import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { PrismaService } from 'apps/device_app/prisma.service';
import { BrandService } from './brand.service';

@Module({
  imports: [],
  controllers: [BrandController],
  providers: [BrandService, PrismaService],
})
export class BrandModule {}
