<template>
  <div class="header-wrap">
    <div class="header">
      <div class="no-support esspclearfix" v-if="isuplevel">
        <i class="el-icon-error"></i>
        <div class="sup-txt">
          当前浏览器版本过低，请更换其他浏览器进行访问！
          <span class="uplevel" @click="uplevel">升级</span>
        </div>
      </div>

      <div class="headinfo esspclearfix">
        <div class="auto">
          <div class="desc" v-if="loginShow">
            <span>亲，欢迎来到企业智能撮合综合服务平台（ESSP）！</span>
            <span class="login" @click="toLogin">登录</span>
            <span>/</span>
            <span class="register" @click="toRegister">注册</span>
          </div>
          <div class="desc" v-if="!loginShow">
            {{userName}} &nbsp;您好，欢迎来到企业智能撮合综合服务平台（ESSP）！
            <span
              @click="logout"
              class="desclogout"
            >[退出]</span>
          </div>
          <ul class="headulcon">
            <li @click="toHome">首页</li>
            <li @click="toPersonalCenter">个人中心</li>
            <li @click="toMessageCenter">
              消息中心
              <span
                class="msg"
                v-show="new_msg && !loginShow"
                :class="{'msg-line': !isNum}"
              >{{msgNum}}</span>
            </li>
            <li @click="toCustomerService">帮助中心</li>
            <li @click="toAdmin" v-if="toAdminShow">管理后台</li>
            <!--<li @click="toOAsys">乐享OA</li>-->
          </ul>
        </div>
      </div>

      <div>
        <!-- 如果需要调整，请联系林河钦 -->
        <!-- <div> -->
        <div class="headmain" id="bignav" :class="searchBarFixed == true ? 'isFixed' :''">
          <div class="auto padding esspclearfix">
            <div class="logocon">
              <img :src="imgUrl" alt="logo" @click="tolink();">
            </div>

            <div class="header_nav" v-if="!isSearchPage">
              <EsspNav :routerType="routerTypeNum"></EsspNav>
            </div>

            <!-- 全局搜索控件 -->
            <div
              :class="isSearchPage?'search-list':'seachinput-dropdown'"
              v-if="routerTypeNum != 1"
            >
              <el-input
                placeholder="请输入服务/商品/需求名称或关键词"
                v-model="search.keyword"
                class="input-with-select"
              >
                <!-- <el-select v-model="search.type" slot="prepend" placeholder="类型">
                  <el-option label="企业" value="0"></el-option>
                  <el-option label="服务" value="1"></el-option>
                  <el-option label="需求" value="2"></el-option>
                  <el-option label="商品" value="4"></el-option>
                </el-select>-->
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EsspNav from "@/components/header/EsspNav";

