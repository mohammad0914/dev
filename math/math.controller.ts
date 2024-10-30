import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MATH_SERVICE } from './math.constants';

@Controller()
export class MathController {
  constructor(@Inject('MATH_SERVICE1') private readonly client: ClientProxy,
             @Inject(MATH_SERVICE) private readonly client2: ClientProxy
) {}

  @Get()
  execute(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const data = [1, 2, 3, 4, 5];
    return this.client2.send<number>(pattern, data);
  }

  @Get('/client1')
  execut1(): Observable<number> {
    const pattern =  'sum1' ;
    const data = [1, 2, 3, 4, 5, 6];
    return this.client2.send<number>(pattern, data);
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  // @MessagePattern(  'sum1' )
  // sum1(data: number[]): number {
  //   return (data || []).reduce((a, b) => a * b);
  // }
}