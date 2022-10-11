<template>
<div>
  子组件获取到的消息 {{msg}}
</div>
</template>

<script lang="ts">

import {Vue} from "vue-class-component";
import {inject} from "vue";

export default class HelloWordChild extends Vue {
  msg:String |undefined = "";
  mounted(){
    this.msg = inject("msg")
  }
}


</script>

<style scoped>

</style>