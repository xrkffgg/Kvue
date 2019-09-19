<template>
  <div id="css001">
    <div class="main-title">水纹效果</div>
    <div class="main-title-time num">2019-09-18</div>
    <div class="main-title-tip">
      参 考：<el-link href="https://www.zhangxinxu.com/wordpress/2017/12/understand-svg-fedisplacementmap-filter/" target="_blank">张鑫旭</el-link> 
    </div>
    <div class="main-content">
      <div class="img">
        <img id="css001-pig" src="../../assets/jpg/pig.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {rippleEffect} from '../../assets/js/ripple-min'
  export default {
    name : 'css001',
    mixins : [],
     components: {

    },

    props:[

    ],

    created(){
      
    },

    watch:{

    },  

    mounted(){
      rippleEffect(document.getElementById('css001-pig'))
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

<style scoped lang="scss">
  .img {
    display: flex;
    justify-content: center;
  }
</style>
