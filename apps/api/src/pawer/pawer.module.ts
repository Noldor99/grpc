import { Module } from '@nestjs/common';
import { PawerService } from './pawer.service';
import { PawerController } from './pawer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { POWER_PACKAGE_NAME } from '@app/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'power',
        transport: Transport.GRPC,
        options: {
          package: POWER_PACKAGE_NAME,
          protoPath: path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            'proto',
            'power.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [PawerController],
  providers: [PawerService],
})
export class PawerModule {}
