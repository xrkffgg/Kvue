<template>
  <div id="his">
    <el-table
      stripe
      border
      height="550"
      style="min-width:100%"
      cell-class-name="cellname"
      row-key="time"
      :expand-row-keys="expands"
      :data="hisData"
      @expand-change="doExpand">
      <el-table-column type="expand">
        <template slot-scope="s">
          <template v-for="(it,index) in s.row.con">
            <div class="his-expand" :key="index">
              <el-tag :type="getHisIcon(it.type).t" size="medium">
                <i :class="getHisIcon(it.type).o"/>&nbsp;&nbsp;{{getHisIcon(it.type).i}}
              </el-tag>
              <div class="his-expand-text">{{it.text}}</div> 
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="time"
        label="日期"
        align="center"
        sortable
        min-width="100">
      </el-table-column>
      <el-table-column
        label="标签"
        align="center"
        min-width="120">
        <template slot-scope="srow">
          <template v-for="(it,index) in getHisTag(srow.row.con)">
            <el-tag :type="it.t" :key="index" size="medium">
              <i :class="it.o"></i>&nbsp;&nbsp;{{it.i}}
            </el-tag>&nbsp;&nbsp;&nbsp;
          </template>
        </template>
      </el-table-column>
      <el-table-column
        prop="version"
        label="版本"
        align="center"
        min-width="50">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import mixinCommon from '../../mixins/common'
  import HIS from './hisData'

  export default {
    name : 'his',
    mixins : [mixinCommon],
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
        hisData : HIS,
        expands : [],
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      doExpand(row,expRows){
        if(expRows.length > 0){
          this.expands.push(row.time)
          if(expRows.length >1){
            this.expands.shift()
          }
        }else {
          this.expands.shift()
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .his-expand {
    margin-left: 50px;
    padding-bottom: 10px;
    .his-expand-text {
      display: inline;
      margin-left: 20px;
    }
  }

</style>
