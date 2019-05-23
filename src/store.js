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
        version : 'v0.1',
        con : [
          {
            type : 'new',
            text : `Kvue项目初版主页完成，
                    包含有head、sider、main。
                    side联动、若干特效。Home图标、版本记录、3dcube。`
          },
        ],
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
