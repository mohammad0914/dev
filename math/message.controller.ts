import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MATH_SERVICE } from './math.constants';

@Controller()
export class MessageController {
 
   @MessagePattern(  'sum1' )
  sum1(data: number[]): number {
    return (data || []).reduce((a, b) => a * b);
  }
}