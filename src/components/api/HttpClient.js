var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'reflect-metadata';
import { injectable } from "inversify";
import service from "@/components/common/Request";
let HttpClient = class HttpClient {
    constructor() {
    }
    postToken(data) {
        const getTokenUrl = "http://192.168.9.83:19013/auth//auth/oauth/login?encryptuserinfo=de8f51a8082c8f34cb47dd358d2e58064ed5526c1d0ccc236f46578a4a34cb78ec87eae0980e5d09212223c08749b44f&useValidateCode=false&ip=192.168.100.100";
        return service.getToken(getTokenUrl, data);
    }
    getTemplate(data, token) {
        service.getService().defaults.headers.common["X-Gisq-Token"] = "Bearer " + token;
        const getTemplateUrl = "http://192.168.9.83:19013/base/base/template/getAllTemplate";
        return service.get(getTemplateUrl, data);
    }
    getVideo(data, token) {
        service.getService().defaults.headers.common["X-Gisq-Token"] = "Bearer " + token;
        const getVideoUrl = "http://192.168.9.83:19013/base/video/findVideos";
        return service.get(getVideoUrl, data);
    }
};
HttpClient = __decorate([
    injectable()
], HttpClient);
export { HttpClient };
//# sourceMappingURL=HttpClient.js.map