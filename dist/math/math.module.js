"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const math_constants_1 = require("./math.constants");
const math_controller_1 = require("./math.controller");
const message_controller_1 = require("./message.controller");
let MathModule = class MathModule {
};
exports.MathModule = MathModule;
exports.MathModule = MathModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([{ name: 'MATH_SERVICE1', transport: microservices_1.Transport.TCP }]),
            microservices_1.ClientsModule.register([{ name: math_constants_1.MATH_SERVICE, transport: microservices_1.Transport.TCP }])
        ],
        controllers: [math_controller_1.MathController, message_controller_1.MessageController],
    })
], MathModule);
//# sourceMappingURL=math.module.js.map