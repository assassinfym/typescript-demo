var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "inversify";
let OracleCommonImpl = class OracleCommonImpl {
    getDataBase() {
        return "oracle";
    }
    getTableList() {
        const tableList = [];
        for (let i = 0; i < 5; i++) {
            const table = {
                tableName: "oracle" + i,
                tableComment: "oracle表" + i
            };
            tableList.push(table);
        }
        return tableList;
    }
    getColumnList() {
        const columnList = [];
        for (let i = 0; i < 5; i++) {
            const table = {
                ColumnName: 'oracle字段' + i,
                ColumnComment: 'oracle字段描述' + i,
                ColumnLength: 'oracle字段长度' + i,
                ColumnPrecision: (i % 2) == 0 ? 'oracle字段精度' + i : i
            };
            columnList.push(table);
        }
        return columnList;
    }
};
OracleCommonImpl = __decorate([
    injectable()
], OracleCommonImpl);
export { OracleCommonImpl };
//# sourceMappingURL=OracleCommonImpl.js.map