<template>
  <div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        styleMenuObjectRight: {
          'height': '',
          'overflow-y': 'auto'
        }
      }
    },
    mounted() {

    },
    created(){

    },
    methods: {
      hh(){
        if (process.browser) {
          console.log(window.innerHeight - 80);
          this.styleMenuObjectRight.height = window.innerHeight - 80 + 'px';
          /*this.$nextTick(function () {
            //默认选中
            this.loadingShow = true;
          });*/
        }
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中

      }
    }
  }
</script>

<style scoped>

</style>
