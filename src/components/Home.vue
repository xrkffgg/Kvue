<template>
  <div id="home">
    <div class="intitle">
      <div class="ti1">Kvue</div>
      <div class="ti2">Keep Coding By HTML & CSS & JS</div>
    </div>
    <div class="tabs">
      <div
        v-for="ima in imas"
        :key="ima.id"
        @click="gotab(ima.url)"
        class="onetab">
        <img :id="ima.id" :src="ima.src" />
      </div>
      <div class="onetab" @click="doo('vx')">
        <img id="ima9" src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-%E5%90%91TA%E5%85%B3%E7%88%B1-brightgreen.svg?style=flat-square">
      </div>
      <div class="onetab" @click="doo('zfb')">
        <img id="ima10" src="https://img.shields.io/badge/%E6%94%AF%E4%BB%98%E5%AE%9D-%E5%90%91TA%E5%85%B3%E7%88%B1-blue.svg?style=flat-square">
      </div>
    </div>

    <div class="cardsbox">
      <div class="cards">
        <!-- <iframe src="/#/Css/001" width="100%" height="100%" scrolling="no" frameborder="0"></iframe> -->
      </div>
    </div>

    <div class="homeaboutbox">
      <div class="aboutcon">
        <div class="card">
          <div class="cardfont" @click="showhis">成长史</div>
        </div>
        <div class="card">
          <div class="cardfont" @click="showme">关于我</div>
        </div>
      </div>
      <div class="copybox">
        <div class="num copy">
          ©&nbsp;&nbsp;{{$store.state.copy_year}}&nbsp;&nbsp;<a class="copyname" @click="doGoGit">xrkffgg</a>
        </div>
      </div>
    </div>

    <!-- vx/zfb  -->
    <el-dialog
      id="love"
      :title="ifvx? '💖微 信💖': '💖支付宝💖'"
      :show-close="false"
      :visible.sync="dialogVisible"
      center
      custom-class="dialogClass">
      <div class="diaimg" v-if="ifvx">
        <img src="../assets/jpg/vx.png"/>
      </div>
      <div class="diaimg" v-else>
        <img src="../assets/jpg/zfb.png"/>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import mixinCommon from '../mixins/common'

  export default {
    name : 'home',
    mixins: [mixinCommon],
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
        dialogVisible : false,
        ifvx : null,
        //页面使用数据
        imas : [
          {
            id: 'ima1',
            src : 'https://img.shields.io/badge/Kvue-xrkffgg-brightgreen.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue'
          },
          {
            id: 'ima2',
            src : 'https://img.shields.io/github/last-commit/xrkffgg/kvue.svg?color=red&style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/commits'
          },
          {
            id: 'ima3',
            src : 'https://img.shields.io/github/stars/xrkffgg/kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/stargazers'
          },
          {
            id: 'ima4',
            src : 'https://img.shields.io/github/languages/top/xrkffgg/kvue.svg?color=orange&style=flat-square',
            url : 'https://github.com/xrkffgg/kvue'
          },
          {
            id: 'ima5',
            src : 'https://img.shields.io/github/license/xrkffgg/kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/blob/master/LICENSE'
          },
          {
            id: 'ima6',
            src : 'https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square',
            url : 'https://996.icu/#/zh_CN'
          },
          {
            id: 'ima7',
            src : 'https://img.shields.io/badge/%E2%9D%A4-%E6%8E%98%20%E9%87%91-blue.svg?style=flat-square',
            url : 'https://juejin.im/user/59c369496fb9a00a4843a3e2'
          },
          {
            id: 'ima8',
            src : 'https://img.shields.io/badge/%E2%9D%A4-%E7%AE%80%20%E4%B9%A6-orange.svg?style=flat-square',
            url : 'https://www.jianshu.com/u/4ca4daac5890'
          },
        ]
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      gotab(url){
        window.open(url)
      },

      doo(i){
        i == 'vx'? this.ifvx = true :this.ifvx = false
        this.dialogVisible = true
      },

      showhis(){

      },

      showme(){

      },
    }
  }
</script>

<style>
  #love .dialogClass {
    width: 300px;
    height: 300px;
  }

  #love .el-dialog__title {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2rem;
  }

  #love .el-dialog{
    box-shadow: 9px 9px 5px 5px #446679;
    -webkit-box-shadow: 9px 9px 5px 5px #446679;
  }
</style>

<style scoped lang="scss">

</style>
