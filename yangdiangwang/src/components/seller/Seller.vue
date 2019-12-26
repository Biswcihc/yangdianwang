<template>
  <div class="seller">
    <div class="top">
      <router-link to='/take'>
        <img src="../../assets/img/login/nav_icon_back.png" alt="" class="top_img">
      </router-link>
    </div>
    <div>
       <a-carousel autoplay>
        <div v-for="(item,index) in list.data.swiperImgArr" :key="index">
          <img class="index-1eegU_1" :src="item">
        </div>
      </a-carousel>
    </div>
    <div class="center cl">
      <div class="fl content">
        <p class="center_content fl">{{list.data.name}}</p>
        <p class="fr shouc">
          <img src="../../assets/img/mine/keep.png" alt=""><br>
          <span>收藏</span>
        </p>
      </div>
      <p>
          <span class="new_price">{{list.data.reduct_price}}</span>
          <span class="discount">{{list.data.allowance}}</span>
          <span class="discount">{{list.data.isFreeShip}}</span>
      </p>
      <p class="condition">
        <span class="old_price">{{list.data.original_price}}</span>
        <span class="conditions" v-for="(item,index) in list.data.describe" :key="index">{{item}}</span>
      </p>
    </div>
    <div class="line"></div>
    <div class="detail">
      <span class="detail_left" @click="cut(idx)" :class="{selected:idx?false:true}">商品详情</span>
      <span class="detail_right" @click="cut(idx)" :class="{selected:idx?true:false}">买家口碑</span>
      <div v-for="(item,index) in list.data.shopDes" :key="index" :class="{hide:idx?true:false}">
         <img :src="item" alt="" class="detail_img">
      </div>
    </div>
    <div class="footer cl">
        <div class="shopcart"  v-if="isShow" > 
        <div class="cl">
          <img src="../../assets/img/shopcart1/shopcart1.jpg" alt="" class="shopcart_img fl">
          <div class="fl shopcart_price">
              <p class="shopcart_content">{{list.data.reduct_price}}</p>
              <p>库存{{list.data.total}}件</p>
              <p>请选择商品属性</p>
          </div>
          <img src="../../assets/img/mine/keep.png" alt="" class="fl shopcart_img2">
        </div>
        <!-- 购买数量 -->
        <div class="number cl">
          <span class="fl number_span">购买数量</span>
          <p class="fl number_p">
            <span class="add fl" @click="jian">-</span>
            <span class="num fl" v-html="message"></span>
            <span class="add fl" @click="add">+</span>
          </p>
        </div>
        <!-- 大小 -->
        <div class="size cl">
          <h3>{{size.name}}</h3>
          <ul class="size_ul fl" v-for="(item,index) in size.list" :key="index">
            <li class="size_li fl" @click="cuter(index)" :class="{selected:check==index}">{{item}}</li>
          </ul>
        </div>
        <!-- 年龄 -->
        <div class="age">
          <h3>{{age.name}}</h3>
          <ul class="cl age_ul" v-for="(item,index) in age.list" :key="index">
            <li class=" age_li"  @click="cuters(index)" :class="{selected:checked==index}">{{item}}</li>
          </ul>
        </div>
          <button class="submit" @click="addshop()">确定</button>
      </div>
        <div class="left fl">
          总价：￥<span v-html="count"></span>
        </div>
        <div @click="show">
          <div class="footer_center fl">加入购物车</div>
          <div class="right fr">立即购买</div>
        </div>
     </div>
      <Buy :list="list" :class="{hide:idx?false:true}"></Buy>
      <div class="blank"></div>
  }
  </div>
</template>
<script>
import Buy from '@/components/seller/buy/Buy'
import { log } from 'util';
export default {
  name:'Seller',
  data() {
    return {
      list:[],
      lists:[],
      isShow:false,
      idx:false,
      count:0,
      check:0,
      checked:0,
      message:1,
      size:[],
      age:[]
    }
  },
  methods:{
    //购物车显示隐藏
    show(){
      this.isShow =!this.isShow
    },
    //加入购物车
    addshop(){
     var goods={
       name:this.list.data.name,//商品名称
       message:this.message,//购买数量
       price:this.list.data.reduct_price,//价钱
       age:this.age.list[this.checked],//年龄
       size:this.size.list[this.check]//大小
     }
     this.lists.push(goods)
     console.log(goods);
     localStorage.setItem('item',JSON.stringify(this.lists))
    },
    //商品详情和买家口碑切换
    cut(i){
       this.idx=i;
       console.log(this.idx,111111111111111111)
      if(this.idx){
        this.idx=false
      }else{
        this.idx=true
      }
    },
    //购物车商品切换
    //大小
      cuter(i){
        this.check=i;
        // console.log(this.size.list[i],2341234321);
      },
      //年龄
      cuters(i){
        this.checked=i
        // console.log(this.age.list[i],2341234321);
      },
      //减
      jian() {
        if(this.message==0){
          this.message=1
        }
        this.message--
        this.count=this.list.data.reduct_price *this.message
      },
      //加
      add() {
        this.message++
        this.count=this.list.data.reduct_price *this.message
      }
  },
  mounted() {
    let pid=this.$route.query.id;
    // console.log(pid);
    this.$http({
      url:'/api/getDetails',
      params:{pid:pid}
      }).then((res)=>{
        // console.log(res);
     this.list=res.data
    //  console.log(this.list);
     localStorage.setItem('item',JSON.stringify(this.lists));

    //获取大小和年龄数组
    this.size=this.list.data.buySelect[0];
    this.age=this.list.data.buySelect[1];
   })
  },
  components:{
    Buy
  }
}
</script>
<style scoped>
.blank{
    height: 1.33rem /* 100/75 */
}
.hide{
  display: none;
}
.selected{
  color:red
}
.ant-carousel{
    text-align :center;
    overflow :hidden
  }
