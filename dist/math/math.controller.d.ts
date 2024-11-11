import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class MathController {
    private readonly client;
    private readonly client2;
    constructor(client: ClientProxy, client2: ClientProxy);
    execute(): Observable<number>;
    execut1(): Observable<number>;
    execute2(): Observable<number>;
    sum(data: number[]): number;
}
