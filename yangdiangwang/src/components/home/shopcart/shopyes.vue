<template>
   <div class="shopyes">
        <div class="center1">
            <div class="center cl" v-for="(item,index) in lists" :key="index">
            <img src="../../../assets/img/shopcart/store.png" alt="" class="top_img">
            <span class="name">杭州保税区仓</span>
            <ul>
                <li class="cl">
                    <div class="left_img fl">
                        <img src="../../../assets/img/shopcart/radio_nor.png" alt="" fl 
                        class="left_img"  v-if="!arr.includes(index)" @click="one(index)">
                        <img src="../../../assets/img/shopcart/radio_hig.png" alt="" fl 
                        class="left_img" v-if="arr.includes(index)"  @click="one(index)">
                    </div>
                   
                <img src="../../../assets/img/shopcart/shopcart1.jpg" alt="" class="right_img fl">
                <div class=" fl p_content">
                    <p class="fl content">{{item.name}}</p>
                    <span class="span_content">{{item.size}} &nbsp; {{item.age}}</span>
                    <p class="fl add">
                    <span class="fl" @click="jian(index)">-</span>
                    <span class="add_span fl">{{item.message}}</span>
                    <span class="fr" @click="add(index)">+</span>
                    </p>
                </div>
                <div class="fr pide">
                  <span class=" price">￥{{item.price}}</span>
                  <span @click="del(index)" class="del">删除</span>
                </div>
                </li>
            </ul>
        </div>
    </div>
  
   <div class="footer">
      <div class="select fl">
        <img src="../../../assets/img/shopcart/radio_nor.png" alt="" v-if="is">
        <img src="../../../assets/img/shopcart/radio_hig.png" alt="" v-if="!is">
        <p @click="all">全选</p>
      </div>
      <div class="editor fl">
        <img src="../../../assets/img/shopcart/editor_nor.png" alt="" v-if="isShow">
        <img src="../../../assets/img/shopcart/editor_hig.png" alt="" v-if="!isShow">
        <p @click="editor">编辑</p>
      </div>
     <div class="price_bottom fl">
       <p>合计：￥<span>{{priceall}}</span><br>（不含运费）</p>
     </div>
     <div class="right fl">去结算</div>
   </div>
   <div class="blank"></div>
</div>

</template>
<script>
export default {
    name:'Shopyes',
    props:['goods'],
    
   data() {
       return {
            lists:[],
            total:0,
            isShow:true,
            is:true,
            arr:[],
       }
   },
   computed:{
     priceall(){
       let sum=0;
       this.lists.map((item,index)=>{
         if(!this.is){
            sum+=Number(item.message) * Number(item.price)
         }
       })
       return sum
     }
   },
   methods:{
       //单选
       one(index) {
         if(this.arr.includes(index)){
            this.arr=this.arr.filter(item=>{
            return item!=index
           })
         }else{
           this.arr.push(index)
         }
          if (this.arr.length == this.lists.length) {
              this.is = false;
          }
          else{
            this.is=true;
          }
       },
          // this.sum+=this.arr[index].message * this.arr[index].price  
       //全选
       all(){
           if(this.is){
             //如果它为true,就将它的下标元素加入到数组中，相当于全部选中
             this.lists.filter((item,index)=>{
                 this.arr.push(index);
              // console.log(this.arr);
              })
              this.is=false
           }else{
             //数组为空，全选取消
              this.arr=[]
              // console.log(this.arr);
              this.is=true
           }
       },
       //编辑
       editor(){
           if(this.isShow){
               this.isShow=false
           }else{
               this.isShow=true
           }
       },
       //删除
      del(i){
          this.lists.splice(i,1)
          localStorage.setItem('item',JSON.stringify(this.lists))
          this.bus.$emit("Shopno",this.lists)
      },
      //减
      jian(index){
          var item=this.lists[index]
          if(item.message<=1){
             return;
          }
          item.message--
          this.total=item.message * item.price
      },
      //加
      add(index){
            var item=this.lists[index]
            item.message++
            this.total=item.message * item.price
        }
   },
   mounted() {
       if(localStorage.getItem('item')){
           this.lists=JSON.parse(localStorage.getItem('item'))
       }else{
           this.bus.$emit("Shopno",this.lists)
       }
   },
}
</script>

<style scoped>
.blank{
  height: 4rem /* 300/75 */;
}
.shopyes{
    margin-top: .4rem
}
.center{
    margin-top:.53rem /* 40/75 */;
    height:4rem /* 300/75 */
  }
  .left_img{
      margin-top: .67rem /* 50/75 */;
      margin-right: .2rem /* 15/75 */
  }
  .right_img{
    margin-top: .67rem /* 50/75 */;
    width: 2.08rem /* 156/75 */;
    height:2.12rem /* 159/75 */
  }
  .p_content{
    width: 3.73rem
  }
  li{
    margin-left: .67rem /* 50/75 */
  }
  .content{
    margin: .67rem /* 50/75 */ .27rem /* 20/75 */ .27rem /* 20/75 */;
    font-size:.33rem /* 25/75 */;
  }
  .add{
     width: 3.12rem /* 234/75 */;
     border:1px solid #cbcbcb;
     margin-left:.53rem /* 40/75 */
  }
  .add span{
    display: block;
    width: 30%;
    text-align: center;
  }
  .add_span{
    border-left: 1px solid #cbcbcb;
    border-right: 1px solid #cbcbcb;
  }
  .pide{
    margin-top: 1.33rem
  }
  .price{
    /* margin-right:.8rem ; */
    font-size: .33rem /* 25/75 */;
    
  }
  .span_content{
    color: #999;
    margin-left: .27rem /* 20/75 */
  }
  .footer{
    position: fixed;
    bottom:1.33rem;
    background:white;
    border-top: 1px solid #eeeeee;
    height:1.47rem /* 110/75 */;
    width: 100%;
  }
  .select,.editor,.price_bottom,.right{
    height :1.47rem /* 110/75 */;
    text-align: center;
    
  }
  .select,.editor,.price_bottom{
    margin: .27rem 0 
  }
  .select{
    width: 20%;
  }
  .editor{
    width: 20%;
  }
  .price_bottom{
    width: 30%;
  }
   .right{
    width :30%;
    font-size:.47rem /* 35/75 */;
    line-height: 1.47rem /* 110/75 */;
    text-align :center;
    background: #ff5500;
    color:white;
  }
  .del{
    margin-left: .4rem /* 30/75 */;
    /* background: #ff5500; */
    display: inline-block;
    width: 1.07rem /* 80/75 */;
    height: 2.8rem /* 210/75 */;
    line-height: 2.8rem /* 210/75 */;
    font-size: .4rem /* 30/75 */;
    color: black;
    text-align: center;
  }
  
</style>
