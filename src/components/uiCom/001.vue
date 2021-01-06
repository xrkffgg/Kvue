<template>
  <div id="ui001">
    <div class="main-title">Eleme Table</div>
    <div class="main-title-time ">2019-08-15</div>

    <div class="box">
      <el-table
        :data="tableData"
        style="max-width: 300px;">
        <el-table-column
          prop="date"
          label="Time"
          align="center"
          min-width="10">
        </el-table-column>
      </el-table>

      <div class="btn-box">
        <el-button :loading="bloading" plain type="primary" @click="begin">开 始</el-button>
        <el-button plain type="warning" @click="pause">暂 定</el-button>
        <el-button plain type="success" @click="reset">重 置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import dateMix from '@/mixins/date.js'
  export default {
    name : 'ui001',
    mixins : [dateMix,],
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
        bloading : false,
        //页面使用数据
        tableData: [

        ],
        //码表
        
        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      begin(){
        this.bloading = true
        this.tableData.unshift({ date: this.getNowDate('ss') })
        this.tableMove()
        this.a = setInterval(() =>{
          this.tableMove()
        },1000)
      },

      pause(){
        clearInterval(this.a)
        this.bloading = false
      },

      reset(){
        this.pause()
        setTimeout(() =>{
          this.tableData = []
        },1000)
      },

      tableMove(){
        // 48px 为表格行高
        let t = document.getElementsByClassName('el-table__body-wrapper')
        setTimeout(() =>{
          this.tableData.splice(4,1)
          t[0].style.transition = 'all .5s'
          t[0].style.marginTop = '48px'
        },500)
        setTimeout(() =>{
          this.tableData.unshift({ date: this.getNowDate('ss') })
          t[0].style.transition = 'all 0s ease 0s'
          t[0].style.marginTop = '0'
        },1000)
      },

    }
  }
</script>

<style scoped lang="scss">
  .box {
    padding: 100px;
    display: flex;
  }
  
  .btn-box {
    margin-left: 100px;
    margin-top: 50px;
  }
</style>
