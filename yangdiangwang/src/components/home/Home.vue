<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="navbar">
      <ul class="nav-menu cl">
        <li class="menu-item fl" v-for="(item,index) in list" :key="index" @click="go(item.path)" 
        :class="[item.path==isShow?'active':'unactive']">
            <img v-if="isShow!=item.path" :src="item.img1" alt="">
            <img v-if="isShow==item.path" :src="item.img2" alt="">
            <p>{{item.txt}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      isShow:'',
      list:[
      {
        path: '/take',
        txt:'首页',
        img1:'static/img/index/tab_home_nor.png',
        img2:'static/img/index/tab_home_hig.png',
      },
       {
        path: '/list',
        txt:'分类',
        img1:'static/img/index/tab_menu_nor.png',
        img2:'static/img/index/tab_menu_hig.png',
      },
       {
        path: '/shopcart',
        txt:'购物车',
        img1:'static/img/index/tab_shopping_nor.png',
        img2:'static/img/index/tab_shopping_hig.png',
      },
       {
        path: '/mine',
        txt:'我',
        img1:'static/img/index/tab_me_nor.png',
        img2:'static/img/index/tab_me_hig.png',
      }
    ]
    }
  },
  mounted(){
    this.isShow = this.$route.path
  },
  methods:{
    go(path){
      this.isShow=path
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .home{
    width:100%;
    /* height:54.67rem 4100/75; */
    height: 100%;
    background: #fafafa;
    /* padding:0 .27rem; */
  }
  .navbar{
    position: fixed;
    bottom: 0;
    background:white;
    width: 100%;
    height: 1.37rem /* 103/75 */;
  }
  .nav-menu{
    display: flex;
    padding: 0 .71rem;
  }
  .menu-item{
    flex: 1;
    text-align: center;
  }
  a{
    color:#000;
    font-size: .28rem /* 21/75 */;
  }
  img{
    text-align: center;
  }
  .active{
    color: #ff9900
  }
  .unactive{
    color: black
  }
</style>
