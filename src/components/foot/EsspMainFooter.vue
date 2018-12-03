<template>
    <div class="footer-container">
        <div class="root">
            <div class="root-pagination auto">
                <div class="root-left esspclearfix">
                    <div class="root-logo">
                        <img src="../../assets/img/logo-bw.png" />
                    </div>
                    <div class="pm-content">
                        <span class="pm-txt">咨询</span>
                        <span class="phone-num">0592-2155112</span>
                    </div>
                    <div class="pm-content">
                        <span class="pm-txt">合作</span>
                        <span class="phone-num">0592-2155195</span>
                    </div>
                </div>
                <div class="root-center">
                    <div class="center-list">
                        <div class="center-title">项目撮合</div>
                        <ul>
                            <li><a @click="redirectToRqmList('03',['01'])">PPP项目</a></li>
                            <li><a @click="redirectToRqmList('03',['03'])">国企混改</a></li>
                            <li><a @click="redirectToRqmList('03',['02'])">融资租赁</a></li>
                            <li><a @click="redirectToRqmList('03',['04'])">投资融资</a></li>
                            <!--<li><a>节能减排</a></li>-->
                            <li><a @click="redirectToRqmList('03','07')">金融扶贫</a></li>
                            <li><a @click="redirectToRqmList('03','06')">旅游项目</a></li>
                            <li><a @click="redirectToRqmList('03','08')">资产转让</a></li>
                        </ul>
                    </div>
                    <div class="center-list">
                        <div class="center-title">服务撮合</div>
                        <ul>
                            <li><a @click="redirectToRqmList('01',['L','L02','L0203'])">法律服务</a></li>
                            <li><a @click="redirectToRqmList('01',['I','I02'])">互联网广告</a></li>
                              <li><a @click="redirectToRqmList('01',['K'])">房地产业</a></li>
                            <li><a @click="redirectToRqmList('01',['L','L02','L0207'])">安全保护</a></li>
                            <li><a @click="redirectToRqmList('01',['M','M03','M0302'])">知识产权</a></li>
                            <li><a @click="redirectToRqmList('01',['J','J04','J0404'])">金融信息服务</a></li>
                            <li><a @click="toRequList">更多</a></li>
                        </ul>
                    </div>
                    <div class="center-list">
                        <div class="center-title">商品撮合</div>
                        <ul>
                            <li><a @click="redirectToRqmList('02',['G01'])">机械设备</a></li>
                            <li><a @click="redirectToRqmList('02',['G04'])">家用电器</a></li>
                            <li><a @click="redirectToRqmList('02',['G05'])">交通运输设备</a></li>
                            <li><a @click="redirectToRqmList('02',['G07'])">医疗设备</a></li>
                            <li><a @click="redirectToRqmList('02',['G14'])">建筑材料</a></li>
                            <li><a @click="redirectToRqmList('02',['G37'])">养殖业</a></li>
                            <li><a @click="toRequList">更多</a></li>
                        </ul>
                    </div>
                    <div class="center-list">
                        <div class="center-title">需求发布</div>
                        <ul>
                            <li><a @click="toPublishPage('pro-server')">发布项目</a></li>
                            <li><a @click="toPublishPage('goods-server')">发布商品</a></li>
                            <li><a @click="toPublishPage('serv-server')">发布服务</a></li>
                            <li><a @click="toRequHall">需求大厅</a></li>
                            <li><a @click="toRequList">需求库</a></li>
                        </ul>
                    </div>
                    <div class="center-list">
                        <div class="center-title">帮助中心</div>
                        <ul>
                            <li><a @click="toGuidance">操作指导</a></li>
                            <li><a @click="toProblem">常见问题</a></li>
                            <li><a @click="toContactUs">联系我们</a></li>
                            <li><a @click="toWebState">网站声明</a></li>
                            <li><a @click="toAboutState">关于我们</a></li>
                        </ul>
                    </div>
                    <div class="center-list">
                        <div class="center-title">热门搜索</div>
                        <ul>
                            <li v-for="(item,index) in hotRecords"
                                :key="index"
                                @click="redirectToRqmList(null,null,item.srch_KYWD)"><a>{{item.srch_KYWD}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="root-right">
                    <div class="root-right-img">
                        <img src="../../assets/img/ccb-2.png" />
                    </div>
                    <div class="root-right-img">
                        <img src="../../assets/img/ccb-1.png" />
                    </div>
                    <div class="right-content">
                        <div class="root-right-txt">
                            <img src="../../assets/img/mail-s.png" />
                            <span class="r-sp r-mail">want.zh@ccb.com</span>
                        </div>
                        <div class="root-right-txt">
                            <img class="r-addr-img"
                                 src="../../assets/img/addr.png" />
                            <span class="r-sp r-addr">福建省厦门思明区软件园</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="root-bottom">
            <div class="bottom-pagination auto">
                <div class="content">
                    <div class="txt">
                        <ul class="txt-ul">
                            <li class="aft"
                                @click="redirectToFoot(0)">撮合分类</li>
                            <li class="aft"
                                @click="redirectToFoot(1)">企业中心</li>
                            <li class="aft"
                                @click="redirectToFoot(2)">需求大厅</li>
                            <li class="aft"
                                @click="redirectToFoot(3)">智慧园区</li>
                            <!--<li class="aft"  @click="redirectToFoot(4)">节能减排</li>-->
                            <li class="aft"
                                @click="redirectToFoot(5)">快速搜索</li>
                            <li class="aft"
                                @click="redirectToFoot(6)">关于我们</li>
                            <li @click="clickHandle(7)">乐享OA</li>
                        </ul>
                    </div>
                    <div class="txt">
                        <span class="txt-2">Copyight 2017-2018 建信金科有限责任公司版权所有 京ICP备13030780号</span>
                        <span class="txt-2"><img class="police"
                                 src="../../assets/img/police.png" />京公网安备：110102000450</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiUrl } from "@/fetch/apiUrl.js";

