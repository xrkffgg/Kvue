<template>
  <div id="pro-collapse">
    <el-collapse accordion>
      <el-collapse-item v-for="(it,index) in args" :key="index">
        <template slot="title">
          <i class="el-icon-thumb"/>&nbsp;{{it.title}}
        </template>
        <div class="coll-box">
          <el-tag :type="it.solve?'':'danger'" size="medium">
            <i :class="it.solve?'el-icon-document-checked':'el-icon-document-delete'">&nbsp;&nbsp;是否解决</i>
          </el-tag>
          <div class="coll-box-text" v-if="it.solve">是</div>
          <div class="coll-box-text" v-else>否</div>
        </div>
        <div class="coll-box">
          <el-tag type="info" size="medium">
            <i class="el-icon-document">&nbsp;&nbsp;问题描述</i>
          </el-tag>
          <div class="coll-box-text">{{it.describe}}</div>
        </div>
        <div class="coll-box">
          <el-tag type="success" size="medium">
            <i class="el-icon-edit">&nbsp;&nbsp;问题原因</i>
          </el-tag>
          <div class="coll-box-text">{{it.reason}}</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

  export default {

    mixins : [],
    components: {

    },

    props:[
      'args'
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
    }
  }
</script>

<style lang="scss">

</style>


<style scoped lang="scss">
  .coll-box {
    margin-left: 40px;
    margin-top: 6px;
    .coll-box-text {
      display: inline;
      margin-left: 20px;
    }
  }
</style>
