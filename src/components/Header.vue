<template>
  <div id="headercom">
    <el-row :gutter="10">
      <el-col :md="{span: 7,offset: 0}" :lg="{span: 5,offset: 0}" :xl="{span: 3,offset: 0}">
        <div class="title">
          <div class="title1" @click="doCtitle1">
            <a>Kvue</a>
          </div>
          <div class="title2" @click="doCtitle2">
            <a>by xrkffgg</a>
          </div>
        </div>
      </el-col>
      <el-col 
        :md="{span: 8,offset: 7}" :lg="{span: 5,offset: 5}" :xl="{span: 4,offset: 16}">
        <div class="tab">
          <div class="tab1" @click="doCtab1">
            <i class="el-icon-s-home"></i> 首页
          </div>
          <div class="tab2" @click="doCtab2">
            标签
          </div>
          <div class="tab3" @click="doCtab3">
            Github
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  export default {
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
      doCtitle1(){
        this.$router.push({path : '/'})
      },

      doCtitle2(){
        window.open('https://github.com/xrkffgg/kvue')
      },

      doCtab1(){

      },

      doCtab2(){

      },

      doCtab3(){
        window.open('https://github.com/xrkffgg/kvue')
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
