import {UserInfo} from "../entity/UserInfo";
import 'reflect-metadata';
import {inject, injectable} from "inversify";
import {HttpClient} from "../api/HttpClient";
import TYPE from "@/components/common/Type";
import {ResponseBody} from "@/components/common/ResponseBody";
import {TemplateInfo} from "@/components/entity/TemplateInfo";


@injectable()
export class BusinessService {
    username?: String;
    httpClient: HttpClient;
    constructor(@inject(TYPE.HttpClient) httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * 获取用户信息
     * @param data
     */
    getUserInfo(data:any): Promise<UserInfo> {
        return this.httpClient.postToken(data);
    }

    getTemplateInfo(data:any, token:String): Promise<ResponseBody<TemplateInfo[]>> {
        return this.httpClient.getTemplate(data, token)
    }

    protected protectedTest(){
        return "测试是否能访问 protected方法"
    }

}