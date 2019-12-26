<template>
  <div class="buy"> 
   <div class="evaluate">
    <hr>
      <ul class="cl evaluate_ul">
        <li class="fl evaluate_li" @click="cut('one')"
         :class="{selected:a=='one'?true:false}">全部评价</li>

        <li class="fl evaluate_li" @click="cut('two')" 
           :class="{selected:a=='two'?true:false}">好评</li>

        <li class="fl evaluate_li" @click="cut('three')"
          :class="{selected:a=='three'?true:false}">差评</li>

        <li class="fl evaluate_li" @click="cut('four')"
         :class="{selected:a=='four'?true:false}">晒单</li>
      </ul>
    <hr>
   </div>


   <div class="content cl" v-for="(item,index) in list.data.buyerReviews.all" :key="index" 
   :class="{hide:a=='one'?false:true}">
        <div class="content_div">
          <h3 class="content_title">{{item.buyerName}}</h3>
          <span class="fr content_date">{{item.createTime|times}}</span>
        </div>
        <img :src="item.postImg[0]" alt="" class="content_img">
        <img :src="item.postImg[1]" alt="" class="content_img">
        <p class="content_txt">{{item.postDescribe}}</p>
        <p class="content_text">{{item.adminReviews}}</p>
   </div>

    <div class="content cl" v-for="(item,i) in list.data.buyerReviews.good" :key="i" 
    :class="{hide:a=='two'?false:true}">
        <div class="content_div">
          <h3 class="content_title">{{item.buyerName}}</h3>
          <span class="fr content_date">{{item.createTime|times}}</span>
        </div>
        <img :src="item.postImg[0]" alt="" class="content_img">
        <img :src="item.postImg[1]" alt="" class="content_img">
        <p class="content_txt">{{item.postDescribe}}</p>
        <p class="content_text">{{item.adminReviews}}</p>
   </div>

    <div class="content cl" v-for="(item,ind) in list.data.buyerReviews.bad" :key="ind" 
      :class="{hide:a=='three'?false:true}">
        <div class="content_div">
          <h3 class="content_title">{{item.buyerName}}</h3>
          <span class="fr content_date">{{item.createTime|times}}</span>
        </div>
        <img :src="item.postImg[0]" alt="" class="content_img">
        <img :src="item.postImg[1]" alt="" class="content_img">
        <p class="content_txt">{{item.postDescribe}}</p>
        <p class="content_text">{{item.adminReviews}}</p>
     </div>

    <div class="content cl" v-for="(item,inde) in list.data.buyerReviews.postForm" :key="inde" 
    :class="{hide:a=='four'?false:true}">
        <div class="content_div">
          <h3 class="content_title">{{item.buyerName}}</h3>
          <span class="fr content_date">{{item.createTime|times}}</span>
        </div>
        <img :src="item.postImg[0]" alt="" class="content_img">
        <img :src="item.postImg[1]" alt="" class="content_img">
        <p class="content_txt">{{item.postDescribe}}</p>
        <p class="content_text">{{item.adminReviews}}</p>
   </div>
   <div class="blank"></div>
  </div>
</template>
<script>
export default {
  props:['list'],
  data() {
    return {
      a:'one',
    }
  },
  filters:{
    times(dataStr){
      var time = new Date(parseInt(dataStr))
      function timeAdd0(str) {
        if (str < 10) {
        str = '0' + str;
        }
      return str;
    }
      var y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      var h = time.getHours()
      var mm = time.getMinutes()
      var s = time.getSeconds()
      return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s)
    }
  },
  methods:{
    cut(id){
      this.a=id;
      console.log(this.a);
    }
  }
}
</script>
<style scoped>
 
  .blank{
    height: 6.67rem /* 500/75 */
  }
  .buy{
    /* width: 100%; */
    padding: 0 .4rem
  }
  .evaluate_ul{
    margin: .13rem /* 10/75 */ 0
  }
  .evaluate_li{
    width: 1.8rem /* 135/75 */;
    height: .67rem /* 50/75 */;
    line-height: .67rem /* 50/75 */;
    background: #999999;
    border-radius: .27rem /* 20/75 */;
    text-align: center;
    color: white;
    margin:0 .49rem /* 37/75 */ 0 .01rem /* 1/75 */;
  }
  .content_img{
    width: 2rem /* 150/75 */;
    height: 2rem /* 150/75 */
  }
  .content_title{
    color: #fe9900;
    font-size: .29rem /* 22/75 */;
  }
  .content_div{
    margin: .27rem /* 20/75 */ 0;
  }
  .content_date{
    margin-top: -.4rem /* 30/75 */
  }
  .content_txt{
    color: #999
  }
  .content_text{
    width: 9.21rem /* 691/75 */;
    height: 1rem /* 75/75 */;
    background: #dddddd;
    border-radius: .13rem /* 10/75 */;
    text-align: center;
    margin-top: .13rem /* 10/75 */
  }
  .selected{
    background: #ff9900
  }
  .hide{
    display: none;
  }
</style>
