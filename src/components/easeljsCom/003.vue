<template>
  <div id="easeljs003">
    <div class="main-title">Mark Test</div>
    <div class="main-title-time num">2019-08-30</div>
    <div class="main-title-tip">
      Use EaselJS<br/>
    </div>
    <br/>
    <div class="main-content-box c003">
      <canvas id="c003" width="1250" height="600"></canvas>
    </div>
  </div>
</template>

<script>
  require('script-loader!createjs/builds/1.0.0/createjs.min.js')

  const C = createjs;
  var canvas, stage, focusCont;
  var _mouseIsDown, _mouseX, _mouseY, lineX, lineY;

  export default {
    name : 'easeljs003',
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
      this.init()
    },

    data() {
      return {
        // 图层
        

      }
    },

    methods: {
      init(){
        canvas = document.getElementById('c003');
        stage = new C.Stage(canvas);

        focusCont = new C.Container()
        lineX = this.Rect({w: canvas.width, h: 2});
        lineY = this.Rect({w: 2, h: canvas.height});
        focusCont.addChild(lineX);
        focusCont.addChild(lineY);
        stage.addChild(focusCont);
        stage.enableMouseOver(20);

        this.focusHide()
        canvas.onmouseover = this.focusShow
        canvas.onmouseout = this.focusHide

        this.bindEvent();
      },

      // mouse
      bindEvent(){
        let that = this
        stage.addEventListener("stagemousemove", (evt) => {
          lineX.y = evt.stageY - 1;
          lineY.x = evt.stageX - 1;
          stage.update();
        });
      },

      focusShow () {
        focusCont.set({alpha: 1});
        stage.update();
      },

      focusHide () {
        focusCont.set({alpha: 0});
        stage.update();
      },

      Rect({w, h, x = 0, y = 0, color = '#ff0000'}){
        let rec = new C.Shape();
        rec.graphics.beginFill(color).drawRect(x, y, w, h);
        return rec;
      },

    },


  }
</script>

<style scoped lang="scss">
  .c003 {
    cursor: crosshair;
  }
</style>
