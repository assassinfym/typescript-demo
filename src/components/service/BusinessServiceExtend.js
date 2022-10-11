var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BusinessService } from "@/components/service/BusinessService";
import { injectable } from "inversify";
import { MysqlCommonImpl } from "@/components/service/database/service/MysqlCommonImpl";
import { OracleCommonImpl } from "@/components/service/database/service/OracleCommonImpl";
import DataBaseType from "@/components/service/database/enumrable/DataBaseType";
import { PgsqlCommonImpl } from "@/components/service/database/service/PgsqlCommonImpl";
import { AbstractChildOne } from "@/components/service/abstract/AbstractChildOne";
let BusinessServiceExtend = class BusinessServiceExtend extends BusinessService {
    getVideos(data, token) {
        return this.httpClient.getVideo(data, token);
    }
    getDataBase(dbType) {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getDataBase();
    }
    getTableList(dbType) {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getTableList();
    }
    getColumnList(dbType) {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getColumnList();
    }
    protectedTest() {
        return super.protectedTest();
    }
    getAbstractChildOneInfo() {
        const abstractCommon = new AbstractChildOne();
        return `${abstractCommon.getChildInfo()} - ${abstractCommon.getCommonInfo()}`;
    }
    getDataSourceImpl(dbType) {
        switch (dbType) {
            case DataBaseType.mysql:
                return new MysqlCommonImpl();
            case DataBaseType.oracle:
                return new OracleCommonImpl();
            case DataBaseType.pgsql:
                return new PgsqlCommonImpl();
            default:
                return new MysqlCommonImpl();
        }
    }
};
BusinessServiceExtend = __decorate([
    injectable()
], BusinessServiceExtend);
export { BusinessServiceExtend };
//# sourceMappingURL=BusinessServiceExtend.js.map