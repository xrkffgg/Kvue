<template>
  <div id="css002">
    <div class="main-title">CSS 动画样式</div>
    <div class="main-title-time num">2019-05-16</div>
    <div class="main-content">
      <el-tabs tab-position="left">
        <el-tab-pane label="图 片 旋 转">
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
</style>
