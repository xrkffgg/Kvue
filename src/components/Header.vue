<template>
  <div id="headercom">
    <div class="title inline">
      <div class="title1 num inline cur-pointer" @click="doGoHome">
        <a>Kvue</a>
      </div>
      <div class="title2 num inline cur-pointer" @click="doGoGitUser">
        <a>by xrkffgg</a>
      </div>
    </div>
    
    <div class="tab inline">
      <a class="headmenu inline cur-pointer" @click="doGoHost">首 页</a>
      <a class="headmenu inline cur-pointer" @click="doGoHome">Home</a>
      <a class="headmenu num inline cur-pointer" @click="doGoGit">Github</a>
      <a class="headtime num inline">{{ nowDate }}</a>
    </div>
  </div>
</template>

<script>
  import mixinDate from '../mixins/date.js' 
  import mixinCommon from '../mixins/common'
  import store from '../store'

  export default {
    mixins: [mixinDate,mixinCommon],
    name : 'headercom',
    components: {

    },

    props:[

    ],

    created(){

    },

    watch:{

    },  

    mounted(){
      let that = this
      this.timer = setInterval(function(){
        that.nowDate = that.getNowDate('ss')
      },1000)
    },

    beforeDestroy:function(){
      if(this.timer){
        clearInterval(this.timer)
      }
    },

    data() {
      return {
        //页面展示数据
        nowDate : '',
        //页面使用数据

        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      doGoHome(){
        this.$router.replace({name : 'home'})
      },
      doGoHost(){
        window.location.href = 'https://xrkffgg.github.io/'
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
