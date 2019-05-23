export default {
  data() {
    return {
      
    }
  },

  methods: {
    // arr 传入数组 key 判断字段
    delArrHasObjSome(arr,key){
      let obj = {}
      let result = []
      result = arr.reduce((item,next) =>{
        obj[next[key]] ? '':obj[next[key]] = true && item.push(next)
        return item
      }, [])
      return result
    }
  },
}