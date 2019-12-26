<template>
  <div class="mine">
    <div class="top">
        <img src="../../../assets/img/mine/set.png" alt="" class="fl top_img1">
        <span class="top_content">个人中心</span>
        <img src="../../../assets/img/mine/news.png" alt="" class="fr top_img2">
        <div class="circle">
          <p class="circle_small"><img src="../../../assets/img/mine/ali.jpg" alt=""></p>
        </div>
    </div>
  <div class="center1">
      <div class="center">
      <div class="collect">
        <img src="../../../assets/img/mine/keep.png" alt="">
        <span>我的收藏</span>
      </div>
      <div class="order">
        <p>
          <span class="fl">我的订单</span>
          <span class="fr">查看全部订单</span>
        </p>
      </div>
      <div class="order2">
        <ul class="cl">
          <li class="fl order2_li">
            <img src="../../../assets/img/mine/icon_boligation.png" alt="">
            <p>待付款</p>
          </li>
           <li class="fl order2_li">
            <img src="../../../assets/img/mine/prepare.png" alt="">
            <p>待发货</p>
          </li>
           <li class="fl order2_li">
            <img src="../../../assets/img/mine/icon_boligation.png" alt="">
            <p>待收货</p>
          </li>
           <li class="fl order2_li">
            <img src="../../../assets/img/mine/prepare.png" alt="">
            <p>待评价</p>
          </li>
          <li class="fl order2_li">
            <img src="../../../assets/img/mine/prepare.png" alt="">
            <p>退款/售后</p>
          </li>
        </ul>
      </div>
      <p class="address">收货地址管理</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'Mine'
}
</script>
<style scoped>
  .mine{
    height: 100%
  }
  .top{
    width: 100%;
    height:4rem /* 300/75 */;
    background: #ff9900;
    padding-top: .93rem /* 70/75 */;
    position: relative;
  }
  .top_content{
    font-size: .6rem;
    color: white;
  }
  .top_img1{
    margin:0  2.8rem /* 210/75 */ 0 .4rem /* 30/75 */ 
  }
   .top_img2{
    margin-right: .67rem /* 50/75 */
  }
  .center1{
    background:white
  }
  .center{
    margin-left: .4rem;
  }
  .circle_small img{
  width: 2.27rem;
  height: 2.27rem;
  border: 10px solid white;
  border-radius: 50%;
  background: #e7dedf;
  text-align: center;
  position: absolute;
  top: 76%;
  left: 38%;
  z-index: 999;
  }
  .login{
    padding-top: 1.47rem ;
    text-align: center;
    font-size: .4rem;
    margin-right: .27rem;
    color:black
  }
  .collect{
     padding-top: 1.47rem /* 110/75 */;
    padding-bottom: .53rem;
    border-bottom: 5px solid #efedee;
  }
  .order{
    padding: .93rem /* 70/75 */ 0;
    border-bottom: 1px solid #b3b3b3
  }
  .order2{
    margin-top:.67rem;
    padding-bottom: .53rem;
    border-bottom: 5px solid #efedee;
  }
  .order2_li{
    margin-right: .53rem
  }
  .order2_li img{
    text-align: center;
    margin-left: 12px;
  }
  .address{
    /* margin: .67rem 0; */
    height: 1.73rem /* 130/75 */;
    line-height: 1.73rem /* 130/75 */;
  }
</style>
