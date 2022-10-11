<template>
  <div class="hello">
    {{ TestMsg }}
    <div style="border: 1px solid red">
      <HelloWordChild ref="HelloWordChild"></HelloWordChild>
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import TYPE from "@/components/common/Type";
import MyContainer from "@/components/common/Containers";
import {inject} from "inversify";
import {UserInfo} from "@/components/entity/UserInfo";
import {ResponseBody} from "@/components/common/ResponseBody";
import {TemplateInfo} from "@/components/entity/TemplateInfo";
import {BusinessServiceExtend} from "@/components/service/BusinessServiceExtend";
import {VideoInfo} from "@/components/entity/VideoInfo";
import DataBaseType from "@/components/service/database/enumrable/DataBaseType"
import {provide} from "vue";
import HelloWordChild from "@/components/HelloWordChild.vue";
import {Options, Vue} from "vue-class-component";
import {TypeGymnastics} from "@/components/service/TypeGymnastics";
import {Autowired} from "@/components/service/Autowired";


@Options({
  components:{
    HelloWordChild
  }
})
export default class HelloWorld extends Vue {
  TestMsg: string = "测试数据是不是正确";
  @inject(TYPE.BusinessServiceExtend) businessServiceExtend: BusinessServiceExtend = MyContainer().get<BusinessServiceExtend>(TYPE.BusinessServiceExtend);

  constructor(props:any) {
    super(props);
    provide("msg", "测试子组件是否可以正确获取到注入的信息")
  }

  mounted() {
    const type = "debugger"
    if(type!=="debugger"){
      const typeGymnastics = new TypeGymnastics();
      typeGymnastics.getType()
      console.log("=======================================")
      const autowired = new Autowired("外部传入")
      autowired.getName()
      autowired.getAge(110,20)
      autowired.getText("测试字符串", 9988)
    }
    else{
      // eslint-disable-next-line no-undef
      console.log(this.businessServiceExtend.getDataBase(DataBaseType.mysql));
      console.log("==========================================================")

      console.log(this.businessServiceExtend.getAbstractChildOneInfo())
      console.log("==========================================================")
      // eslint-disable-next-line no-undef
      const tableList = this.businessServiceExtend.getTableList(DataBaseType.pgsql)
      for (let i = 0; i < tableList.length ; i++) {
        console.log(`当前表是${tableList[i].tableName}, 当前表描述是: ${tableList[i].tableComment}`)
      }
      console.log("==========================================================")
      const columnList = this.businessServiceExtend.getColumnList(DataBaseType.oracle);
      for (let i = 0; i < columnList.length; i++) {
        console.log(`当前字段名是${columnList[i].ColumnName}, 字段描述是: ${columnList[i].ColumnComment}, 字段长度是${columnList[i].ColumnLength}`)
      }
      console.log("==========================================================")

      console.log(this.businessServiceExtend.protectedTest());
      console.log("==========================================================")
      this.businessServiceExtend.getUserInfo({}).then((res: UserInfo) => {
        const token = res.access_token;
        this.businessServiceExtend.getTemplateInfo({}, token).then((result: ResponseBody<TemplateInfo[]>) => {
          if (result.success) {
            for (let i = 0; i < result.data.length; i++) {
              console.log(`${result.data[i].id} - ${result.data[i].subName}`);
            }
            console.log("==========================================================")
          } else {
            console.log("访问失败了:" + result.msg)
          }
        })
        this.businessServiceExtend.getVideos({}, token).then((result: ResponseBody<VideoInfo>) => {

          if (result.success) {
            console.log("当前Video数量是:" + result.data.total);
            for (let i = 0; i < result.data.fileList.length; i++) {
              console.log(`${result.data.fileList[i].name} - ${result.data.fileList[i]["video-path"]}`)
            }
            console.log("==========================================================")
          } else {
            console.log("访问失败了:" + result.msg)
          }
        })
      })
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
