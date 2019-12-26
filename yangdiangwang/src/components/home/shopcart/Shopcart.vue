<template>
  <div class="shopcart">
    <div class="top">
      <img src="../../../assets/img/shopcart/nav_icon_back.png" alt="" class="top_img">
      <span class="car">购物车</span>
    </div>
    <div class="main">
      <Shopyes v-if="isShow"></Shopyes>
      <Shopno v-if='!isShow'></Shopno>
    </div>
  </div>
</template>
<script>
import Shopyes from '@/components/home/shopcart/shopyes'
import Shopno from '@/components/home/shopcart/shopno'
export default {
  name:'Shopcart',
  data() {
    return {
      isShow:true
    }
  },
  mounted() {
    if(localStorage.getItem("item")){
      this.isShow=true
    }else{
      this.isShow=false
    }
  },
  created(){
      this.bus.$on('Shopno',(res)=>{
          console.log(res);
      if(res.length==0){
         this.isShow=false
      }
    })
  },
  components:{
    Shopyes,Shopno
  }
}
</script>
<style scoped>
  .top{
    width: 100%;
    height: 1.79rem /* 134/75 */;
    background: #ff9900
  }
  .top_img{
    margin-top: .67rem /* 50/75 */;
    margin-left:.51rem /* 38/75 */
  }
  .car{
    color: white;
    font-size: .53rem /* 40/75 */;
    text-align: center;
    margin-left: 35%;
    /* margin-top: 20% */
  }
</style>
