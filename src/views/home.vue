<template>
  <div class="content">
    <x-header id="header" :left-options="{showBack: false}">灰名单</x-header>
  </div>
</template>
<script>
  import XHeader from 'vux-components/x-header'

  export default {
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