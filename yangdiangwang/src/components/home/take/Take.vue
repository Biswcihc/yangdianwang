<template>
  <div class="take">
    <div class="top">
     <img src="../../../assets/img/take/banner.jpg" alt="">
     <input type="text" placeholder="Montagne jeunesse">
     <img src="../../../assets/img/take/search.png" alt="" class="search">
    </div>
    <div class="center" v-for="(item,index) in lists" :key="index">
      <div class="center_title">
        <img :src="item.img1" alt="" class="img_samll">
        <span>{{item.name}}</span>
      </div>
      <ul class="cl">
       <!-- <router-link to="{path:'/selle/'+items.id}"> -->
          <li class="fl li_list" v-for="(items,index) in item.list" :key="index" @click="jump(items.id)">
            <img :src="items.thumbnail" alt="" class="img_big">
            <p class="price">
                <span class="real_price">{{items.reduct_price}}</span>
                <span class="original_price">{{items.original_price}}</span>
            </p>
            <p class="content">{{items.name}}</p>
        </li>
       <!-- </router-link> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Take',
  data() {
    return {
      lists:[]
    }
  },
  mounted(){
    this.$http({
      url:"/api/getIndexData"
      // /id=1
      // post需要qs进行转换
      // params:{}
    }).then(res=>{
      console.log(res);
      this.lists=res.data.data
    })
  },
  methods:{
    jump(id){
      this.$router.push({path:'/seller/',query:{id:id}})
    }
  }
}
</script>
<style scoped>
img{
  width: 100%;
  height: 100%;
}
.top{
  position: relative;
}
input{
  border-radius: .2rem /* 15/75 */;
  z-index: 10;
  opacity: 0.7;
  position: absolute;
  font-size:.53rem;
  left: 20%;
  top: 65px
}
.search{
  width: .2rem /* 15/75 */;
  height: .23rem /* 17/75 */;
  position: absolute;
  /* font-size: 30px; */
  right: 23%;
  top: 80px;
  z-index: 20;
}
.center{
  padding: 0 .27rem /* 20/75 */;
}
.li_list{
  width: 4.36rem /* 327/75 */;
  height: 6.28rem /* 471/75 */;
  border:1px solid #eee;
  background: white;
  z-index: 20;
  margin-right: .29rem /* 22/75 */
}
.center_title{
margin: .4rem 0/* 30/75 */
}
.img_samll{
  width: .21rem /* 16/75 */;
  height: .21rem /* 16/75 */;
}
.img_big{
  width: 4.35rem /* 326/75 */;
  height: 3.99rem /* 299/75 */;
  text-align: center;
}
.real_price{
  font-size: .33rem /* 25/75 */;
  color: #e60012;
  margin: 0 .67rem /* 50/75 */ 0 .27rem /* 20/75 */
}
.original_price{
  font-size: .28rem /* 21/75 */;
  text-decoration: line-through
}
.content{
  font-size: .33rem /* 25/75 */;
  margin-left: .27rem /* 20/75 */
}
a{
  color: black
}
</style>
