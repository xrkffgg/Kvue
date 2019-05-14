<template>
  <div id="home" >
    <el-button @click="dos">click</el-button>
  </div>
</template>

<script>

  export default {
    name : 'home',
    components: {

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
      dos(){
        let a = document.documentElement['clientWidth']
        console.log(a)
      },
    }
  }
</script>

<style scoped lang="scss">
  #home {
    height: 100%;
    overflow-y: hidden;
  }
</style>
