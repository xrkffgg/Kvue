<template>
  <div id="css003">
    <div class="main-title">炫酷文字</div>
    <div class="main-content">
      <el-tabs tab-position="left">
        
        <!-- 2 -->
        <el-tab-pane label="彩虹文字">
          <div class="main-title-time num">2019-09-19</div>
          <div class="flow-slogon">动感超人</div>
        </el-tab-pane>

        <!-- 3 -->
        <el-tab-pane label="打字效果">
          <div class="main-title-time num">2019-09-23</div>
          <p class="typing">简易中文打字效果，作者：张鑫旭</p>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'css003',
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
// 2
.flow-slogon {
  margin-left: 400px;
  font-size: 100px;
  letter-spacing: 5px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, red, yellow, lime, aqua, blue, fuchsia);
  animation: hue 6s linear infinite;
}

@keyframes hue {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}

// 3
.typing {
    font-size: 22px;
    width: 15em;
    white-space: nowrap;
    border-right: 2px solid transparent;
    animation: typing 3.5s steps(15, end), blink-caret .75s step-end infinite;
    overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
  from { width: 0; }
  to { width: 15em; }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from, to { box-shadow: 1px 0 0 0 transparent; }
  50% { box-shadow: 1px 0 0 0; }
}
</style>
