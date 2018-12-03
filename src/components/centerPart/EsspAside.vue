<template>
  <div class="aside">
    <div class="title">{{title}}</div>
    <EsspAsideTree
      v-for="(item,index) in list"
      :key="item.id"
      :obj="item"
      :currentIndex="index"
      :myIndex.sync="myIndex"
    ></EsspAsideTree>
  </div>
</template>
<script>
import EsspAsideTree from './EsspAsideTree'
export default {
  name: "esspAside",
  components: {
    EsspAsideTree
  },
  data() {
    return {
      msg: "",
      myIndex:'00'
    };
  },
  props:['title','list'],
  methods:{
  },
  watch:{
    myIndex(){
      console.log(this.myIndex)
    }
  }
};
</script>
<style lang="less" scoped>
.aside {
  width: 200px;
  display: inline-block;
}
.title {
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  vertical-align: middle;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(84deg, #1598ff 0%, #36bffd 100%);
}
</style>
