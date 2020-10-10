<template>
  <div id="ui003">
    <div class="main-title">Table Merge Demo</div>
    <div class="main-title-time ">2020-08-17</div>
    <el-divider />
    <el-row style="margin-top: 20px;">
      <el-col :span="20" :offset="2">
        <el-table
          :data="list1"
          border
          :span-method="spanMethod1"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            align="center"
            show-overflow-tooltip
            min-width="250">
          </el-table-column>

          <el-table-column
            label="序号"
            align="center"
            width="100"
            class-name="sub_row">
            <template slot-scope="s">
              <el-table
                stripe
                :data="s.row.list"
                :show-header="false">
                <el-table-column
                  type="index"
                  align="center"
                  width="100">
                </el-table-column>

                <el-table-column
                  prop="date"
                  align="center"
                  min-width="150">
                </el-table-column>

                <el-table-column
                  prop="count"
                  align="center"
                  min-width="150">
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>

          <el-table-column 
            label="时间"
            align="center"
            min-width="150">
          </el-table-column>

          <el-table-column 
            label="数量"
            align="center"
            min-width="150">
            <template slot="header">
              <el-tooltip content="shu-liang" placement="top">
                <span>数量</span>
              </el-tooltip>
            </template>
          </el-table-column>
      
        </el-table>
      </el-col>
    </el-row>
    <el-divider />
    <el-row style="margin-top: 20px">
      <el-row id="ana-add" :span="20" :offset="2">
        <el-table
          border
          stripe
          v-loading="formLoading"
          size="small"
          :data="dataList"
          style="width: 100%;">
          <el-table-column label-class-name="header1" label="基本信息" align="center">
            <el-table-column
              prop="contrabandTypeName"
              label="类型"
              label-class-name="header1"
              show-overflow-tooltip
              align="center"
              min-width="140">
            </el-table-column>

            <el-table-column
              prop="itemName"
              label="名"
              label-class-name="header1"
              show-overflow-tooltip
              align="center"
              width="122">
            </el-table-column>

            <el-table-column
              prop="sampleCode"
              label="编号"
              sortable
              label-class-name="header1"
              show-overflow-tooltip
              align="center"
              width="100">
              <template slot-scope="s">
                <el-popover
                  placement="top"
                  trigger="click">
                  <img
                    style="width:296px; height:236px; object-fit:scale-down;"
                    :src="apiURL + s.row.sampleUrl"/>
                  <el-button style="text-decoration: underline;" type="text" size="small" slot="reference">
                    {{ s.row.sampleCode }}
                  </el-button>
                </el-popover>
              </template>
            </el-table-column>
          </el-table-column>

          <el-table-column
            label-class-name="header1"
            label="版本号"
            show-overflow-tooltip
            align="center"
            width="90">
            <template slot-scope="s">
              {{ args.algorithmVersion }}
            </template>
          </el-table-column>

          <el-table-column
            prop="deviceModelName"
            label-class-name="header1"
            label="型号"
            sortable
            show-overflow-tooltip
            align="center"
            width="120">
          </el-table-column>

          <el-table-column label-class-name="header2" label="方式" align="center">
            <el-table-column
              prop="angleName"
              label="角度"
              sortable
              label-class-name="header2"
              show-overflow-tooltip
              align="center"
              width="100">
            </el-table-column>

            <el-table-column
              prop="shadeDegreeName"
              label="程度"
              sortable
              label-class-name="header2"
              show-overflow-tooltip
              align="center"
              width="100">
            </el-table-column>
          </el-table-column>

          <el-table-column label-class-name="header3" label="结果" align="center">
            <el-table-column 
              prop="checkoutCount" 
              label="数量"
              label-class-name="header3"
              align="center" 
              show-overflow-tooltip
              width="90">
            </el-table-column>

            <el-table-column
              prop="misdeclarationCount"
              label="误报数"
              label-class-name="header3"
              align="center"
              show-overflow-tooltip
              width="90">
            </el-table-column>

            <el-table-column
              prop="missCount"
              label="漏检数"
              label-class-name="header3"
              align="center"
              show-overflow-tooltip
              width="90">
            </el-table-column>

            <el-table-column 
              label="总数"
              label-class-name="header3"
              align="center" 
              show-overflow-tooltip
              width="90">
              <template slot-scope="s">
                {{ (s.row.contrabandCount) }}
              </template>
            </el-table-column>

            <el-table-column
              label="检出率"
              align="center"
              label-class-name="header3"
              min-width="100">
              <template slot-scope="s">
                <div style="color:#0061AE;text-decoration:underline;cursor:pointer;" @click="doShowCheck(s.row)">
                  {{ s.row.checkoutRate + '%' }}
                </div>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ui003',

  data() {
    return {
      list1: [
        {
          name: 'name1',
          list: [
            {date: '2015-01-02', count: '12',},
            {date: '2015-01-03', count: '13',},
          ]
        },
        {
          name: 'name2',
          list: [
            {date: '2015-02-02', count: '22',},
            {date: '2015-02-03', count: '23',},
          ]
        },
        {
          name: 'name3',
          list: [
            {date: '2015-03-02', count: '32',},
            {date: '2015-03-03', count: '33',},
          ]
        },
      ],
    }
  },

  mounted () {
    this.changeColor();
  },

  methods: {
    spanMethod1({ row, column, rowIndex, columnIndex }) {
      const arr = [1, 2, 3] // 需要隐藏宽度的列的index
      if(columnIndex === 1) {
        return {
          rowspan: 1,
          colspan: 3,
        }
      } else if(arr.includes(columnIndex)){
        return {
          rowspan: 0,
          colspan: 0,
        }
      }
    },

    changeColor(){
      this.tempSetInte = setInterval(() =>{
        let ds = document.getElementsByClassName('header3')
        let d = ds[0]
        if(d){
          clearInterval(this.tempSetInte)
          ds[0].style.backgroundColor = '#268fe2'
          ds[2].style.backgroundColor = '#268fe2'
          ds[4].style.backgroundColor = '#268fe2'
          ds[6].style.backgroundColor = '#268fe2'
          ds[8].style.backgroundColor = '#268fe2'
          ds[10].style.backgroundColor = '#268fe2'
        }
      },1)
    },
  },
}
</script>

<style lang="scss">
  .el-table{
    td.sub_row {
      padding: 0;
      border-bottom: none;
      border-right: none;
      &>.cell {
        padding: 0;
      }
    } 
  }

  .header1 {
    color: #fff;
    background-color: #9093997d;
    padding: 6px 0;
  }

  .header2 {
    color: #fff;
    background-color: #52c41a8c;
    padding: 6px 0;
  }

  .header3 {
    color: #fff;
    background-color: #238ee2ad;
    padding: 6px 0;
  }

  .el-table .sort-caret.ascending {
    border-bottom-color: #fff;
  }

  #ana-add .el-table--small th {
    padding: 0 0;
  }

  #ana-add .el-table thead.is-group th {
    background: #91939a;
  }
</style>
