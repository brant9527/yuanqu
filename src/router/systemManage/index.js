export default {
  path: "/systemManage",
  name: "systemManage",
  redirect: "/systemManage/reviewManage/publishReview",
  component: resolve => require(["@/views/systemManage/index"], resolve),
  children: [
    {
      path: "/systemManage/reviewManage/publishReview",
      name: "publishReview",
      component: resolve =>
        require(["@/views/systemManage/publishReview/index"], resolve)
    },
    {
      path: "/systemManage/reviewManage/checkInReview",
      name: "checkINReview",
      component: resolve =>
        require(["@/views/systemManage/checkInReview/index"], resolve)
    },
    {
      path: "/systemManage/reviewManage/activityReview",
      name: "activityReview",
      component: resolve =>
        require(["@/views/systemManage/activityReview/index"], resolve)
    },
    {
      path: "/systemManage/publishManage/policy",
      name: "policy",
      component: resolve =>
        require(["@/views/systemManage/policy/index"], resolve)
    },
    {
      path: "/systemManage/publishManage/notice",
      name: "notice",
      component: resolve =>
        require(["@/views/systemManage/notice/index"], resolve)
    },
    {
      path: "/systemManage/publishManage/activity",
      name: "activity",
      component: resolve =>
        require(["@/views/systemManage/activity/index"], resolve)
    }
  ]
};
