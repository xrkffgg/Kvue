<template>
  <div id="siderbarcom">
    <div class="avatarbox">
      <div id="avatarId" class="box-circle rotation">
        <div id="fillId" class="fill"></div>
      </div>
      <div class="box-font">
        xrkffgg
      </div>
    </div>

    <el-menu
      :unique-opened="true"
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
  // var funavatar = function(){
  //   var avatar = document.getElementById('avatarId')
  //   console.log(avatar)
  //   avatar.onmouseover = function(){
  //     avatar.style.animationPlayState = 'running'
  //   }
  // }

  // funavatar()

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
        this.$router.replace({name : it.name})
      },

      // onAvatar(){
      //   var ad = document.getElementById('avatarId')
      //   var fd = document.getElementById('fillId')
        
      //   ad.onmouseover = () =>{
      //     ad.style.animationPlayState = 'running'

      //   }
      //   ad.onmouseout = () =>{
      //     // ad.style.animation = 'rotation .1s linear infinite'
      //     ad.style.animationPlayState = 'paused'
      //   }
      // },


      gettime(i){
        let y = 10 - 0.099* i * i 
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
