import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { DeviceModule } from './device/device.module';
import { PawerModule } from './pawer/pawer.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [PawerModule, DeviceModule, BrandModule, TypeModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
