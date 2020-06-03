
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
        x:{{x}} y:{{y}}
      </div>

      <div :class="isDraggable ? 'isdrag': ''">
        <VueDragResize
          :x="btn.x1"
          :y="btn.y1"
          :isResizable="false"
          :isDraggable="isDraggable"
          @dragging="resize">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <el-button>春天的风</el-button>
          </div>
        </VueDragResize>

        <VueDragResize 
          :x="btn.x2"
          :y="btn.y2"
          :isResizable="false"
          :isDraggable="isDraggable"
          @dragging="resize">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <el-button>夏天的雨</el-button>
          </div>
        </VueDragResize>

        <VueDragResize 
          :w="160"
          :h="50"
          :x="btn.x3"
          :y="btn.y3"
          :isResizable="false"
          :isDraggable="isDraggable"
          @dragging="resize">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <el-button>秋天的月</el-button>
          </div>
        </VueDragResize>

        <VueDragResize 
          :w="160"
          :h="50"
          :x="btn.x4"
          :y="btn.y4"
          :isResizable="false"
          :isDraggable="isDraggable"
          @dragging="resize">
          <div :class="isDraggable ? 'shake shake-constant hover-stop' : ''">
            <el-button>冬天的雪</el-button>
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
          x2: 350,
          y2: 350,
          x3: 400,
          y3: 400,
          x4: 450,
          y4: 450,
        },
        //页面使用数据
        isDraggable: false,
        x: '',
        y: '',
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      resize(newRect) {
        this.x = newRect.left
        this.y = newRect.top
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>
