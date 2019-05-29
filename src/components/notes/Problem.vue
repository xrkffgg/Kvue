<template>
  <div id="problem">
    <el-tabs tab-position="right" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane name="err" label="问 题 类">
        <pro-coll-com :args="errArg" ref="errRef"/>
      </el-tab-pane>
      <el-tab-pane name="opt" label="优 化 类">
        <pro-coll-com :args="optArg" ref="optRef"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import PRO from './problemData'
  import proCollCOM from './pro-collapse'

  export default {
    name : 'problem',
    mixins : [],
    components: {
      'pro-coll-com': proCollCOM,
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
        activeTab : 'err',

        proData : PRO,
        //码表

        //js使用数据

        //子组件使用数据
        errArg : PRO.err,

        optArg : PRO.opt,
        //rules

      }
    },

    methods: {
      handleClick(tab){
        
      },
    }
  }
</script>

<style lang="scss">
  $error--color : #F56C6C;
  #problem .el-tabs__item.is-active {
    color: $error--color;
  }

  #problem .el-tabs__item:hover{
    color: $error--color;
  }

  #problem .el-tabs__active-bar {
    background-color: $error--color;
  }

  #problem .el-collapse-item__header {
    font-size: 16px;
    font-weight: 600;
    &:hover{
      color: $error--color;
    }
  }


</style>


<style scoped lang="scss">
  #problem {
    height: 550px;
    max-height: 550px;
  }
</style>
