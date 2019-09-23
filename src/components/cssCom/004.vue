<template>
  <div id="css004">
    <div class="main-title">炫酷文字</div>
    <div class="main-title-time num">2019-09-19</div>
    <div class="main-content">
      <div class="box">
        <h1>是你的网络有问题。</h1>
        <h1>清一下缓存再试试。</h1>
        <h1>重启下电脑再试试。</h1>
        <h1>换一台设备试试看。</h1>
        <h1>键盘给你，你来写。</h1>
        <h1>扫码提需求，谢谢。</h1>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'css004',
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

// 1
.box {
  position: absolute;
  overflow: hidden;
  isolation: isolate;
}

h1 {
  margin: 0;
  mix-blend-mode: difference;
  font-size: 300%;
  color: #fff;
  position: relative;
  z-index: 1;
}

.box::before {
  content: '';
  position: absolute;
  width: 100vw;
  height: 100vw;
  left: calc(50% - 50vw); top: calc(50% - 50vw);
  margin: auto;
  background: linear-gradient(#fff 50%, #000 50%);
  animation: spin 5s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   {  transform: rotate(360deg); }
}

</style>
