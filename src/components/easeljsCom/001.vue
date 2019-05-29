<template>
  <div id="easeljs001">
    <div class="main-title">GlobalToLocal2</div>
    <div class="main-title-time num">2019-05-29</div>
    <div class="main-title-tip">
      Follow the example GlobalToLocal2 of the EaselJS.<br/>
      URL: https://github.com/CreateJS/EaselJS/blob/master/examples/GlobalToLocal2.html
    </div>
    <br/>
    <div class="main-content-box">
      <canvas id="c01" width="1250" height="600"></canvas>
    </div>
  </div>
</template>

<script>
  
  export default {
    name : 'easeljs001',
    mixins : [],
    components: {
      
    },

    props:[

    ],

    created(){
      // this.init()
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
      init(){
        
        this.canvas = document.getElementById('c01')
        this.stage = new createjs.Stage(canvas)
        this.stage.autoClear = false
      },

      mouseMove(e){
        if(!e){
          var e = window.event
        }
        this._mouseX = e.pageX - this.canvas.offsetLeft
        this._mouseY = e.pageY - this.canvas.offsetTop
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
