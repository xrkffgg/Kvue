<template>
  <div id="js005">
    <div class="main-title">摄像头拍照</div>
    <div class="main-title-time num">2020-07-15</div>
    <div class="main-title-tip">
      Vue 调取 自身摄像头 或 外接 USB 摄像头，生成 截图 和 Base 64。
    </div>
    <div class="main-content">
      <el-row>
        <el-col :span="12" style="display:flex; justify-content: space-between;">
          <el-select @change="getStream" v-model="value" placeholder="摄像头接入源" style="width: 360px;">
            <el-option
              v-for="item in options"
              :key="item.deviceId"
              :label="item.label"
              :value="item.deviceId">
            </el-option>
          </el-select>
          <el-button style="width:120px;" @click="doCut" type="primary" plain>截 图</el-button>
        </el-col>
      </el-row>
      
      <el-row style="margin-top: 20px">
        <el-col :span="12">
          <div class="video1">
            <video id="video" width="640" height="480" autoplay></video>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="video2">
            <canvas id="canvas" style="margin-top: 20px;" width="320" height="240"></canvas>
            <el-input
              type="textarea"
              :rows="6"
              style="width: 500px;"
              v-model="textarea">
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'js005',
    mixins : [],
    components: {

    },

    props:[

    ],

    created(){

    },

    watch:{

    },  

    activated() {
      this.loadVideoSource()
    },

    mounted(){
      this.loadVideoSource()
    },

    data() {
      return {
        //页面展示数据
        value: '',
        textarea: '',
        //页面使用数据
        options: [],
        //码表

        //js使用数据
        mediaConfig: {
          video: true
        },
        //子组件使用数据

        //rules

      }
    },

    methods: {
      loadVideoSource() {
        // Put video listeners into place
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia(this.mediaConfig).then(function (stream) {
            video.srcObject = stream;
            video.play();
          }, (e) => {console.log(e)});
        } else if (navigator.getUserMedia) { // Standard
          navigator.getUserMedia(this.mediaConfig, function (stream) {
            video.src = stream;
            video.play();
          }, (e) => {console.log(e)});
        } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
          navigator.webkitGetUserMedia(this.mediaConfig, function (stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
          }, (e) => {console.log(e)});
        } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
          navigator.mozGetUserMedia(this.mediaConfig, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
          }, (e) => {console.log(e)});
        }

        navigator.mediaDevices.enumerateDevices().then(this.gotDevices).then(this.getStream).catch(this.handleError);
      },

      gotDevices(deviceInfos) {
        let arr = [];
        deviceInfos.map(it =>{
          if(it.kind == 'videoinput'){
            arr.push(it);
          }
        })
        this.options = arr;
        this.value = arr[0].deviceId;
      },

      getStream() {
        if (window.stream) {
          window.stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }

        var constraints = {
          video: {
            deviceId: this.value
          }
        };

        navigator.mediaDevices.getUserMedia(constraints).then(this.gotStream).catch(this.handleError);
      },

      gotStream(stream) {
        var videoElement = document.querySelector('video');
        window.stream = stream; // make stream available to console
        videoElement.srcObject = stream;
      },

      doCut() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');
        context.drawImage(video, 0, 0, 320, 240);
        var imageData = canvas.toDataURL('Image/jpeg', 1);//获取canvas中绘制的数据
        this.textarea = imageData;
      }, 

      base64DateUrlToBlob(base64DataUrl, type) {
        //去掉url的头，并转换为bytes
        var bytes = window.atob(base64DataUrl.split(',')[1]);
        //处理异常,将ascii码小于0的转换为大于0
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], { type: type });
      },

      handleError(err){
        console.log(err);
      },
    }
  }
</script>

<style scoped lang="scss">
  .video1 {
    border: 1px dashed #909399;
    display: flex;
    height: 520px;
    align-items: center;
    justify-items: center;
    border-radius: 4px 0 0 4px;
  }

  .video2 {
    @extend .video1;
    border-left: none;
    align-items: start;
    display: grid;
    border-radius: 0 4px 4px 0;
  }
</style>
