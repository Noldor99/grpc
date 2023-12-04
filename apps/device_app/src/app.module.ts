import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { DeviceModule } from './device/device.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [DeviceModule, TypeModule, BrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
