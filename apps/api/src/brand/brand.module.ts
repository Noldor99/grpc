import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { DEVICE_PACKAGE_NAME } from '@app/common/types/device';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'device',
        transport: Transport.GRPC,
        options: {
          package: DEVICE_PACKAGE_NAME,
          protoPath: path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            'proto',
            'device.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
