<template>
  <div class="list">
    <div class="top">
      <input type="text" placeholder="Montagne jeunesse">
      <img src="../../../assets/img/take/search.png" alt="" class="search">
    </div>
    <div class="center">
      <div class="fl left">
         <ul class="ul1 left" v-for="(item,index) in lists" :key="index">
            <li class="left_content" @click="cut(index)"
            :class="{selected:check==index}">{{item.name}}</li> 
          </ul>
      </div>
      <div class="fr right" v-for="(items,i) in lists" :key="i" :class="{hide:check==i?false:true}">
        <ul class="ul2">
          <li class="fl right_content" v-for="(itemss,key) in items.list" :key="key" @click="cut(key)">
            <img :src="itemss.thumbnail" alt="">
            <p class="content">{{itemss.name}}</p>
          </li> 
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'List',
  data(){
    return {
      check:0,
      lists:[]
    }
  },
  methods:{
    cut(i) {
      this.check=i;
      console.log(this.check);
    }
  },
  mounted() {
    this.$http({
      url:"/api/getClassify"
    }).then(res=>{
      // console.log(res);
      this.lists=res.data.data
    })
  }
}
</script>
<style scoped>

ul{
  margin: 0;
  padding: 0;
}
  .top{
    width: 100%;
    height: 1.85rem /* 139/75 */;
    background: #fe9900;
  }
  input{
  border-radius: .2rem /* 15/75 */;
  z-index: 10;
  opacity: 0.7;
  position: absolute;
  font-size:.53rem;
  left: 20%;
  top:.67rem /* 50/75 */
}
.search{
  width: .2rem /* 15/75 */;
  height: .23rem /* 17/75 */;
  position: absolute;
  right: 23%;
  top: 1rem /* 75/75 */;
  z-index: 20;
}
.ul2{
  width: 6rem /* 450/75 */
}
.center{
  padding: 0 .27rem /* 20/75 */;
}
.ul1{
  display: inline;
}
img{
  width: 2.17rem /* 163/75 */;
  height: 2.24rem /* 168/75 */;
  margin-left: .4rem /* 30/75 */;
  margin-top: .07rem /* 5/75 */
}
.left{
  width:2.67rem /* 200/75 */;
  display: inline-block;
}
.left_content{
  font-size: .37rem /* 28/75 */;
  height: 1.24rem /* 93/75 */;
  line-height: 1.24rem /* 93/75 */;
  text-align: center;
}
.right{
  margin-top: -.27rem /* 20/75 */
}
.right_content{
  width: 2.67rem /* 200/75 */;
  height: 3.07rem /* 230/75 */;
  border:1px solid #1d84a7;
  border-radius: .27rem /* 20/75 */;
  margin-top:.4rem /* 30/75 */;
  margin-right:.27rem /* 20/75 */
}
.content{
  height:.83rem /* 62/75 */;
  border-radius: 0 0 /* 20/75 */ .27rem /* 20/75 */ 0.27rem;
  line-height: .83rem /* 62/75 */;
  background:#1d84a7;
  font-size: .31rem /* 23/75 */;
  color: white;
  text-align: center;
}
.selected{
  color: #fe9900;
  background: white;
}
.hide{
  display: none;
}
</style>
