import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MATH_SERVICE } from './math.constants';
import { MathController } from './math.controller';
import { MessageController } from './message.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'MATH_SERVICE1', transport: Transport.TCP }]),
    ClientsModule.register([{ name: MATH_SERVICE, transport: Transport.TCP }])
  ],
  controllers: [MathController, MessageController],
})
export class MathModule {}