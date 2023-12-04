import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { DEVICE_PACKAGE_NAME } from '@app/common/types/device';

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
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
