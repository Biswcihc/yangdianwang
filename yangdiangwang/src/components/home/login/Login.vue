<template>
  <div class="login">
    <div class="top">
        <router-link to="/mine">
          <img src="../../../assets/img/login/nav_icon_back.png" alt="" class="top_img">
       </router-link>
      <span class="login1">登录</span>
     <router-link to="res">
        <span class="res fr">注册</span>
     </router-link>
    </div>
    <div class="center">
     <div>
        <p class="message">手机号:
          <input type="text" v-model="tel"><br>
        </p>
     </div>
      <p class="pass">密码:
       <input type="password" v-model="pass">
      </p>
      <p class="forget fr">忘记密码</p>
      <button class="login2" @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
export default {
 name:'Login',
 data () {
   return {
     tel:'',
     pass:'',
     list:[]
   }
 },
  methods:{
      login(){
        var name=this.tel;
        var pass=this.pass;
      if(name==''&& pass==''){
        swal('输入为空，请输入')
      }else{
      this.list= JSON.parse(localStorage.getItem('user'))
      for(var i=0;i<this.list.length;i++){
        if(name==this.list[i].username && pass==this.list[i].password){
             swal('登录成功')
             this.$router.push('/miney')
             return;
        }else{
              swal('登录失败')
              this.tel='';
              this.pass=''
              return;
          }
        }
      }
    }
  },
}
</script>
<style scoped>
  .top{
    width: 100%;
    height: 1.87rem /* 140/75 */;
    background: #ff9900;
    line-height: 1.87rem /* 140/75 */;
  }
  .top_img{
    margin: 0 3.6rem /* 270/75 */  0 .4rem /* 30/75 */
  }
  .res{
    margin-right: .4rem /* 30/75 */
  }
  .login1,.res{
    color: white;
    font-size: .48rem /* 36/75 */;
  }
  .center{
    padding: 3.27rem /* 245/75 */ 1rem /* 75/75 */ 0 1rem /* 75/75 */
  }
  .message,.pass{
    padding-bottom: .67rem /* 50/75 */;
    border-bottom: 1px solid #b8b8b8;
    font-size: .43rem /* 32/75 */;
  }
  .pass{
    padding-top: .75rem /* 56/75 */
  }
  .forget{
    margin: .55rem /* 41/75 */ 0 .55rem /* 41/75 */ 0;
    font-size: .36rem /* 27/75 */;
    color: #666666
  }
  .login2{
    width: 8rem /* 600/75 */;
    height: 1.33rem /* 100/75 */;
    background: #ff9900;
    border-radius: .27rem /* 20/75 */;
    text-align: center;
    color: white;
    font-size: .45rem /* 34/75 */;
  }
  input{
    border:none
  }
</style>
