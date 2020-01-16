<template lang="pug">
  #ui002
    .main-title 自定义按钮
    .main-title-time.num 2020-01-16
    .main-content
      el-button(type="primary" @click="dodo") 配置
      .btns

</template>

<script>
export default {
  methods: {
    dodo() {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .btns {
    margin-top: 200px;
    height: 200px;
    z-index: 1001;
    background: hsla(0, 0%, 100%, .75);
    box-shadow: 0 0 0 50vmax rgba(0,0,0,0.6);
    -webkit-backdrop-filter: blur(5px);    
    backdrop-filter: blur(5px);    
  }
</style>