
<template>
  <div id="js004">
    <div class="main-title">Drag rezise Demo</div>
    <div class="main-title-time num">2020-06-03</div>
    <div class="main-title-tip">
      项目中引用的 csshake 为简版，完整版请查看 <a target="_blank" href="https://github.com/xrkffgg/Ktools/blob/master/CSS/csshake.css">https://github.com/xrkffgg/Ktools/blob/master/CSS/csshake.css</a>
    </div>
    <div class="main-content" >
      <el-button
        type="primary"
        style="width: 200px;"
        @click="isDraggable = !isDraggable">
        {{ !isDraggable ? '开 启' : '关 闭' }}
      </el-button>
      <div class="xyshow">
        x:{{x}} y:{{y}} w:{{w}} h:{{h}}
      </div>

      <div :class="isDraggable ? 'isdrag': ''">
        <VueDragResize
          :w="btn.w1"
          :h="btn.h1"
          :x="btn.x1"
          :y="btn.y1"
          :isResizable="isDraggable"
          :isDraggable="isDraggable"
          @resizing="resize1"
          @dragging="resize1">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <div
              id="btn-1"
              class="b1">
              春天的风
            </div>
          </div>
        </VueDragResize>

        <VueDragResize 
          :w="btn.w2"
          :h="btn.h2"
          :x="btn.x2"
          :y="btn.y2"
          :isResizable="isDraggable"
          :isDraggable="isDraggable"
          @resizing="resize2"
          @dragging="resize2">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <div 
              id="btn-2"
              class="b2">
              夏天的雨</div>
          </div>
        </VueDragResize>

        <VueDragResize
          :w="btn.w3"
          :h="btn.h3"
          :x="btn.x3"
          :y="btn.y3"
          :isResizable="isDraggable"
          :isDraggable="isDraggable"
          @resizing="resize3"
          @dragging="resize3">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <div 
              id="btn-3"
              class="b3">
              秋天的月</div>
          </div>
        </VueDragResize>

        <VueDragResize
          :w="btn.w4"
          :h="btn.h4"
          :x="btn.x4"
          :y="btn.y4"
          :isResizable="isDraggable"
          :isDraggable="isDraggable"
          @resizing="resize4"
          @dragging="resize4">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <div 
              id="btn-4"
              class="b4">冬天的雪</div>
          </div>
        </VueDragResize>
      </div>
    </div>
  </div>
</template>

<script>
  import VueDragResize from 'vue-drag-resize';

  export default {
    name : 'js001',
    mixins : [],
    components: {
      VueDragResize
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
        btn: {
          x1: 300,
          y1: 300,
          x2: 250,
          y2: 450,
          x3: 500,
          y3: 300,
          x4: 450,
          y4: 450,
          w1: 160,
          h1: 80,
          w2: 160,
          h2: 80,
          w3: 160,
          h3: 80,
          w4: 160,
          h4: 80,
        },
        //页面使用数据
        isDraggable: false,
        x: '',
        y: '',
        w: '',
        h: '',
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      resize(n,newRect) {
        this.x = newRect.left
        this.y = newRect.top
        this.w = newRect.width
        this.h = newRect.height

        let d = document.getElementById(`btn-${n}`)
        d.setAttribute('style', `width: ${newRect.width}px; height: ${newRect.height}px`)
      },

      resize1(newRect){
        this.resize(1, newRect)
      },
      resize2(newRect){
        this.resize(2, newRect)
      },
      resize3(newRect){
        this.resize(3, newRect)
      },
      resize4(newRect){
        this.resize(4, newRect)
      },
    }
  }
</script>

<style lang="scss">
  .vdr.active:before {
    outline: none;
  }
  .isdrag .el-button {
    cursor: move !important;
  }

  .xyshow {
    font-size: 22px;
    margin: 20px;
  }

  .b1,.b2,.b3,.b4 {
    width: 160px;
    height: 80px;
    border-radius: 4px;
    font-size: 22px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
  }

  .b1 {
    background: linear-gradient(45deg, #72de7a 30%, #34abbf 90%);
    box-shadow: 0 3px 5px 2px rgba(105, 255, 137, 0.3);
  }

  .b2 {
    background: linear-gradient(45deg, #72a2de 30%, #60d8ec 90%);
    box-shadow: 0 3px 5px 2px rgba(105, 186, 255, 0.3);
  }

  .b3 {
    background: linear-gradient(45deg, #f3b037 30%, #de8556 90%);
    box-shadow: 0 3px 5px 2px rgba(216, 179, 46, 0.3);
  }

  .b4 {
    background: linear-gradient(45deg, #d4a7b1 30%, #ece8e5 90%);
    box-shadow: 0 3px 5px 2px rgba(214, 118, 137, 0.3);
  }
</style>
