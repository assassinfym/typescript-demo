var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "inversify";
let PgsqlCommonImpl = class PgsqlCommonImpl {
    getDataBase() {
        return "pgsql";
    }
    getTableList() {
        const tableList = [];
        for (let i = 0; i < 5; i++) {
            const table = {
                tableName: "pgsql" + i,
                tableComment: "pgsql表" + i
            };
            tableList.push(table);
        }
        return tableList;
    }
    getColumnList() {
        const columnList = [];
        for (let i = 0; i < 5; i++) {
            const table = {
                ColumnName: 'pgsql字段' + i,
                ColumnComment: 'pgsql字段描述' + i,
                ColumnLength: 'pgsql字段长度' + i,
                ColumnPrecision: (i % 2) == 0 ? 'pgsql字段精度' + i : i
            };
            columnList.push(table);
        }
        return columnList;
    }
};
PgsqlCommonImpl = __decorate([
    injectable()
], PgsqlCommonImpl);
export { PgsqlCommonImpl };
//# sourceMappingURL=PgsqlCommonImpl.js.map