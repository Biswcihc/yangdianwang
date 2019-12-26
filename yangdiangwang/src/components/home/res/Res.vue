<template>
  <div class="res">
    <div class="top">
     <router-link to='/login'>
        <img src="../../../assets/img/login/nav_icon_back.png" alt="" class="top_img">
     </router-link>
      <span class="res1">注册</span>
      <router-link to="login">
        <span class="login fr">登录</span>
      </router-link>
    </div>
    <div class="center">
      <p class="message">手机号：
         <input type="text" v-model="tel"><br>
      </p>
      <p class="pass">密码:
       <input type="password" v-model="pass">
      </p>
      <p class="pass">
        <span>验证码:
          <span v-text='num' class="yanzheng"></span>
          <!-- <input type="text" v-model="num"> -->
        </span>
        <span class="fr click" @click="get">点击获取</span>
      </p>
      <button class="res2" @click="res">下一步</button>
      
      <input type="radio">
      <span class="content">我已阅读并同意使用条款和隐私政策</span>
    </div>
  </div>
</template>
<script>
import { log } from 'util';
import swal from 'sweetalert';
//  import { MessageBox } from 'src/index';
export default {
 name:'Res',
 data () {
   return {
     tel:'',
     pass:'',
     num:'',
     user:[]
   }
 },
 methods:{
      res(){
        var name=this.tel;
        var pass=this.pass;
        var name_res=/^1\d{10}$/;
        var pass_res=/^[A-Z,a-z,0-9,$,@,!,%,*,#,?,&]{6,20}$/;
        
        //判断是否为空
      if(name!='' && pass!='' && this.num!=''){
        //判断是否符合正则
        if((name_res.test(name) &&  pass_res.test(pass))==true){
          //创建新数组将数据添加到数组中
          var users={
            username:name,
            password:pass
          }
          this.user.push(users)
          // console.log(this.user);
          //保存用户状态
          localStorage.setItem('user',JSON.stringify(this.user));
          swal('注册成功');
          this.$router.push('/login');
        }else{
            swal('格式错误，请重新输入')
            this.tel=''
            this.pass=''
            this.num=''
            return;
        }
      }else{
        swal('输入为空，请重新输入')
          this.tel=''
          this.pass=''
          this.num=''
          return;
      }
    },
    get(){
      function getrandom(min,max){
        return Math.floor(Math.random()*(max-min)+min)
      }
      for(var i=1;i<5; i++){
        this.num=getrandom(100000,999999);
      }
    },
  }
}
</script>
<style scoped>
  .top{
    width: 100%;
    height: 1.87rem /* 140/75 */;
    background: #ff9900;
    line-height: 1.87rem;
  }
  .top_img{
    margin: 0 3.6rem /* 270/75 */  0 .4rem /* 30/75 */
  }
  .login{
    margin-right: .4rem
  }
  .res1,.login{
    color: white;
    font-size: .48rem /* 36/75 */;
  }
  .center{
    padding: 3.27rem /* 245/75 */ 1rem /* 75/75 */ 0  1rem /* 75/75 */
  }
  .message,.pass{
    padding-bottom: .67rem /* 50/75 */;
    border-bottom: 1px solid #b8b8b8;
    font-size: .43rem /* 32/75 */;
  }
  .pass{
    padding-top: .75rem /* 56/75 */
  }
  .click{
    color: #fe4475
  }
  .res2{
    width: 8rem /* 600/75 */;
    height: 1.33rem /* 100/75 */;
    background: #ff9900;
    border-radius: .27rem /* 20/75 */;
    text-align: center;
    color: white;
    font-size: .45rem /* 34/75 */;
    margin-top: .67rem /* 50/75 */
  }
  .radio{
    width: .4rem /* 30/75 */;
    height: .4rem /* 30/75 */;
    border: .01rem /* 1/75 */ solid #8f8f8f;
    margin-top: .67rem /* 50/75 */;
    display: inline-block;
  }
  .content{
    font-size: .37rem /* 28/75 */
  }
  input{
    border: none
  }
  .yanzheng{
    color: red
  }
</style>

