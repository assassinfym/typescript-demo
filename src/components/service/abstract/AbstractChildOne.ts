import {AbstractCommon} from "@/components/service/abstract/AbstractCommon";

export class AbstractChildOne extends AbstractCommon {
    getChildInfo(): String {
        return "获取到了子类1的内容";
    }
}