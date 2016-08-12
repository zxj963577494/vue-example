<template>
  首页
  <a v-link="{name:'list',params:{Id:1}}">前往列表页</a>
  <p>header属于路由模板页，内容的文字变化由vuex实现</p>
  <p>通过api获取node.js中文社区20条数据：</p>
  <pre>{{topics | json 2}}</pre>
</template>
<script>
  import { setTitle, getTopics } from '../vuex/actions'
  import { Topics } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        topics: Topics
      },
      actions: {
        setTitle,
        getTopics
      }
    },
    route: {
      data (transition) {
      }
    },
    created: function () {
    },
    ready () {
      this.setTitle('首页')
      let params = {
        page: 1,
        tab: 'all',
        limit: 20
      }
      this.getTopics(params)
    },
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>
<style>

</style>