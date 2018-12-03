export default {
  path: "/news",
  name: "news",
  component: resolve => require(["@/views/News/index"], resolve),
  redirect:'/news/myNews',
  children: [
    {
      path: "/news/myNews",
      name: "myNews",
      component: resolve => require(["@/views/News/myNews/index"], resolve)
    },
    {
      path: "/news/allNews",
      name: "allNews",
      component: resolve => require(["@/views/News/allNews/index"], resolve)
    },
    {
      path: "/news/notice",
      name: "notice",
      component: resolve => require(["@/views/News/notice/index"], resolve)
    }
  ]
};
