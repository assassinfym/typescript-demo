import {Table} from "@/components/service/database/entity/Table";

export class ResponseBody<T> {
    code: number = 0;
    msg?: string;
    success?: boolean;
    data: T;
    status?: number

    constructor(data: T) {
        this.data = data;
        this.code = 200;
    }
}