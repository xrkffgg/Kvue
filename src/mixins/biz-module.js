export default {
  data(){
    return {
      
    }
  },

  methods:{
    //  校验后台返回数据的是否正确
    checkres(data){
      if(data.code !=0){
        return this.$message.error(data.msg)
      } else {
        return data
      }
    },

  }
}