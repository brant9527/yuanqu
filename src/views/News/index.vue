<template>
  <div>
    <EsspCenter :list='list' :title="title"></EsspCenter>
  </div>
</template>
<script>
import EsspCenter from '@/components/centerPart/EsspCenter'
export default {

  data: () => ({
      title:'新闻咨询',
      list:[{
        name:'新闻动态',
        children:[
          {name:'全部新闻',path:'/news/allNews'},
          {name:'我关注的新闻',path:'/news/myNews'}
        ]
      },
      {
        name:'通知公告',
        children:[
          {name:'全部通知公告',path:'/news/notice'}
        ]
      }],
  }),
  components:{
      EsspCenter
  },
  watch: {
    $route(to, from) {
      console.log(to,from);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
