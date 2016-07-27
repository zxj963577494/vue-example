<template>
列表页
<a v-link="{name:'home',params:{Id:1}}">返回主页</a>
</template>
<script>
  import { setTitle } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        setTitle
      }
    },
    route: {
      data (transition) {
      }
    },
    created: function () {
      this.setTitle('列表页')
    },
    ready () {
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