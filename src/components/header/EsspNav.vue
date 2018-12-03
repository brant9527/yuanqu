<template>
  <div class="essp-cont">
    <div class="essp-nav">
      <ul class="esspclearfix">
        <li v-if="leftShow">
          <i class="el-icon-caret-left" @click="leftClick"></i>
        </li>
        <li v-for="(item,index) in headMenu" :key="item.id">
          <!-- <div v-if="item.children.length>0">
              <el-dropdown>
                <span @click="toLinkhead(item)"
                  :class="item.id ==active?'el-dropdown-link':'el-dropdown-none'">
                  <span style="font-size: 18px">{{item.menu}}</span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="tmp in item.children"
                    :key="tmp.id"
                    :class="tmp.id ==subActive?'el-dropdown-link':'el-dropdown-none'"
                    @click.native.prevent="toSubLink(tmp)"
                  >{{tmp.menu}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>-->
          <span :class="active === index?'span-link':'span-none'" @click="toLink(item,index)">
              <span style="font-size: 18px;text-align: center;">{{item.menu}}</span>
          </span>
          <span v-if="active === index" class="essp-sj"></span>
        </li>
        <li v-if="rightShow">
          <i class="el-icon-caret-right" @click="rightClick"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    apiUrl
  } from "@/fetch/apiUrl.js";
  
  export default {
    name: "",
    props: ["routerType"],
    data() {
      return {
        active: 0,
        subActive: "",
        brngShow: true,
        menuShow: true,
        userMobile: "",
        headMenu: [{
            menu: "首页",
            path: "/home"
          },
          {
            menu: "科技大厅"
          },
          {
            menu: "办事大厅"
          },
          {
            menu: "需求大厅"
          },
          {
            menu: "咨询公告",
            path: "/news"
          },
          {
            menu: "平台活动"
          },
          {
            menu: "系统管理",
            path:'/systemManage'
          }
        ],
        leftMenuList: [],
        OApath: "",
        menuArray: [],
        count: 0,
        leftShow: false,
        rightShow: false,
        //园区导航控制
        curParkId: sessionStorage.getItem("parkId") || "",
        myList: sessionStorage.getItem("myList") || []
      };
    },
    watch: {
      $route(to, from) {
        //路由变化获取最新选择的园区
        console.log(to, from);
      }
    },
    created: function() {},
    methods: {
      //
      toMatchType() {
        this.$router.push("/requIndex/matchType");
      },
      // 动态加载菜单
      getMenu() {},
      leftClick() {
        this.count--;
        this.clickChangeMenu();
      },
      rightClick() {
        this.count++;
        this.clickChangeMenu();
      },
      clickChangeMenu() {},
      getInitMenu() {
        
      },
      toLink(item, index) {
        console.log(item.path);
        this.active = index
        if (item.path) {
          this.$router.push({
            path: item.path
          });
        }
      },
      toSubLink(item) {},
      toLinkhead(item) {},
      isclickName(name) {},
      getOApath(val) {}
    }
  };
</script>

<style lang="less" scoped>
  @import "../../assets/css/mixin.less";
  .essp-cont {
    width: 100%;
    .essp-nav {
      margin: 0 auto;
      ul {
        width: 1000px;
      }
      li {
        float: left;
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        position: relative;
        cursor: pointer;
        margin-right: 18px;
        color: @essp_nav_color;
        &:hover {
          color: @essp_nav_selcolor;
        }
        a {
          display: block;
          height: 100%;
          padding: 0 15px;
          color: @essp_nav_color;
        }
        .router-link-active {
          color: @essp_nav_selcolor;
        }
      }
      .sel {
        color: @essp_nav_selcolor;
      }
    }
  }
  
  .el-dropdown-link {
    color: @essp_nav_selcolor;
    cursor: pointer;
  }
  
  .el-dropdown-none {
    outline: none;
    &:hover {
      color: @essp_nav_selcolor;
    }
  }
  
  .span-link {
    color: @essp_nav_selcolor;
    cursor: pointer;

    display: block;
    text-align: center;
  }
  
  .span-none {
    display: block;
    outline: none;
    color: #333;

    text-align: center;
    &:hover {
      color: @essp_nav_selcolor;
    }
  }
  
  .essp_left_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background-color: #00a0e9;
  }
  
  .essp_float_left {
    float: left;
  }
  
  .page-header span,
  .el-dropdown span {
    outline: none;
  }
  
  .displayNone {
    display: none;
  }
  
  .displayBlock {
    display: block;
  }
  
  .essp-sj {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 11px 10px;
    border-color: transparent transparent #000000 transparent;
    opacity: 0.3;
    position: absolute;
    bottom: 0;
    margin-left: -10px;
    left: 50%;
    top: 50px;
  }
</style>
