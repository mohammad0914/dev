import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MATH_SERVICE } from './math.constants';

@Controller()
export class MessageController {

   @MessagePattern(  'sum1' )
  sum1(data: number[]): number {
    return (data || []).reduce((a, b) => a * b);
  }

  @EventPattern('user_created')
async handleUserCreated(data: Record<string, unknown>) {
  // business logic
  console.log('event raised...');
}
}