<template>
  <div id="about">
    <transition name="el-fade-in">
      <vue-terminal 
        title="xrkffgg"
        prompt="Mac-Pro: $"
        :task-list="taskList" 
        :command-list="commandList">
      </vue-terminal>
    </transition>
  </div>
</template>

<script>
  import VueTerminal from '../../plugins/vue-terminal/src/index'
  import commandList from './commandList'
  import taskList from './taskList'

  export default {
    name : 'about',
    mixins : [],
    components: {
      VueTerminal,
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
        commandList : commandList,
        taskList : taskList,
        

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
  #about {
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(-90deg,#9c9a9a 10%,#4b4747 90%);
    cursor: default;
  }

  #about::selection{
    color: #fff !important;
    background-color: aqua !important;
  }
</style>
