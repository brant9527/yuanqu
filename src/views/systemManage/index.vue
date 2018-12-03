<template>
  <div>
    <EsspCenter :title="'系统管理'" :list="list"></EsspCenter>
  </div>
</template>
<script>
import EsspCenter from "@/components/centerPart/EsspCenter";
export default {
  components: {
    EsspCenter
  },
  data: () => ({
    list: [
      {
        name: "发布管理",
        // path: "/system/publishManage",
        children: [
          { name: "科技政策", path: "/systemManage/publishManage/policy" },
          { name: "咨询公告", path: "/systemManage/publishManage/notice" },
          { name: "平台活动", path: "/systemManage/publishManage/activity" }
        ]
      },
      {
        name: "审核管理",
        // path: "/systemManage/reviewManage",
        children: [
          { name: "发布审核", path: "/systemManage/reviewManage/publishReview" },
          { name: "入住审核", path: "/systemManage/reviewManage/checkINReview" },
          { name: "活动审核", path: "/systemManage/reviewManage/activityReview" }
        ]
      }
    ]
  })
};
</script>
<style lang="less" scoped>
</style>
