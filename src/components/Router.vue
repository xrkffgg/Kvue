<template>
  <div id="router">
    <transition name="el-fade-in-linear">
      <keep-alive>
        <router-view v-show="show"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

  export default {
    name : 'router',
    mixins : [],
    components: {

    },

    props:[

    ],

    created(){

    },

    watch:{
      $route(to,from){
        this.show = false
        this.$nextTick(() =>{
          this.show = true
        })
      }
    },  

    mounted(){

    },

    data() {
      return {
        //页面展示数据
        show : true,
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
