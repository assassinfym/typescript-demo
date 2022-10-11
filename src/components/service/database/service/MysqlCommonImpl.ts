import {ICommon} from "@/components/service/database/ICommon";
import {Table} from "@/components/service/database/entity/Table";
import {Column} from "@/components/service/database/entity/Column";
import {injectable} from "inversify";


@injectable()
export class MysqlCommonImpl implements ICommon {
    getDataBase(): String {
        return "mysql";
    }

    getTableList(): Table[] {
        const tableList: Table[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Table = {
                tableName: "mysql" + i,
                tableComment: "mysql表" + i
            }
            tableList.push(table)
        }
        return tableList;
    }

    getColumnList(): Column[] {
        const columnList: Column[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Column = {
                ColumnName: 'mysql字段' + i,
                ColumnComment: 'mysql字段描述' + i,
                ColumnLength: 'mysql字段长度' + i,
                ColumnPrecision: (i%2)==0?'mysql字段精度' + i:i
            }
            columnList.push(table)
        }
        return columnList;
    }
}