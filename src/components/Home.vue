<template>
  <div id="home" >
    <div class="intitle">
      <div class="ti1">Kvue</div>
      <div class="ti2">Keep Coding With Vue</div>
    </div>
    <div class="tabs">
      <div 
        v-for="ima in imas" 
        :key="ima.id"
        @click="gotab(ima.url)"
        class="onetab">
        <img :src="ima.src" />
      </div>
      <div class="onetab" @click="doo('vx')">
        <img src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-%E5%90%91TA%E5%85%B3%E7%88%B1-brightgreen.svg?style=flat-square">
      </div>
      <div class="onetab" @click="doo('zfb')">
        <img src="https://img.shields.io/badge/%E6%94%AF%E4%BB%98%E5%AE%9D-%E5%90%91TA%E5%85%B3%E7%88%B1-blue.svg?style=flat-square">
      </div>
    </div>

    <div class="cardsbox">
      <div class="cards">
        <div class="sort">
          <i class="el-icon-tickets"></i> 目前共有<div class="num" style="display:inline;">2</div> 分类 
        </div>
      </div>
      
      

    </div>

    <el-dialog
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

    <!-- <div class="copy">
      © 2019 xrkffgg
    </div> -->
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
        dialogVisible : false,
        ifvx : null,
        //页面使用数据
        imas : [
          {
            id: 1,
            src : 'https://img.shields.io/badge/Kvue-xrkffgg-brightgreen.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue'
          },
          {
            id: 2,
            src : 'https://img.shields.io/github/last-commit/xrkffgg/kvue.svg?color=red&style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/commits'
          },
          {
            id: 3,
            src : 'https://img.shields.io/github/stars/xrkffgg/kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/stargazers'
          },
          {
            id: 4,
            src : 'https://img.shields.io/github/languages/top/xrkffgg/kvue.svg?color=orange&style=flat-square',
            url : 'https://github.com/xrkffgg/kvue'
          },
          {
            id: 5,
            src : 'https://img.shields.io/github/license/xrkffgg/kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/kvue/blob/master/LICENSE'
          },
          {
            id: 6,
            src : 'https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square',
            url : 'https://996.icu/#/zh_CN'
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
    }
  }
</script>

<style>
  #home .dialogClass {
    width: 300px;
    height: 300px;
  }

  #home .el-dialog__title {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2rem;
  }

  #home .el-dialog{
    box-shadow: 9px 9px 5px 5px #446679;
    -webkit-box-shadow: 9px 9px 5px 5px #446679;
  }
</style>

<style scoped lang="scss">

</style>