export default {
  name: "",
  props: ["routerTypeNum", "type", "navBarData", "jzfpLogo", "active"],
  components: {
    EsspNav
  },
  data() {
    return {
      seachVal: "",
      searchBarFixed: false,
      loginShow: true,
      userName: "",
      search: {
        keyword: "",
        type: "2"
      },
      isSearchPage: false,
      OApath: "",
      userInfo: "",
      toAdminShow: false,
      sendTo: false,
      new_msg: false,
      msgNum: 0,
      isNum: true,
      isuplevel: false,
      imgUrl: require("../../assets/img/logo.png")
    };
  },
  computed: {},
  mounted() {},
  created() {},
  watch: {
    $route() {},
    navBarData: {},
    sendTo: {
      handler: function(val) {
        this.$emit("getValue", val);
      },
      deep: true
    }
  },
  methods: {
    uplevel() {
      window.open(
        "https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads"
      );
    },

    smartChat() {
      this.$router.push({
        name: "help-smartSer1"
      });
    },

    windowChat() {},

    checkIsSearchPage() {},
    getNewMsg() {},
    handleScroll() {},
    addEvent(ev, fn) {},
    login() {},
    toHome() {
      this.$router.push("/");
    },
    tolink() {
      this.$router.push("/");
    },
    toLogin() {
      this.$router.push("/userIndex");
    },
    toRegister() {
      this.$router.push("/userIndex/register");
    },
    toPersonalCenter() {
      // Cookies.set('navIndex', 70)
      this.$router.push("/personalCenter");
    },
    toMessageCenter() {
      this.new_msg = false;
      // Cookies.set('navIndex', 70)
      this.$router.push("/messageCenter");
    },
    toCustomerService() {
      this.$router.push("/helpCenter");
    },
    toHelpCenter() {
      this.$router.push("/aboutUs/aboutState");
    },
    isLogin() {},
    toOAsys() {
      if (this.OApath) {
        window.open(this.OApath);
      }
    },
    adminShow() {},
    toAdmin() {},
    logout() {},
    //  跳转搜索页面
    redirectToSearchPage() {
      if (!this.search.type) {
        this.$message({
          type: "error",
          message: "请输入完整信息!"
        });
        return;
      }
      localStorage.setItem("searchkeyword", this.search.keyword);
      localStorage.setItem("searchtype", this.search.type);
      this.$router.push({
        path: "/requIndex/search",
        query: this.search
      });
    },
    getSearchOps() {
      let path = this.$router.currentRoute.path;
      if (path.indexOf("/requIndex/search") >= 0) {
        this.search = {};
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../assets/css/mixin.less";
@headifon_btn_height: 36px;
@head_font_s: 12px;
@head_font_c: #999999;
.header-wrap {
  position: fixed;
  width: 100%;
  top:0;
  z-index: 1;
  .el-scrollbar__wrap {
    overflow: hidden;
  }
  // border-bottom: #4b4b4b 1px solid;
  background-color: #ffffff;
  box-shadow: 0px 3px 3px 0px rgba(51, 51, 51, 0.15);
}

.header {
  .desc {
    float: left;
    .padding(7px 0);
    font-size: @head_font_s;
    color: @head_font_c;
    .login {
      cursor: pointer;
      color: #00a0e9;
    }
    .register {
      cursor: pointer;
      &:hover {
        color: #00a0e9;
      }
    }
  }
  .desclogout {
    .padding(7px 0);
    font-size: @head_font_s;
    cursor: pointer;
  }
  .no-support {
    padding: 4px 0 4px 20px;
    color: #ed4a43;
    background-color: #fcf0f0;
    border: 2px solid #ffd4d2;
    .sup-txt {
      display: inline-block;
      color: #ed4a43;
      .uplevel {
        cursor: pointer;
        color: #00a0e9;
      }
    }
  }
  .headinfo {
    .auto {
      .essp_width_auto();
    }
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
  }
  .isFixed {
    position: fixed;
    background-color: @essp_con_bg;
    top: 0;
    width: 100%;
    min-width: @essp_width_auto;
    z-index: 1001;
    box-shadow: 0px 4px 21px 0px rgba(116, 116, 116, 0.12);
  }
}

.header_nav {
  float: left;
  width: 604px;
}

.headulcon {
  float: right;
  li {
    float: left;
    .padding(7px 0);
    margin-left: 40px;
    cursor: pointer;
    &:hover {
      color: #00a0e9;
    }
  }
  .msg {
    background: #e97259;
    border-radius: 50%;
    border: 2px solid #e97259;
    position: absolute;
    z-index: 100;
    top: -2px;
    margin-left: -6px;
    text-align: center;
    color: #fff;
    transform: scale(0.7);
    width: 20px;
    height: 20px;
  }
  .msg-line {
    line-height: 10px;
  }
}

.seachinput {
  float: left;
  width: 200px;
  padding-top: 5px;
  input {
    height: 28px;
    line-height: 28px;
  }
  .el-input__inner {
    border: 2px solid @essp_nav_bg;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    border: 2px solid @essp_nav_bg;
    background-color: @essp_nav_bg;
    color: @essp_con_bg;
    .padding(0 10px);
    .el-button {
      margin: -10px -12px;
      padding: 0 20px;
    }
  }
}

.search-list {
  .el-input-group__prepend .el-select .el-input {
    width: 85px;
  }
  .el-select .el-input__inner {
    width: 100%;
    padding-right: 0px;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0px;
  }
  .el-input-group__prepend {
    width: 45px;
    font-size: 14px;
    background-color: transparent;
    color: #666;
    border: 2px solid #26a7eb !important;
    border-right-width: 0px;
    border-radius: 0px;
  }
  .el-input-group__append {
    border: 2px solid #26a7eb;
    background-color: @essp_nav_bg;
    color: #666;
    border-radius: 0px;
  }
  .el-input__inner {
    border-top: 2px solid #26a7eb;
    border-bottom: 2px solid #26a7eb;
    border-left-width: 0px;
    border-right-width: 0px;
    font-size: 14px;
  }
  input {
    height: 46px;
    line-height: 46px;
  }
}

.seachinput-dropdown {
  float: right;
  width: 360px;
  input {
    height: 36px;
    line-height: 36px;
  }
  .el-input-group__prepend .el-select .el-input {
    width: 72px;
  }
  .el-select .el-input__inner {
    width: 100%;
    padding-right: 0px;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0px;
  }
  .el-input__inner {
    border: 1px solid #26a7eb;
    font-size: @head_font_s;
  }
  .el-input-group__append {
    border: 1px solid #26a7eb;
    background-color: #409eff;
    color: @essp_con_bg;
    .padding(0 10px);
    .el-button {
      margin: -10px -12px;
      padding: 0 20px;
    }
  }
  .el-input-group__prepend {
    width: 40px;
    font-size: @head_font_s;
    border: 1px solid #26a7eb;
    background-color: transparent;
    color: #000000;
    border-right-width: 0px;
    .padding(0 12px);
    .el-select {
      margin: -10px -16px;
      .el-input {
        .el-select__caret {
          font-size: @head_font_s;
        }
      }
    }
    .el-input__icon {
      line-height: 16px;
    }
  }
  .search-button {
    // font-size: 16px;
    // color: #ffffff;
    // padding: 9px 14px;
    // line-height: 16px;
    cursor: pointer;
    // background-color: #409eff;
    // border-color: #409eff;
  }
}

.headbtncon {
  span {
    float: left;
    height: 36px;
    margin-right: 5px;
    color: #666;
    line-height: 36px;
    &:hover {
      color: #932;
    }
  }
}

.headmain {
  position: relative;
  // overflow: hidden;
  padding: 20px 0;
  .auto {
    .essp_width_auto();
  }
  background: @essp_con_bg;
}

.logocon {
  float: left;
  width: 187px;
  height: 38px;
  margin-right: 29px;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .jzfp-logo {
    position: absolute;
    width: 160px;
    height: 60px;
    top: -11px;
    left: 20px;
  }
}

.serchcon {
  float: left;
  .headserch {
    float: left;
    width: 420px;
    height: 36px;
    border: solid 2px #0066b3;
  }
  .serchbtn {
    float: left;
    width: 45px;
    height: 40px;
    background-color: #0066b3;
  }
}

.headul {
  float: right;
  li {
    float: left;
  }
  li a {
    float: left;
    margin-left: 33px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #333333;
    &:hover {
      color: #932;
    }
  }
}
</style>
<style lang='less' scoped>
.el-select-dropdown__item {
  padding: 0 15px;
}

.search-list {
  width: 60%;
  margin: 0 auto;
  z-index: 999;
  margin-left: 20%;
  .search-button {
    font-size: 16px;
    color: #ffffff;
    padding: 9px 12px;
    line-height: 16px;
    cursor: pointer;
    span {
      letter-spacing: 4px;
    }
  }
}

.smartSer {
  cursor: pointer;
  display: block;
  position: fixed;
  right: 3px;
  bottom: 10px;
  z-index: 99;
  span {
    float: left;
  }
  .msg-chat {
    background: #e97259;
    border-radius: 50%;
    border: 2px solid #e97259;
    position: relative;
    z-index: 100;
    left: -34px;
    text-align: center;
    color: #fff;
    transform: scale(0.7);
    width: 20px;
    height: 20px;
  }
  .msg-chat-line {
    line-height: 10px;
  }
}
</style>