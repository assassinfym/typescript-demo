import {Table} from "@/components/service/database/entity/Table";
import {Column} from "@/components/service/database/entity/Column";

export interface ICommon{
    getDataBase(): String;
    getTableList(): Table[];
    getColumnList(): Column[];
}