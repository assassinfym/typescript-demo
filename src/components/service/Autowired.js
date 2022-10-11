var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyName, propertyDescriptor) {
    const method = propertyDescriptor.value;
    propertyDescriptor.value = function () {
        console.log("====================================");
        console.log(`当前调用了方法3: ${propertyName}`);
        const result = method.call(this);
        console.log("当前方法返回值是:" + result);
        console.log("====================================");
        return result;
    };
}
function AgeJudge(target, propertyName, propertyDescriptor) {
    const method = propertyDescriptor.value;
    propertyDescriptor.value = function (age, age2) {
        console.log("====================================");
        console.log(`当前调用了方法1: ${propertyName}`);
        // 检查是否是空字符串
        if (age < 100) {
            throw Error('年龄1不能小于100');
        }
        else {
            console.log("当前方法入参(1):" + age);
            console.log("当前方法入参(2):" + age2);
            // 否则调用原来的方法
            const result = method.call(this, age, age2);
            console.log("当前方法返回值是:" + result);
            console.log("====================================");
            return result;
        }
    };
}
function Test(target, propertyName, propertyDescriptor) {
    const method = propertyDescriptor.value;
    // @ts-ignore
    propertyDescriptor.value = function (...args) {
        console.log("====================================");
        console.log(`当前调用了方法2: ${propertyName}`);
        for (let i = 0; i < args.length; i++) {
            console.log(`当前方法入参(${i + 1}): ${args[i]}`);
        }
        const result = method.apply(this, args);
        if (result) {
            console.log(`当前方法返回结果是: ${result}`);
            console.log("====================================");
            return result;
        }
        console.log("====================================");
    };
}
export class Autowired {
    name;
    tempValue = "";
    constructor(name) {
        this.name = name;
    }
    getAge(age, age2) {
        return age + age2;
    }
    getName() {
        return this.name;
    }
    getText(param1, param2) {
        return `${param1} - ${param2}`;
    }
}
__decorate([
    AgeJudge
], Autowired.prototype, "getAge", null);
__decorate([
    Log
], Autowired.prototype, "getName", null);
__decorate([
    Test
], Autowired.prototype, "getText", null);
//# sourceMappingURL=Autowired.js.map