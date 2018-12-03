<template>
  <div>
    <EsspHeader></EsspHeader>
    <div class="padding-top">
      <router-view></router-view>
    </div>
    <EsspMainFooter></EsspMainFooter>
  </div>
</template>
<script>
import EsspHeader from "../components/header/EsspHead";
import EsspMainFooter from "../components/foot/EsspMainFooter";
export default {
  components: {
    EsspHeader,
    EsspMainFooter
  }
};
</script>
<style lang="scss" scoped>
.padding-top {
  position: relative;
  padding-top: 115px;
  // overflow: hidden;
  margin: 0 auto;
}
</style>
