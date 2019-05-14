<template>
  <div id="index">
    <div class="header">
      <header-com></header-com>
    </div>

    <div class="sidebar">
      <sidebar-com></sidebar-com>
    </div>

    <div class="main">
      <div class="view">
        <transition name="el-fade-in-linear">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import headerCOM from './Header.vue'
  import siderbarCOM from './Siderbar.vue'
  export default {
    name : 'index',
    components: {
      'header-com' : headerCOM,
      'sidebar-com' : siderbarCOM,
    },

    props:[

    ],

    created(){

    },

    watch:{

    },  

    mounted(){

    },

    data() {
      return {
        //页面展示数据

        //页面使用数据

        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {

    }
  }
</script>

<style scoped lang="scss">

</style>
