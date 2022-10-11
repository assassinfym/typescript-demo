import {BusinessService} from "@/components/service/BusinessService";
import {injectable} from "inversify";
import {ResponseBody} from "@/components/common/ResponseBody";
import {VideoInfo} from "@/components/entity/VideoInfo";
import {ICommon} from "@/components/service/database/ICommon";
import {MysqlCommonImpl} from "@/components/service/database/service/MysqlCommonImpl";
import {OracleCommonImpl} from "@/components/service/database/service/OracleCommonImpl";
import {Table} from "@/components/service/database/entity/Table";
import {Column} from "@/components/service/database/entity/Column";
import DataBaseType from "@/components/service/database/enumrable/DataBaseType";
import {PgsqlCommonImpl} from "@/components/service/database/service/PgsqlCommonImpl";
import {AbstractCommon} from "@/components/service/abstract/AbstractCommon";
import {AbstractChildOne} from "@/components/service/abstract/AbstractChildOne";

@injectable()
export class BusinessServiceExtend extends BusinessService {

    getVideos(data:any, token:String): Promise<ResponseBody<VideoInfo>> {
        return this.httpClient.getVideo(data, token)
    }

    getDataBase(dbType:DataBaseType): String {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getDataBase();
    }

    getTableList(dbType:DataBaseType): Table[] {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getTableList();
    }

    getColumnList(dbType:DataBaseType): Column[] {
        const iCommon = this.getDataSourceImpl(dbType);
        return iCommon.getColumnList();
    }

    protectedTest(){
        return super.protectedTest();
    }

    getAbstractChildOneInfo():String{
        const abstractCommon:AbstractCommon  = new AbstractChildOne();
        return `${abstractCommon.getChildInfo()} - ${abstractCommon.getCommonInfo()}`;
    }

    private getDataSourceImpl(dbType:DataBaseType):ICommon{
        switch (dbType){
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
}