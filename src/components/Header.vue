<template>
  <div id="headercom">
    <el-row :gutter="10">
      <el-col :lg="{span: 7,offset: 1}" :xl="{span: 3,offset: 1}">
        <div class="title">
          <div class="title1 num" @click="doGoHome">
            <a>Kvue</a>
          </div>
          <div class="title2 num" @click="doGoGitUser">
            <a>by xrkffgg</a>
          </div>
        </div>
      </el-col>
      <el-col :lg="{span: 14,offset: 2}" :xl="{span: 8,offset: 12}">
        <div class="tab">
          <ul>
            <li>
              <a class="headmenu" @click="doGoHome">首 页</a>
            </li>
            <li>
              <a class="headmenu num" @click="doGoGit">Github</a>
            </li>
            <li>
              <a class="headtime num">{{ nowDate }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import mixinDateModule from '../mixins/date-module.js' 
  import mixinCommon from '../mixins/common'
  import store from '../store'

  export default {
    mixins: [mixinDateModule,mixinCommon],
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
        this.$router.push({path : '/'})
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
