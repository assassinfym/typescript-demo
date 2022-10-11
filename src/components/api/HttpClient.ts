
import axios, {AxiosInstance, AxiosInterceptorManager, AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios";
import 'reflect-metadata';
import {injectable} from "inversify";
import {UserInfo} from "@/components/entity/UserInfo";
// @ts-ignore
import {ResponseBody} from "@/components/common/ResponseBody";
import service from "@/components/common/Request";
import {TemplateInfo} from "@/components/entity/TemplateInfo";
import {VideoInfo} from "@/components/entity/VideoInfo";


@injectable()
export class HttpClient {
    constructor() {
    }
    postToken(data: any): Promise<UserInfo>{
        const getTokenUrl = "http://192.168.9.83:19013/auth//auth/oauth/login?encryptuserinfo=de8f51a8082c8f34cb47dd358d2e58064ed5526c1d0ccc236f46578a4a34cb78ec87eae0980e5d09212223c08749b44f&useValidateCode=false&ip=192.168.100.100";
        return service.getToken(getTokenUrl, data);
    }
    getTemplate(data:any, token:String): Promise<ResponseBody<TemplateInfo[]>> {
        service.getService().defaults.headers.common["X-Gisq-Token"] = "Bearer " + token;
        const getTemplateUrl = "http://192.168.9.83:19013/base/base/template/getAllTemplate";
        return service.get(getTemplateUrl, data)
    }
    getVideo(data:any, token:String): Promise<ResponseBody<VideoInfo>> {
        service.getService().defaults.headers.common["X-Gisq-Token"] = "Bearer " + token;
        const getVideoUrl = "http://192.168.9.83:19013/base/video/findVideos";
        return service.get(getVideoUrl, data)
    }
}