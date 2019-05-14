export default {
  data(){
    return {
      // 业务码表集 ----->
      dict : {
        


      }
      // 业务码表集 <------
    }
  },

  methods:{
    /**
     * 业务码表转化
     * @param (dict_type,dict_id)
     * @return dict_name
     */

    getDictName (type, id) {
      if (!this.dict[type]) {
        return ''
      } else {
        // eslint-disable-next-line eqeqeq
        let r = this.dict[type].find(o => o.id == id)
        return r ? r.name : id
      }
    }
  }
}