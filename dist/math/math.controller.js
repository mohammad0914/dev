"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const math_constants_1 = require("./math.constants");
let MathController = class MathController {
    constructor(client, client2) {
        this.client = client;
        this.client2 = client2;
    }
    execute() {
        const pattern = { cmd: 'sum' };
        const data = [1, 2, 3, 4, 5];
        return this.client2.send(pattern, data);
    }
    execut1() {
        const pattern = 'sum1';
        const data = [1, 2, 3, 4, 5, 6];
        return this.client2.send(pattern, data);
    }
    execute2() {
        const data = [1, 2, 3, 4, 5, 6];
        return this.client.emit('user_created', data);
    }
    sum(data) {
        return (data || []).reduce((a, b) => a + b);
    }
};
exports.MathController = MathController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MathController.prototype, "execute", null);
__decorate([
    (0, common_1.Get)('/client1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MathController.prototype, "execut1", null);
__decorate([
    (0, common_1.Get)('/event'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MathController.prototype, "execute2", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'sum' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], MathController.prototype, "sum", null);
exports.MathController = MathController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('MATH_SERVICE1')),
    __param(1, (0, common_1.Inject)(math_constants_1.MATH_SERVICE)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], MathController);
//# sourceMappingURL=math.controller.js.map