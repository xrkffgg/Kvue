<template>
  <div id="css002">
    <div class="main-title">CSS 动画样式</div>
    <div class="main-content">
      <el-tabs tab-position="left">
        <el-tab-pane label="图片旋转">
          <div class="main-title-time num">2019-05-16</div>
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="tag">
                <el-tag>animation</el-tag>
              </div>
              <div class="skin">
                <div class="box rotation"></div>
              </div>
              <el-input
                type="textarea"
                readonly
                style="margin-top:20px;"
                :autosize="{ minRows: 3, maxRows: 4}"
                v-model="texta1">
              </el-input>
            </el-col>
            <el-col :span="8">
              <div class="tag">
                <el-tag>js animation</el-tag>
              </div>
              <div class="skin">
                <div id="jsrotarion" class="box rotationjs"></div>
              </div>
              <el-input
                type="textarea"
                readonly
                style="margin-top:20px;"
                :autosize="{ minRows: 3, maxRows: 4}"
                v-model="texta2">
              </el-input>
            </el-col>
            <el-col :span="8">
              <div class="tag">
                <el-tag>transform</el-tag>
              </div>
              <div class="skin">
                <div class="box transf"></div>
              </div>
              <el-input
                type="textarea"
                readonly
                style="margin-top:20px;"
                :autosize="{ minRows: 3, maxRows: 4}"
                v-model="texta3">
              </el-input>
            </el-col>

          </el-row>
          
        </el-tab-pane>
        <el-tab-pane label="播放按钮">
          <div class="main-title-time num">2019-09-19</div>
          <div class="css-show-box">
            <label>
              <input type="checkbox" id="status" />
              <svg width="108px" height="108px" viewBox="-37 -29 108 108" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle id="bg-circle" stroke="none" fill="#F6A623" fill-rule="evenodd" cx="17" cy="25" r="54"></circle>
                <path class="left"/>
                <path class="right"/>
              </svg>
            </label>
          </div>
        </el-tab-pane>

        <el-tab-pane label="融合粘滞效果">
          <div class="main-title-time num">2019-09-23</div>
          <div class="css-show-box black">
            <div class="box3 box-1"></div>
            <div class="box3 box-2"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    
  </div>
</template>

<script>

  export default {
    name : 'css002',
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
      this.jsrotation()
    },

    data() {
      return {
        //页面展示数据

        //页面使用数据
        texta1 : `animation自定义动画，animation-play-state的状态来控制动画的启停，由于转动使用的是deg，暂无法判断结束时候的角度，So无法恢复原状。`,
        texta2 : `同animation，通过JS控制动画的启停。`,
        texta3 : `rotate使用turn时，表示转多少圈，这样可以使图片恢复正常位置，当完成指定圈数，转动停止。`,
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      jsrotation(){
        var j = document.getElementById('jsrotarion')

        j.onmouseover = () =>{
          j.style.animationPlayState = 'running'
        }
        j.onmouseout = () =>{
          j.style.animationPlayState = 'paused'
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  // 
  .css-show-box {
    width: 500px;
    height: 400px;
    border: 1px solid #80808080;
    border-radius: 4px;
    margin: 50px auto;
    padding: 50px;
  }

  // 1
  .tag {
    left:36%;
    margin-top: 40px;
    position: relative;
  }

  .skin {
    left: 33%;
    margin-top: 20px;
    width: 100px;
    height: 100px;
    position: relative;
    background: #cfcfcc;
    
    .box {
      left: 25px;
      top:25px;
      width: 50px;
      height: 50px;
      position: relative;
      background: #1989fa;
    }

    .rotation{
      animation: rotation 1s linear infinite;
      -webkit-animation: rotation 1s linear infinite;
      animation-play-state:paused;
      -webkit-animation-play-state:paused; 
    }

    .rotation:hover{
      animation-play-state: running;
      -webkit-animation-play-state: running;
    }

    .rotationjs{
      animation: rotation 1s linear infinite;
      -webkit-animation: rotation 1s linear infinite;
      animation-play-state:paused;
      -webkit-animation-play-state:paused; 
    }

    .transf:hover {
      transform: rotate(10turn);
      -webkit-transform: rotate(10turn);
      transition: all 10s linear 0s;
      -webkit-transition: all 10s linear 0s;
    }
  }

  @-webkit-keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }

  @keyframes rotation{
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  // 2
  #status {
    display: none;
  }

  .left, .right {
    fill: #FFF;
    transition: all .5s;
  }

  .left {
    d: path('M0 1 0 49 22 37.183075 22 11.8525238Z');
  }
  .right {
    d: path('M44.096035 24.8759317 44.096035 24.8759317 22 37.6656866 22 12.2530012Z');
  }

  #status:checked + svg .left {
    d: path('M0 1 0 49 10 49 10 1Z');
  }
  #status:checked + svg .right {
    d: path('M35 0 35 50 25 50 25 0Z');
  }

  // 3
  .black {
    background-color: #000;
  }
  .box3 {
    width: 100px; height: 100px;
    border-radius: 50%;
    position: absolute;
    filter: blur(10px) contrast(5);
  }
  .box-1 {
    background-color: deepskyblue;
    animation: fly-r 5s infinite alternate;
  }
  .box-2 {
    width: 60px; height: 60px;
    margin-top: 20px;
    background-color: white;
    animation: fly-l 5s infinite alternate;
  }
  @keyframes fly-r {
    from { transform: translateX(0); }
    to   { transform: translateX(120px); }
  }
  @keyframes fly-l {
    from { transform: translateX(120px); }
    to   { transform: translateX(0); }
  }

</style>
