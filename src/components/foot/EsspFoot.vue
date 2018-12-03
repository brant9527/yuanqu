<template>
  <div class="footercon">
    <div class="footermain">
      <ul class="esspclearfix footnav">
        <li>
          <a @click="toHomePage">首页</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a @click="toFeedback">用户反馈</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a @click="toHelpCenter">帮助中心</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a @click="toContactUs">联系我们</a>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <a @click="toAboutUs">关于我们</a>
        </li>
      </ul>
      <p>Copyright 2018 CCB All Right Reserved</p>
      <p>Powered by 企业智能撮合综合服务平台</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
    toFeedback() {
      this.$router.push("/helpCenter/feedback");
    },
    toHelpCenter() {
      this.$router.push("/helpCenter");
    },
    toContactUs() {
      this.$router.push("/aboutUs/contactUs");
    },
    toAboutUs() {
      this.$router.push("/aboutUs/aboutState");
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/mixin";
.footercon {
  background-color: @essp_fc;
  .footermain {
    width: 1200px;
    padding: 20px 0;
    margin: 0 auto;

    p {
      width: 400px;
      margin: 0 auto;
      text-align: center;
      height: 36px;
      line-height: 36px;
    }
  }
}
.footnav {
  width: 400px;
  margin: 0 auto 5px;
  li {
    float: left;
    padding: 0 5px;
    a {
      color: #444;
    }
    a:hover {
      cursor: pointer;
      color: #00a0e9;
    }
  }
}
</style>
