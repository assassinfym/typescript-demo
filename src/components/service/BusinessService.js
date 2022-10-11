var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import 'reflect-metadata';
import { inject, injectable } from "inversify";
import TYPE from "@/components/common/Type";
let BusinessService = class BusinessService {
    username;
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * 获取用户信息
     * @param data
     */
    getUserInfo(data) {
        return this.httpClient.postToken(data);
    }
    getTemplateInfo(data, token) {
        return this.httpClient.getTemplate(data, token);
    }
    protectedTest() {
        return "测试是否能访问 protected方法";
    }
};
BusinessService = __decorate([
    injectable(),
    __param(0, inject(TYPE.HttpClient))
], BusinessService);
export { BusinessService };
//# sourceMappingURL=BusinessService.js.map