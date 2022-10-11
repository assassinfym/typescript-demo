import {ICommon} from "@/components/service/database/ICommon";
import {Table} from "@/components/service/database/entity/Table";
import {Column} from "@/components/service/database/entity/Column";
import {injectable} from "inversify";


@injectable()
export class PgsqlCommonImpl implements ICommon {
    getDataBase(): String {
        return "pgsql";
    }

    getTableList(): Table[] {
        const tableList: Table[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Table = {
                tableName: "pgsql" + i,
                tableComment: "pgsql表" + i
            }
            tableList.push(table)
        }
        return tableList;
    }

    getColumnList(): Column[] {
        const columnList: Column[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Column = {
                ColumnName: 'pgsql字段' + i,
                ColumnComment: 'pgsql字段描述' + i,
                ColumnLength: 'pgsql字段长度' + i,
                ColumnPrecision: (i%2)==0?'pgsql字段精度' + i:i
            }
            columnList.push(table)
        }
        return columnList;
    }
}