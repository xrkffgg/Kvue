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
        class="onetab cur-pointer">
        <img :id="ima.id" :src="ima.src" />
      </div>
      <div class="onetab cur-pointer" @click="doo('vx')">
        <img id="ima9" src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-%E5%90%91TA%E5%85%B3%E7%88%B1-brightgreen.svg?style=flat-square">
      </div>
      <div class="onetab cur-pointer" @click="doo('zfb')">
        <img id="ima10" src="https://img.shields.io/badge/%E6%94%AF%E4%BB%98%E5%AE%9D-%E5%90%91TA%E5%85%B3%E7%88%B1-blue.svg?style=flat-square">
      </div>
    </div>

    <div class="cardsbox">
      <div class="cards">
        <div class="iframebox">
          <iframe
            id="3dcube"
            v-show="!loading"
            src="https://xrkffgg.github.io/3dcube/" 
            name="3dcube"
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="0">
          </iframe>
          <div class="container animation-5" v-show="loading">
            <div class="shape shape1">加</div>
            <div class="shape shape2">载</div>
            <div class="shape shape3">中</div>
            <div class="shape shape4"><i class="el-icon-loading"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="homeaboutbox">
      <div class="aboutcon">
        <div class="card">
          <div class="cardfont cur-pointer" @click="showhis">项目记录</div>
        </div>
        <div class="card">
          <div class="cardfont cur-pointer" @click="doGoGitIssues">意见建议</div>
        </div>
        <div class="card">
          <div class="cardfont cur-pointer" @click="showme">关于作者</div>
        </div>
      </div>
      <div class="copybox">
        <div class="num copy">
          ©&nbsp;&nbsp;{{$store.state.copy_year}}&nbsp;&nbsp;<a class="copyname cur-pointer" @click="doGoGit">xrkffgg</a>
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
      custom-class="dialogClassjmg">
      <div class="diaimg" v-if="ifvx">
        <img src="../assets/jpg/vx.png"/>
      </div>
      <div class="diaimg" v-else>
        <img src="../assets/jpg/zfb.png"/>
      </div>
    </el-dialog>

    <!-- 项目记录 -->
    <el-dialog
      id="his"
      :title="his_title"
      :show-close="false"
      top="6vh"
      center
      :visible.sync="dialoghis">
      <center>
        <el-button 
          round 
          :plain="!ifhis"
          type="primary" 
          size="medium" 
          icon="el-icon-document-checked" 
          @click="ifhis = true">版本记录
        </el-button>

        <el-button 
          round 
          :plain="ifhis"
          type="danger" 
          size="medium" 
          icon="el-icon-document-delete" 
          @click="ifhis = false">问题记录
        </el-button>

      </center>
      <br/>
      <div v-if="ifhis">
        <his-com/>
      </div>
      <div v-else>
        <pro-com/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import mixinCommon from '../mixins/common'
  import hisCOM from './notes/His.vue'
  import proCOM from './notes/Problem.vue'

  export default {
    name : 'home',
    mixins: [mixinCommon],
    components: {
      'his-com': hisCOM,
      'pro-com': proCOM,
    },

    props:[

    ],

    created(){
      
    },

    watch:{
      ifhis(n,o){
        let ti = document.getElementsByClassName('el-dialog__title')
        if(n){
          ti[1].style.color = this.his_color
          this.his_title = '版本记录'
        } else {
          ti[1].style.color = this.error_color
          this.his_title = '问题记录'
        }
      }
    },  

    mounted(){
      this.loadiframe()
    },

    data() {
      return {
        //页面展示数据
        dialogVisible : false,
        dialoghis : false,
        ifvx : null,
        loading : true,
        
        activeName : 'his',
        //页面使用数据
        his_title : '版本记录',
        ifhis : true,

        imas : [
          {
            id: 'ima1',
            src : 'https://img.shields.io/badge/Kvue-xrkffgg-brightgreen.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/Kvue'
          },
          {
            id: 'ima2',
            src : 'https://img.shields.io/github/last-commit/xrkffgg/Kvue.svg?color=red&style=flat-square',
            url : 'https://github.com/xrkffgg/Kvue/commits'
          },
          {
            id: 'ima3',
            src : 'https://img.shields.io/github/stars/xrkffgg/Kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/Kvue/stargazers'
          },
          {
            id: 'ima4',
            src : 'https://img.shields.io/github/languages/top/xrkffgg/Kvue.svg?color=orange&style=flat-square',
            url : 'https://github.com/xrkffgg/Kvue'
          },
          {
            id: 'ima5',
            src : 'https://img.shields.io/github/license/xrkffgg/Kvue.svg?style=flat-square',
            url : 'https://github.com/xrkffgg/Kvue/blob/master/LICENSE'
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
        ],

        //码表

        //js使用数据
        his_color : '#1989fa',
        error_color : '#F56C6C',
        //子组件使用数据

        //rules

      }
    },

    methods: {
      loadiframe(){
        let i = document.getElementById('3dcube')
        console.time('魔方加载用时')
        if(i.attachEvent){
          i.attachEvent('onload',() =>{
            this.loading = false
            console.timeEnd('魔方加载用时')
          })
        } else {
          i.onload = () =>{
            this.loading = false
            console.timeEnd('魔方加载用时')
          }
        }
      },

      gotab(url){
        window.open(url)
      },

      doo(i){
        i == 'vx'? this.ifvx = true :this.ifvx = false
        this.dialogVisible = true
      },

      showhis(){
        this.dialoghis = true
      },

      showme(){
        this.$router.replace({name : 'about'})
      },
    }
  }
</script>

<style lang="scss">
  #love .dialogClassjmg {
    width: 300px;
    height: 300px;
  }

  #love .el-dialog__title {
    color: #1989fa; 
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2rem;
  }

  #love .el-dialog{
    box-shadow: 9px 9px 5px 5px #446679;
    -webkit-box-shadow: 9px 9px 5px 5px #446679;
  }

  #his .el-dialog__title{
    color: #1989fa; 
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  #his .el-dialog {
    thead {
      color: #1989fa;
    }
    th {
      padding: 6px 0;
    }
    td {
      padding: 8px 0;
    }
  }

  #his .el-dialog__body {
    padding: 5px 25px 30px;
  }

  .cellname {
    font-family: 'Roboto-Thin';
    font-weight: bolder;
    color: #000;
    font-size: 15px;
  }
</style>

<style scoped lang="scss">

</style>
