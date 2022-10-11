import {ICommon} from "@/components/service/database/ICommon";
import {Table} from "@/components/service/database/entity/Table";
import {Column} from "@/components/service/database/entity/Column";
import {injectable} from "inversify";


@injectable()
export class OracleCommonImpl implements ICommon {
    getDataBase(): String {
        return "oracle";
    }

    getTableList(): Table[] {
        const tableList: Table[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Table = {
                tableName: "oracle" + i,
                tableComment: "oracle表" + i
            }
            tableList.push(table)
        }
        return tableList;
    }

    getColumnList(): Column[] {
        const columnList: Column[] = [];
        for (let i = 0; i < 5 ; i++) {
            const table:Column = {
                ColumnName: 'oracle字段' + i,
                ColumnComment: 'oracle字段描述' + i,
                ColumnLength: 'oracle字段长度' + i,
                ColumnPrecision: (i%2)==0?'oracle字段精度' + i:i
            }
            columnList.push(table)
        }
        return columnList;
    }
}