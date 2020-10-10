<template>
  <div id="easeljs001">
    <div class="main-title">GlobalToLocal2</div>
    <div class="main-title-time ">2019-05-29</div>
    <div class="main-title-tip">
      Follow the example GlobalToLocal2 of the EaselJS.<br/>
      URL: https://github.com/CreateJS/EaselJS/blob/master/examples/GlobalToLocal2.html<br/>
      Attention: Canvas.offsetLeft/offsetTop is invalid.
    </div>
    <br/>
    <div class="main-content-box">
      <canvas id="c001" width="1250" height="600"></canvas>
    </div>
  </div>
</template>

<script>
  require('script-loader!createjs/builds/1.0.0/createjs.min.js')
  var canvas
  var stage

  var _mouseIsDown
  var _mouseX
  var _mouseY

  var spin1
  var spin2

  var shape
  var color
  var lastPt
  var graphics
  var count = 0
  var colorOffset
  var text

  export default {
    name : 'easeljs001',
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
        canvas = document.getElementById('c001')
        stage = new createjs.Stage(canvas)
        stage.autoClear = false

        canvas.onmousemove = this.mouseMove
        canvas.onmousedown = this.mouseDown
        canvas.onmouseup = this.mouseUp

        var fade = new createjs.Shape(new createjs.Graphics().f("#fff ").dr(0, 0, canvas.width, canvas.height))

        fade.alpha = 0.02
        stage.addChild(fade)

        shape = new createjs.Shape()
        shape.y = 276
        graphics = shape.graphics

        // middle spinner:
        spin2 = new createjs.Container()
        spin2.addChild(shape)
        spin2.x = 391

        // outside spinner:
        spin1 = new createjs.Container()
        spin1.addChild(spin2)
        spin1.x = canvas.width / 2
        spin1.y = canvas.height / 2
        stage.addChild(spin1)

        text = new createjs.Text("Click and Drag", "36px Arial", "#777777")
        text.textBaseline = "middle"
        text.x = canvas.width / 2 - 120
        text.y = canvas.height / 2
        stage.addChild(text)

        //start ticking
        createjs.Ticker.interval = 20;		// 20ms = 50fps
        createjs.Ticker.addEventListener("tick", this.tick)

        stage.update()
      },

      tick(event){
        spin1.rotation += 10.7;
        spin2.rotation += -7.113;
        shape.rotation += 1.77;
        if (_mouseIsDown) {
          var color = createjs.Graphics.getHSL(
                  Math.cos((count++) * 0.1) * 30 + colorOffset,
                  100,
                  50,
                  0.8);

          graphics.setStrokeStyle(Math.random() * 20, "round").beginStroke(color);
          graphics.moveTo(0, 0);
          lastPt = shape.globalToLocal(_mouseX, _mouseY);
          graphics.lineTo(lastPt.x, lastPt.y);

          // draw the new vector line to the canvas:
          stage.update(event);

          // then clear the shape's vector data so it isn't rendered again next tick:
          graphics.clear();
        }
      },

      mouseMove(e){
        if(!e){
          var e = window.event
        }
        var box = canvas.getBoundingClientRect()
        _mouseX = e.pageX - box.left
        _mouseY = e.pageY - box.top
      },

      mouseDown(event){
        if(!event){
          var event = window.event
        }
        stage.removeChild(text)
        if(_mouseIsDown){
          return 
        }
        _mouseIsDown = true
        colorOffset = Math.random() * 360
        lastPt = shape.globalToLocal(event.pageX - canvas.getBoundingClientRect().left, event.pageY - canvas.getBoundingClientRect().top)
      },

      mouseUp(){
        _mouseIsDown = false
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
