import * as array from './array' 
export default {
  data() {
    return {

    }
  },

  methods: {
    // window.open
    doGoGit(){
      window.open('https://github.com/xrkffgg/Kvue')
    },

    doGoGitUser(){
      window.open('https://github.com/xrkffgg')
    },

    doGoTwiiter(){
      window.open('https://twitter.com/xrkffgg')
    },

    doGoGitIssues(){
      window.open('https://github.com/xrkffgg/Kvue/issues')
    },

    doGoJuejin(){
      window.open('https://juejin.im/user/59c369496fb9a00a4843a3e2')
    },

    doGoJianshu(){
      window.open('https://www.jianshu.com/u/4ca4daac5890')
    },

    // HIS 处理
    //  icon
    getHisIcon(type){
      let obj = {}
      let i,t,o
      switch (type){
        case 'new':
          i = '新 增'
          t = ''
          o = 'el-icon-plus'
          break;
        case 'fix':
          i = '修 复'
          t = 'success'
          o = 'el-icon-check'
          break; 
        case 'opt':
          i = '优 化'
          t = 'warning'
          o = 'el-icon-finished'
          break;
      }
      obj.i = i
      obj.t = t
      obj.o = o
      return obj
    },

    //  tag
    getHisTag(con){
      let arr = []
      con.map(it =>{
        let o = this.getHisIcon(it.type)
        arr.push(o)
      })
      return array.default.methods.delArrHasObjSome(arr,'o')
    },
  },
}