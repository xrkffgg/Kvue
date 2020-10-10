<template>
  <div id="js001">
    <div class="main-title">数字转千分</div>
    <div class="main-title-time ">2019-09-18</div>
    <div class="main-title-tip">
      各有优缺
    </div>
    <div class="main-content">
      <el-form
        label-width="100px"
        v-model="form"
        style="width: 500px;">
        <el-row>
          <el-form-item label="转化前">
            <el-input clearable @clear="form.after = ''" type="number" placeholder="请输入" v-model="form.before"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="转化后">
            <el-input readonly v-model="form.after"></el-input>
          </el-form-item>
        </el-row>
      </el-form>

      <div class="btns">
        <div v-for="(btn, index) in btns" :key="index" style="margin-left: 20px;">
          <el-button :loading="btnloading" type="primary" @click="doChange(index+1)">{{ index+1 + ' ' + btn.name }}</el-button>
        </div>
      </div>

      <el-tag style="margin-left: 40px; margin-top: 20px;">工具JS</el-tag>
      
      <el-link
        style="margin-left: 10px;"
        href="https://github.com/adamwdraper/Numeral-js" 
        target="_blank"
        type="primary">
        numeraljs
      </el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'js001',
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
        form: {
          before: '',
          after: '',
        },

        btns: [
          {
            name: '零宽断言',
          },
          {
            name: '子项替换',
          },
          {
            name: '数组互转',
          },
          {
            name: '字符加分割',
          },
          {
            name: '数组加分割',
          },
          {
            name: 'JS自带方法',
          },
        ],
        //页面使用数据
        btnloading: false,
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      doChange(k){
        this.btnloading = true
        let b = this.form.before
        let a
        switch (k) {
          case 1:
            a = b.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){ return s+',' })
            break;
          case 2:
            a = b.replace(/(\d{1,3})(?=(\d{3})+$)/g,function($1){ return $1=$1+',' })
            break;
          case 3:
            a = b.split("").reverse().join("").replace(/(\d{3})+?/g,function(s){ return s+","; }).replace(/,$/,"").split("").reverse().join("")
            break;
          case 4:
            a = this.fun4(b)
            break;
          case 5:
            a = this.fun5(b)
            break;
          case 6:
            a = (+b).toLocaleString()
          default:
            break;
        }
        this.form.after = a
        this.btnloading = false
      },

      fun4(str){
        // 利用循环拼接字符串每隔3个加一个分隔符
        var result="",
            index = 0,
            len = str.length-1;
        while(len>=0) {
            index%3===0&&index!==0 ? result+=","+str[len] : result+=str[len];
            len--;
            index++;
        };
        result=result.split("").reverse().join("");
        return result
      },

      fun5(str){
        // 利用while循环在数组里push分隔符
        var result="",
            index = 0,
            len = str.length,
            i = len-1,
            arr = str.split("");
        
        while(len-index>0){
            len>=index&&len-index!==len && arr.splice(len-index,0,",");
            index+=3;
            i-=4;
        };
        return arr.join("")
      },
    }
  }
</script>

<style scoped lang="scss">
  .btns {
    display: flex;
  }
</style>
