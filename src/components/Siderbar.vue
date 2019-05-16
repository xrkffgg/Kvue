<template>
  <div id="siderbarcom">
    <div class="avatarbox">
      <div id="avatarId" class="box-circle">
        <div id="fillId" class="fill"></div>
      </div>
      <div class="box-font num">
        xrkffgg
      </div>
    </div>

    <el-menu
      unique-opened
      class="el-menu-vertical-demo">
      <template v-for="list in lists">
        <el-submenu :index="list.name" :key="list.side_id" v-if="list.children && list.children.length > 0">
          <template slot="title">
            <i :class="list.side_icon" v-if="list.side_icon"/>
            <i :class="default_icon" v-else/>
            <span>{{list.side_name}}</span>
          </template>
          
          <el-menu-item v-for="listc in list.children" :index="listc.name" :key="listc.name" @click="goto(listc)">
            <i :class="listc.side_icon" v-if="listc.side_icon"/>
            <i :class="default_icon" v-else/>
            <span>{{listc.side_name}}</span>
          </el-menu-item>

        </el-submenu>
        <el-menu-item v-else :key="list.name" :index="list.name" @click="goto(list)">
          <i :class="list.side_icon" v-if="list.side_icon"/>
          <i :class="default_icon" v-else/>
          <span>{{list.side_name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import {ROUTES} from '../router.js'
  export default {
    name : 'siderbarcom',
    components: {

    },

    props:[

    ],

    created(){
      this.init()
    },

    watch:{

    },  

    mounted(){
      // this.onAvatar()
    },

    data() {
      return {
        //页面展示数据
        lists : [],
        //页面使用数据
        default_icon : 'el-icon-star-on',
        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      init(){
        this.lists = ROUTES[0].children
      },
      goto(it){
        console.log(it.name)
        this.$router.replace({name : it.name})
      },

    }
  }
</script>

<style scoped lang="scss">

</style>