.index-1eegU_1{
    width: 100%
  }
.seller{
  width: 100%;
}
  .top{
    width: 100%;
    height: .55rem /* 41/75 */;
    background:#ff9900;
  }
  .banner{
    width: 100%;
    height: 7.33rem;
    background:pink;
    border-bottom: 1px solid #eeeeee
  }
  .center{
    padding:0 .27rem;
    /* width: 100%; */
  }
  .content{
    height: 1.07rem /* 80/75 */;
    width: 100%;
  }
  .center_content{
    width:80%;
    font-size: .37rem;
  }
  .shouc{
    width: 20%;
    border-left: 1px solid #dddddd;
    padding-left: .4rem;
    /* margin-top: -.67rem/;  */
    margin-right: -.27rem
}
  .new_price{
    color: #ea2222;
  }
  .discount{
    width: .93rem;
    height: .4rem;
    background: #ff9900;
    color: white;
  }
  .condition{
    margin-top: .13rem
  }
  .old_price{
    text-decoration: line-through;
    color: #aeaeae;
  }
  .conditions{
    width: 1.33rem;
    height: .4rem;
    border:2px solid #ff9900;
    color:#ff9900;
  }
  .line{
    margin-top: .27rem;
    border:15px solid #eeeeee
  }
  .detail_left,.detail_rigth{
    font-size: .32rem;
    height: 1.13rem;
    line-height: 1.13rem;
    margin-left: .53rem;
    margin-right: 3.2rem
  }
  .detail_img{
    width: 100%;
  }
  .detail{
    padding: 0 .6rem;
    padding-left: .87rem
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: white;
  }
  .left,.footer_center, .right{
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
  }
  .footer_center, .right{
    width: 30%;
    color: white;
    font-size: .4rem;
  }
  .footer .left{
    width: 40%;
    font-size: .4rem;
    text-align: center;
  }
  .footer .left span{
    color: #eb2323;
  }
  .footer .footer_center{
    background: #ff9900
  }
  .footer .right{
    background: #ec2222
  }
  .shopcart{
    width: 100%;
    height:9.33rem /* 700/75 */;
    background: white;
    padding-left: .53rem
  }
  .shopcart_img{
    width: 2.67rem;
    height: 2.67rem;
    margin-top: -.4rem;
  }
  .shopcart_content{
    color: #ea2222
  }
  .shopcart_price{
    margin-top: .67rem;
    margin-left: .29rem
  }
  .shopcart_img2{
    margin: .4rem 0 0 2rem;
  }
  .number{
    margin-top: .4rem;
    margin-bottom: .4rem /* 30/75 */
  }
  .number_p{
    width: 2.67rem;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd
  }
  .add{
    width: .67rem;
    height: .67rem;
    background: #999999;
    color: white;
    font-size: .67rem;
    display: block;
    text-align: center;
    line-height: .67rem;
  }
  .number_span{
    margin-right:3.33rem /* 250/75 */
  }
  .num{
    width: 1.33rem;
    text-align: center;
    line-height: .67rem;
  }
  .size_ul{
    margin-top: .27rem /* 20/75 */;
    /* width: 100%; */
  }
  .age_ul{
     margin-top: .27rem /* 20/75 */;
  }
  .size_ul{
    margin-bottom: .53rem /* 40/75 */
  }
  .size_li,.age_li{
    height: .67rem /* 50/75 */;
    line-height: .67rem /* 50/75 */;
    background: #dddddd;
    border-radius: .13rem /* 10/75 */;
    text-align: center;
    margin-right: .27rem /* 20/75 */;
  }
  .size_li{
   width: 1.6rem /* 120/75 */;
  }
  .age_li{
    width: 2.36rem /* 177/75 */;
  }
  .submit{
    width: 8rem /* 600/75 */;
    height: .93rem /* 70/75 */;
    margin-top: .2rem /* 15/75 */;
    background: #ff9900;
    border-radius: .27rem /* 20/75 */;
    font-size: .4rem /* 30/75 */;
    border: none;
  }
  .selected{
    background: #ff9900;
  }
</style>
