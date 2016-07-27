<template>
  <div id="app">
    <div class="content">
    <x-header id="header" :left-options="{showBack: false}">{{title}}</x-header>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import XHeader from 'vux-components/x-header'
  import store from './vuex/store'
  import { getTitle } from './vuex/getters'

  export default {
    store,
    vuex: {
      getters: {
        title: getTitle
      }
    },
    route: {
      data (transition) {
      }
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
      XHeader
    }
  }
</script>

<style>
.content {
  background-color: #efeff4
}
#header .vux-header-title {
  color: #3d4145;
}
#header {
  background-color: #f7f7f8;
}
</style>