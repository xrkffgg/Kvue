<template>
  <div id="headercom">
    <el-row :gutter="10">
      <el-col :md="{span: 8,offset: 1}" :lg="{span: 5,offset: 1}" :xl="{span: 3,offset: 1}">
        <div class="title">
          <div class="title1" @click="doGoHome">
            <a>Kvue</a>
          </div>
          <div class="title2" @click="doGoGit">
            <a>by xrkffgg</a>
          </div>
        </div>
      </el-col>
      <el-col 
        :md="{span: 8,offset: 1}" :lg="{span: 5,offset: 8}" :xl="{span: 4,offset: 14}">
        <div class="tab">
          <div class="tab1" @click="doGoHome">
            <a>首 页</a>
          </div>
          <div class="tab2" @click="doGoGit">
            <a>Github</a>
          </div>
          <div class="time">
            {{ nowDate }}
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import mixinDateModule from '../mixins/date-module.js' 
  export default {
    mixins: [mixinDateModule],
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

      doGoGit(){
        window.open('https://github.com/xrkffgg/kvue')
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
