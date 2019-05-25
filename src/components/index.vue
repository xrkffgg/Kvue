<template>
  <div id="index" v-loading="loading" class="cur-default">
    <div class="header">
      <header-com></header-com>
    </div>

    <div class="sidebar">
      <sidebar-com></sidebar-com>
    </div>

    <div class="main">
      <div class="view">
        <transition>
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import headerCOM from './Header.vue'
  import siderbarCOM from './Siderbar.vue'
  import FontFaceObserver from 'fontfaceobserver'

  export default {
    name : 'index',
    components: {
      'header-com' : headerCOM,
      'sidebar-com' : siderbarCOM,
    },

    props:[

    ],

    created(){
      this.loadfont()
    },

    watch:{

    },  

    mounted(){

    },

    data() {
      return {
        //页面展示数据
        loading : false,
        //页面使用数据

        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      loadfont(){
        this.loading = true
        console.time("字体加载用时")
        var ooo = new FontFaceObserver('SourceHanSans-Regular')
        ooo.load().then(() =>{
          document.getElementById('index').style.fontFamily = 'SourceHanSans-Regular'
          console.timeEnd("字体加载用时")
          this.loading = false
        })
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
