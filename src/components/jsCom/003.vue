<template>
  <div id="js003">
    <div class="main-title">Excel Demo</div>
    <div class="main-title-time num">2020-04-03</div>
    <div class="main-title-tip">
      应好多小伙伴的要求，先增加一个小 Demo。该 Demo 仅用于展示功能，若有 Bug，请谅解，也可在 https://github.com/xrkffgg/Kvue/issues 提出来。目录 src/assets/excel 有一个待上传的 excel 例子。
    </div>
    <div class="main-content">
      <el-tag>导入</el-tag>
      <el-upload
        action=""
        style="margin-top:-32px; margin-left: 100px;"
        :on-change="handleChange"
        :file-list="fileListUpload"
        limit="1"
        accept=".xls,.xlsx"
        :auto-upload="false">
        <el-button :loading="disbtn" size="small" type="primary" icon="el-icon-upload2" >点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
      </el-upload>
      <el-table
        :data="list"
        stripe
        style="margin-top: 10px; width: 500px;"
        border>
        <el-table-column
          prop="name"
          label="名字"
          align="center">
        </el-table-column>

        <el-table-column
          prop="age"
          label="年龄"
          align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      fileListUpload: [],
      fileTemp: [],
      disbtn: false,
    }
  },

  methods: {
    // 上传附件
    handleChange (file, fileList) {
      this.fileTemp = file.raw
      this.doBegin()
    },

    doBegin(){
      if ((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.fileTemp.type == 'application/vnd.ms-excel')) {
        this.disbtn = true
        this.importfxx(this.fileTemp)
      } else {
        this.$message({
          type: 'warning',
          message: '附件格式错误，请删除后重新上传！'
        })
      }
    },

    // Excel 转化
    importfxx (obj) {
      let _this = this
      // 通过DOM取文件数据
      this.file = obj
      var rABS = false // 是否将文件读取为二进制字符串
      var f = this.file
      var reader = new FileReader()
      // if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var rABS = false // 是否将文件读取为二进制字符串
        var pt = this
        var wb // 读取完成的数据
        var outdata
        var reader = new FileReader()
        reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          var XLSX = require('xlsx')
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化
              type: 'base64'
            })
          } else {
            wb = XLSX.read(binary, {
              type: 'binary'
            })
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])// outdata就是你想要的东西
          this.da = [...outdata]
          let arr = []
          this.da.map(v => {
            let obj = {}
            obj.name = v['姓名']
            obj.age = v['年龄']
            arr.push(obj)
            _this.list = [...arr]
            _this.disbtn = false
          })
        }
        reader.readAsArrayBuffer(f)
      }
      if (rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
  },
}
</script>