export default {
  name: "EsspMainFooter",
  props: {},
  components: {},
  data() {
    return {
      showBack: false,
      searchForm: {},
      hotRecords: [],
      OApath: "",
      userMobile: ""
    };
  },
  created() {
 
  },
  methods: {
    getHotRecord() {
      this.$post(apiUrl.home.getHotRecord, {}).then(response => {
        if (response.resultMsg == "success")
          this.hotRecords = response.resultData.srchRcdList;
        localStorage.setItem("hotRecords", JSON.stringify(this.hotRecords));
      });
    },
    goToRqmList() {
      this.$router.push({
        name: "requ-requRqmlist",
        params: { data: this.searchForm }
      });
    },
    redirectToRqmList(serviecTpCd, rqmTpCd, keyword) {
      if (serviecTpCd || rqmTpCd) {
        this.searchForm.serviecTpCd = serviecTpCd;
        this.searchForm.rqmTpCd = rqmTpCd;
      }
      console.log("searchForm:",this.searchForm);
      this.$router.push({
        name: "requ-requRqmlist",
        params: { data: this.searchForm }
      });
    },
    scrollHandle() {
      let scorllTop =
        window.pageYOffset ||
        document.documentElement.scorllTop ||
        document.body.scorllTop;
      if (scorllTop > 538) {
        this.showBack = true;
      } else {
        this.showBack = false;
      }
    },
    toTop() {
      // - 回到滚动顶部
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    toPublishPage(url) {
      let userInfo = this.SSH.getItem("userInfo");
      if (!this.utils.isEmpty(userInfo)) {
        this.toTop();
        this.$router.push("/requIndex/publish/" + url);
      } else {
        this.$message({
          type: "error",
          message: "您还未登录，请先登录！"
        });
        this.$router.push({ path: "/userIndex/login" });
      }
    },
    toRequHall() {
      this.$router.push("/requIndex/allClass");
    },
    toRequList() {
      this.$router.push("/requIndex/requRqmlist");
    },
    toGuidance() {
      this.$router.push("/helpCenter/guidance");
    },
    toProblem() {
      this.$router.push("/helpCenter/problem");
    },
    toContactUs() {
      this.$router.push("/aboutUs/contactUs");
    },
    toWebState() {
      this.$router.push("/aboutUs/webState");
    },
    toAboutState() {
      this.$router.push("/aboutUs/aboutState");
    },
    redirectToFoot(val) {
      switch (val) {
        case 0:
          this.$router.push("/requIndex/requRqmlist");
          break;
        case 1:
          this.$router.push("/centerIndex/home");
          break;
        case 2:
          this.$router.push("/requIndex/allClass/pro-match");
          break;
        case 3:
          this.$router.push("/parkIndex");
          break;
        case 4:
          break;
        case 5:
          this.$router.push("/requIndex/search");
          break;
        case 6:
          this.$router.push("/aboutUs/aboutState");
          break;
      }
    },
    clickHandle(index) {
      switch (index) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          // -乐享OA
          let vm = this;
          this.$post(apiUrl.user.getOApath, {
            mobile: this.userMobile
          }).then(response => {
            vm.OApath = response.resultData;
            vm.SSH.setItem("OApath", response.resultData);
            window.open(this.OApath);
          });
          break;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.scrollHandle);
  }
};
</script>
<style lang="less" scoped>
.root {
  width: 100%;
  height: 316px;
  display: flex;
  //justify-content: center;
  background: #222222;
  .root-pagination {
    height: 100%;
    margin: 0px auto;
    width: 1200px;
    .root-left {
      width: 284px;
      float: left;
      margin-top: 36px;
      .root-logo {
        margin-bottom: 20px;
      }
      .pm-content {
        margin-top: 16px;
        border: 1px solid #525252;
        background: #525252;
        border-radius: 3px;
        display: inline-block;
        padding: 12px 22px;
        .pm-txt {
          font-size: 16px;
          color: #ffffff;
        }
        .phone-num {
          font-size: 17px;
          color: #ffffff;
          margin-left: 10px;
        }
      }
    }
    .root-center {
      margin-top: 36px;
      float: left;
      .center-list {
        float: left;
        width: 124px;
        .center-title {
          font-size: 14px;
          color: #ffffff;
        }
        ul {
          margin-top: 20px;
          li {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              color: #cacaca;
              font-size: 12px;
              line-height: 32px;
              height: 26px;
              cursor: pointer;
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
    .root-right {
      margin-top: 46px;
      // float: left;
      .root-right-img {
        text-align: center;
        margin-top: 18px;
      }
      .right-content {
        margin-top: 26px;
      }
      .root-right-txt {
        color: #ffffff;
        margin-top: 10px;
        .r-sp {
          padding-left: 4px;
        }
        .r-addr {
          font-size: 12px;
        }
        .r-addr-img {
          margin-left: 1px;
        }
        .r-mail {
          font-size: 15px;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}

.root-bottom {
  width: 100%;
  height: 64px;
  background: #222222;
  .bottom-pagination {
    text-align: center;
    border-top: 1px solid #5c5c5c;
    .content {
      margin-top: 12px;
      padding: 0px !important;
      .txt {
        font-size: 12px;
        color: #858585;
        line-height: 20px;
        .txt-1 {
          font-size: 14px;
        }
        .txt-2 {
          font-size: 14px;
          .police {
            display: inline-block;
            vertical-align: top;
            margin: 0 4px;
          }
        }
        .txt-ul {
          li {
            position: relative;
            display: inline-block;
            cursor: pointer;
            margin-left: 10px;
          }
          .aft:after {
            position: absolute;
            top: 4px;
            left: 62px;
            margin-left: -8px;
            width: 1px;
            height: 12px;
            background: #858585;
            content: "";
          }
        }
      }
    }
  }
}
</style>
