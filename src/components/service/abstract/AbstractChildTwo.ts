import {AbstractCommon} from "@/components/service/abstract/AbstractCommon";

export class AbstractChildTwo extends AbstractCommon {
    getChildInfo(): String {
        return "获取到了子类2的内容";
    }
}