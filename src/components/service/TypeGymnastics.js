class Eg3 {
    name = "";
    age = 0;
}
class Eg4 {
    name = "";
    color = "";
}
class Eg5 extends Eg4 {
    count = 0;
}
export class TypeGymnastics {
    constructor() {
    }
    getType() {
        const var2 = {
            name: "测试名称",
            age: 0
        };
        console.log(var2);
        const var3 = {
            name: '123',
            color: '123',
            count: 1
        };
        console.log(var3);
        const var4 = {
            name1: "1",
            name2: "2",
            name3: "3"
        };
        console.log(var4);
        const var5 = {
            name: "123",
            text: '123',
            count: 1
        };
        console.log(var5);
        const var5Partial = {
            name: '123',
        };
        console.log(var5Partial);
        const testType = false;
        const varT6NumberOrBoolean = {
            test: '123'
        };
        const ids = [1, 2, 3];
        const names = ['1', '2', '3'];
        const varIds = 1;
        const varNames = '123';
        const varResType = {
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
        };
        const varOnlyString = '123';
        const varUnionType = 1;
        const varUnionType2 = false;
        const varTupleToUnion = '1';
        const varTupleToUnion2 = 1;
        const varTupleToUnion3 = false;
        const value = 8;
    }
}
//# sourceMappingURL=TypeGymnastics.js.map