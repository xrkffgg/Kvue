import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarName : '',
    copy_year : '2019',
    //  fix opt new 修复/优化/新增
    hisData : [
      {
        time : '2019-05-23',
        version : 'v0.8',
        con : [
          {
            type : 'fix',
            text : '修复ss'
          },
          {
            type : 'fix',
            text : '修复ss2'
          },
          {
            type : 'new',
            text : 'newss'
          },
        ],
      },
      // {
      //   time : '2019-05-21',
      //   version : 'v0.7',
      //   con : [
      //     {
      //       type : 'opt',
      //       text : '优化ss'
      //     },
      //     {
      //       type : 'new',
      //       text : 'newss'
      //     },
      //   ],
      // },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
