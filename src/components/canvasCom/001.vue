<template>
  <div id="canvas001">
    <div class="main-title">canvas picture</div>
    <div class="main-title-time ">2019-08-15</div>

    <div class="box">
      <canvas id="canvas01" width="400" height="400"></canvas>
      <div class="btn">
        <el-button
        style="margin-left:50px;"
        :type="ifcolor ? 'primary' : 'info'"
        @click="changeGray"
      >
        {{ ifcolor ? '彩 色' : '黑 白' }}
      </el-button>
      <el-button
        :type="ifRev ? 'danger' : ''"
        @click="changeRev"
      >
        反 向
      </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'canvas001',
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
      this.drawCanvas()
    },

    data() {
      return {
        //页面展示数据
        ifcolor: true,
        ifRev: false,
        //页面使用数据

        //码表

        //js使用数据
        url: 'https://avatars0.githubusercontent.com/u/29775873?s=460&v=4',
        imagePixels: [],
        //子组件使用数据

        //rules

      }
    },

    methods: {
      drawCanvas(){
        var cav = document.getElementById('canvas01')
        var ctx = cav.getContext('2d')
        var img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = this.url + '?time=' + new Date().getTime()
        img.onload = () =>{
          if(img.complete){
            ctx.drawImage(img,0,0,img.width,img.height)
            setTimeout(() =>{
              this.imagePixels = [...ctx.getImageData(0,0,cav.width,cav.height).data]
            },1)
          }
        }
      },

      changeGray(){
        var cav = document.getElementById('canvas01')
        var ctx = cav.getContext('2d')
        let imageData = ctx.getImageData(0,0,cav.width,cav.height)
        let pixels = imageData.data
        if(this.ifcolor){
          //遍历像素点
          for (let i=0; i<pixels.length; i+=4){
            let r = pixels[i]
            let g = pixels[i+1]
            let b = pixels[i+2]
            
            //获取灰色
            let gray = parseInt((r+g+b)/3)
            imageData.data[i] = gray
            imageData.data[i+1] = gray
            imageData.data[i+2] = gray
          }
          ctx.putImageData(imageData, 0,0)
        } else {
          let data = [...this.imagePixels]
          for (let i=0; i<pixels.length; i+=4){
            let r = data[i]
            let g = data[i+1]
            let b = data[i+2]

            if(this.ifRev){
              r = 255- r
              g = 255- g
              b = 255- b
            }
            imageData.data[i] = r
            imageData.data[i+1] = g
            imageData.data[i+2] = b
          }
          ctx.putImageData(imageData, 0,0)
        }
        this.ifcolor = !this.ifcolor
      },

      changeRev(){
        this.ifRev = !this.ifRev
        var cav = document.getElementById('canvas01')
        var ctx = cav.getContext('2d')
        let imageData = ctx.getImageData(0,0,cav.width,cav.height)
        let pixels = imageData.data
        for (let i=0; i<pixels.length; i+=4){
          let r = pixels[i]
          let g = pixels[i+1]
          let b = pixels[i+2]
          imageData.data[i] = 255 - r
          imageData.data[i+1] = 255 - g
          imageData.data[i+2] = 255- b
        }
        ctx.putImageData(imageData, 0,0)
      },
    }
  }
</script>

<style scoped lang="scss">
  .box {
    padding: 20px;
    display: flex;
  }
</style>
