import {UserInfo} from "@/components/entity/UserInfo";
import * as ts from "typescript"
interface Eg1 {
    name: string,
    age: number,
}
interface Eg2 {
    color: string,
    age: string,
}

class  Eg3 {
    public name: String = "";
    public age : number = 0;
}

class Eg4 {
    name: String = "" ;
    color: String = "";
}
class Eg5 extends Eg4 {
    count: number = 0;
}

interface Eg6 {
    name1: String,
}
interface Eg7 {
    name2:String
}
interface Eg8 extends Eg6,Eg7{
    name3:String
}

interface Eg9 {
    name: String,
    text: String,
    count: number,
}

type Partial2<T, K extends keyof T, F extends keyof T> = {
    [P in keyof T as P extends K? P: never] : T[P]
} & {
    [P in keyof T as P extends F? P: never] ?: T[P]
}

type IsNumberOrBoolean<T> = T extends number ? { test:number }: never | T extends boolean ? { test:string }: never

type Unpacked<T> = T extends (infer R)[]? R: T

type Response<T> = T extends Promise<infer R> ? R: T;

type UnionType<T> =  T extends { a: infer U; b: infer U } ? U : never;

type TupleToUnionType<T> = T extends(infer R)[]? R: never


type CanStringified = string | number | bigint | boolean | null | undefined
type Stringify<T extends CanStringified> = `${T}`
export  class  TypeGymnastics {
    constructor() {
    }

    getType() {
        /**
         * T的类型为 {name: string; age: never; color: string}
         * 注意，age因为Eg1和Eg2中的类型不一致，所以交叉后age的类型是never
         */
        // type T = Eg1 & Eg2
        // const val: T = {
        //     name: '',
        //     color: '',
        //     age: (function a() {
        //          throw Error("当前类型冲突")
        //     })(),
        // }
        // console.log(val)
        type T2 = Eg3;
        const var2: T2 = {
            name: "测试名称",
            age: 0
        }
        console.log(var2);

        type T3 = Eg5;
        const var3: T3 = {
            name: '123',
            color: '123',
            count: 1
        }
        console.log(var3)

        type T4 = Eg8;
        const var4: T4 = {
            name1: "1",
            name2: "2",
            name3: "3"
        }
        console.log(var4)

        type T5 = Eg9;
        const var5: T5 = {
            name: "123",
            text: '123',
            count: 1
        }
        console.log(var5);
        //Partial可以把所有元素都变成可选的，比如 name:String --> name?:String这样
        type T5Partial = Partial2<Eg9, 'name', 'text'>;
        const var5Partial: T5Partial = {
            name: '123',
        }
        console.log(var5Partial)

        const testType: boolean = false;

        type T6NumberOrBoolean = IsNumberOrBoolean<typeof testType>;
        const varT6NumberOrBoolean: T6NumberOrBoolean = {
            test: '123'
        };

        const ids = [1, 2, 3]
        const names = ['1', '2', '3']

        type IdsType = Unpacked<typeof ids>
        const varIds: IdsType = 1;

        type NamesType = Unpacked<typeof names>
        const varNames: NamesType = '123';

        type limitResponse = Promise<UserInfo>;
        type resType = Response<limitResponse>;
        const varResType: resType = {
            user_tel: "",
            user_name: "",
            token_type: "",
            user_id_number: "",
            access_token: "",
            user_kind: "",
            refresh_token: "",
            encrypt_str: "",
            tenant_uid: "",
            user_id: "",
            tempToken: ""
        }


        //类型合并或拆分
        type onlyString = UnionType<{a:string,b:string}>
        const varOnlyString: onlyString = '123';
        type unionType = UnionType<{a:number,b:boolean}>
        const varUnionType: unionType = 1;
        const varUnionType2: unionType = false;


        //元组类型转换成联合类型
        type tupleType = [string,number,Boolean];
        type tupleToUnion = TupleToUnionType<tupleType>;
        const varTupleToUnion: tupleToUnion = '1';
        const varTupleToUnion2: tupleToUnion = 1;
        const varTupleToUnion3: tupleToUnion = false;

        type 生成数组<填充数字 extends number, 数组长度, 已有数组 extends number[]> = 已有数组['length'] extends 数组长度 ? 已有数组 : 生成数组<填充数字, 数组长度, [填充数字, ...已有数组]>
        type 数组<数组长度 extends number> = 生成数组<1, 数组长度, []>
        type 加法<a extends number, b extends number> = [...数组<a>, ...数组<b>]['length']
        type a =3;
        type b= 5;
        type D = 加法<a, b>
        const value: 加法<a,b> = 8
    }
}