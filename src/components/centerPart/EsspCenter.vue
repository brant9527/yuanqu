<template>
  <div class="center">
    <EsspAside :title="title" :list="list"></EsspAside>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import EsspAside from "./EsspAside";
import EsspContent from "./EsspContent";
export default {
  name: "new-center",
  components: {
    EsspAside
  },
  data() {
    return {
      msg: ""
    };
  },
  props: ["title", "list"]
};
</script>
<style lang="less" scoped>
.center {
  width: 1200px;
  margin: 15px auto;
  max-height: 500px;
}
.content {
  display: inline-block;
  vertical-align: top;
}
</style>
