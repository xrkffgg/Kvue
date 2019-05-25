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
            src="https://it-xrk.github.io/" 
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
          <div class="cardfont cur-pointer" @click="showhis">版本记录</div>
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

    <!-- 版本记录 -->
    <el-dialog
      id="his"
      title="版本记录"
      :show-close="false"
      :visible.sync="dialoghis"
      center>
      <el-table
        stripe
        border
        height="550"
        style="min-width:100%"
        cell-class-name="cellname"
        row-key="version"
        :expand-row-keys="expands"
        :data="$store.state.hisData"
        @expand-change="doExpand">
        <el-table-column type="expand">
          <template slot-scope="s">
            <template v-for="(it,index) in s.row.con">
              <div class="his-expand" :key="index">
                <el-tag :type="getHisIcon(it.type).t" size="medium">
                  <i :class="getHisIcon(it.type).o"/>&nbsp;&nbsp;{{getHisIcon(it.type).i}}
                </el-tag>
                <div class="his-expand-text">{{it.text}}</div> 
              </div>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          prop="time"
          label="日期"
          align="center"
          sortable
          min-width="100">
        </el-table-column>
        <el-table-column
          label="标签"
          align="center"
          min-width="120">
          <template slot-scope="srow">
            <template v-for="(it,index) in getHisTag(srow.row.con)">
              <el-tag :type="it.t" :key="index" size="medium">
                <i :class="it.o"></i>&nbsp;&nbsp;{{it.i}}
              </el-tag>&nbsp;&nbsp;&nbsp;
            </template>
          </template>
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本"
          align="center"
          min-width="50">
        </el-table-column>
      </el-table>
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
      this.loadiframe()
    },

    data() {
      return {
        //页面展示数据
        dialogVisible : false,
        dialoghis : false,
        ifvx : null,
        loading : true,
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
        ],

        expands : [],
        //码表

        //js使用数据

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

      doExpand(row,expRows){
        if(expRows.length > 0){
          this.expands.push(row.version)
          if(expRows.length >1){
            this.expands.shift()
          }
        }else {
          this.expands.shift()
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

  .cellname {
    font-family: 'Roboto-Thin';
    font-weight: bolder;
    color: #000;
    font-size: 15px;
  }

</style>

<style scoped lang="scss">
  .his-expand {
    margin-left: 50px;
    padding-bottom: 10px;
    .his-expand-text {
      display: inline;
      margin-left: 20px;
    }
  }
</style>
