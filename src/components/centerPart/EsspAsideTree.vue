<template>
  <div :id="currentIndex">
    <div>
      <div
        class="item"
        :class="myIndex===currentIndex?'active':''"
        @click="linkTo(obj,currentIndex)"
      >
        <span :class="obj.children?'':'children'">{{obj.name}}</span>
        <i class="label" :class="obj.children?'':'hasChildren'"></i>
      </div>
      <EsspAsideTree
        v-if="obj.children"
        v-for="(item,index) in obj.children"
        :key="index"
        :obj="item"
        :currentIndex="indexCpt(index)"
        :myIndex.sync="plusIndex"
      ></EsspAsideTree>
    </div>
  </div>
</template>
<script>
export default {
  name: "EsspAsideTree",
  data: () => ({
    currentId: "",
    plusIndex: "",
    str: ""
  }),
  props: ["obj", "currentIndex", "myIndex"],
  created() {},
  methods: {
    linkTo(item) {
      if (item.children) {
        return false;
      }
      this.$router.push({ path: item.path });
      this.$emit("update:myIndex", this.currentIndex);
    },
    indexCpt(index) {
      return this.currentIndex == 0 || this.currentIndex
        ? "" + this.currentIndex + index
        : index;
    },
    changeIndex(index) {
      console.log("过程" + index);
    }
  },
  computed: {
    isActive() {
      this.str = "";
      if (this.myIndex === this.currentIndex) {
        this.str += "active";
      }
      return this.str;
    }
  },
  created() {
    // this.plusIndex = this.myIndex;
    console.log(
      this.$route.path,
      this.obj.path,
      this.$route.path === this.obj.path
    );
    if (this.obj && this.obj.path && this.$route.path === this.obj.path) {
      console.log("改变Index", this.currentIndex);
      this.$emit("update:myIndex", this.currentIndex);
    }
  },
  watch: {
    plusIndex() {
      this.$emit("update:myIndex", this.plusIndex);
      console.log('传递上级index')
    },
    myIndex() {
      this.plusIndex = this.myIndex;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/mixin.less";
.item {
  position: relative;
  display: block;
  width: 200px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  background-color: #fff;
  color: #333333;
  font-size: 16px;
  cursor: pointer;
  .children {
    color: #777777;
    font-size: 14px;
  }
  &:hover,
  &.active {
    color: @essp_fcolor_blue;
    background-color: #f5f5f5;
    .label.hasChildren {
      background-color: @essp_nav_bg;
    }
  }
  .label {
    position: absolute;
    height: 50px;
    width: 10px;
    left: 0;
  }
}
</style>
