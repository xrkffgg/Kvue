<template>
  <div id="js003">
    <div class="main-title">Excel Demo</div>
    <div class="main-title-time ">2020-04-03</div>
    <div class="main-title-tip">
      应好多小伙伴的要求，先增加一个小 Demo。该 Demo 仅用于展示功能，略粗糙，若有 Bug，请谅解，也可在 
      <a target="_blank" href="https://github.com/xrkffgg/Kvue/issues">https://github.com/xrkffgg/Kvue/issues</a> 提出来。可点击下载 Demo Excel，若因网络问题，可在目录 src/assets/excel 中查看。导出的 Excel 会自动下载到浏览器默认的下载地址中。引入 2 个 JS 文件，最新的查看 
      <a target="_blank" href="https://github.com/xrkffgg/Ktools/tree/master/JS/002.Excel">https://github.com/xrkffgg/Ktools/tree/master/JS/002.Excel</a>
    </div>
    <div class="main-content">
      <div style="display: flex; width: 340px; justify-content: space-between;">
        <el-button type="primary" plain size="small" @click="doDown">下载 Excel</el-button>
        <el-upload
          action=""
          :on-change="handleChange"
          :file-list="fileListUpload"
          :show-file-list="false"
          accept=".xls,.xlsx"
          :auto-upload="false">
          <el-button :loading="disbtn" size="small" type="primary">上传 Excel</el-button>
        </el-upload>
        <el-button  type="success" plain :loading="disbtn" size="small"  @click="doOut">导出 Excel</el-button>
      </div>
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
    doDown(){
      let url = 'https://raw.githubusercontent.com/xrkffgg/Kvue/master/src/assets/excel/demo.xlsx'
      window.location.href = url
    },

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

    // out
    doOut(){
      this.disbtn = true
      this.getExcel(this.list)
    },

    //  数组导入Excel
    getExcel(arr) { 　　　　　　
      require.ensure([], () => {
        // 这里 require 的地址指向你项目中 Export2Excel.js 文件存放地址
        const { export_json_to_excel } = require('../../js/Export2Excel.js')
        const tHeader = ['名字', '年龄']
        const filterVal = ['name', 'age']
        const list = arr
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '奥力给')
        this.disbtn = false
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
  },
}
</script>