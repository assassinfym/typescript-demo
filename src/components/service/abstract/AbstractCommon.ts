export abstract  class AbstractCommon {
    getCommonInfo():string {
        return "获取到公共信息了";
    }

    abstract getChildInfo():String;
}