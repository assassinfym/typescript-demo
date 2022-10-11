
function Log(target: Object,
             propertyName: string,
             propertyDescriptor: PropertyDescriptor) {
    const method = propertyDescriptor.value
    propertyDescriptor.value = function () {
        console.log("====================================")
        console.log(`当前调用了方法3: ${propertyName}`)
        const result =  method.call(this)
        console.log("当前方法返回值是:" + result);
        console.log("====================================")
        return result;
    }
}

function AgeJudge(target: Object,
             propertyName: string,
             propertyDescriptor: PropertyDescriptor) {

    const method = propertyDescriptor.value
    propertyDescriptor.value = function (age: number, age2: number) {
        console.log("====================================")
        console.log(`当前调用了方法1: ${propertyName}`)
        // 检查是否是空字符串
        if (age<100) {
            throw Error('年龄1不能小于100')
        } else {
            console.log("当前方法入参(1):" + age);
            console.log("当前方法入参(2):" + age2);
            // 否则调用原来的方法
            const result =  method.call(this, age, age2)
            console.log("当前方法返回值是:" + result);
            console.log("====================================")
            return result;
        }
    }
}

function Test(target: Object,
              propertyName: string,
              propertyDescriptor: PropertyDescriptor){

    const method = propertyDescriptor.value
    // @ts-ignore
    propertyDescriptor.value = function (...args){
        console.log("====================================")
        console.log(`当前调用了方法2: ${propertyName}`)
        for (let i = 0; i < args.length; i++) {
            console.log(`当前方法入参(${i+1}): ${args[i]}`);
        }
        const result = method.apply(this, args);
        if(result){
            console.log(`当前方法返回结果是: ${result}`)
            console.log("====================================")
            return result;
        }
        console.log("====================================")
    }

}

export class Autowired {
    name: String;
    tempValue: String = "";
    constructor(name:String) {
        this.name = name;
    }

    @AgeJudge
    getAge(age: number, age2: number): number {
        return age + age2;
    }

    @Log
    getName():String{
       return  this.name;
    }

    @Test
    getText(param1:String, param2: number): String {
        return `${param1} - ${param2}`
    }
}