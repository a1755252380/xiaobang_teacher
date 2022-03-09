<template>
    <el-container>
        <el-row :gutter="10" style="width:100%;height:100%;display: flex;
    justify-content: center;
    align-items: center;">
        
          <el-col :xs="20"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24" style="width:100%;height:100%;display: flex;
    justify-content: center;
    align-items: center;">
                <div class="login_container">
           <div class="login_from_container">
                <h1>Login To XiaoBang</h1>
                <el-input v-model="account" placeholder="account"></el-input>
                <el-input v-model="password" placeholder="password" class="password_input" :show-password="showPassword">
                     <i @click="changeShow()" slot="suffix" class="el-input__icon iconfont icon-yanjing_kai"></i>
                </el-input>
                    <br>
                <el-button @click="openXB" round>登录</el-button>
            </div>
        </div>
             
          </el-col>
        </el-row>
    </el-container>
</template>

<style scoped>
    .el-container {
      width: 100%;
        height: 100%;
        background-color: #DEE5ED;
        padding: 0;
      
    }
    @media screen and (max-width:1200px){
      .login_container{
        width: 80% !important;
        height: 55% !important;
      }
       .login_from_container {
        right: 2% !important;
        top: 7% !important;
       width: 35vw  !important;
       
    }
    .login_from_container h1 {
        font-size: 4.5vh;
        margin-top: 20%;
        margin-bottom: 15%;
    }
    }
    .login_container {
        border-radius: 5%;
        width: 60vw;
       height: 80vh;
        /* position: absolute;
        top: 10%;
        left: 18%;
        bottom: 10%;
        right: 18%; */
           position: relative;
        background-image: url('../assets/images/login_btn.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-color: #FFFFFF;
    }
    .login_from_container {
        position: absolute;
        right: 5%;
        top: 8%;
       width: 20vw;
       
    }
    .login_from_container h1 {
        font-size: 4.5vh;
        margin-top: 20%;
        margin-bottom: 15%;
    }
  .login_from_container  .el-input{
      width: 80%;
      height: 8%;
     
      border: 0;
    text-indent: 5%;
    font-size: 2vh;
    outline: none;
    margin-bottom: 6%;
    margin-left: 0;
  }
  .el-input .el-input__inner {
      background-color: #DEE5ED;
      outline: none;
  }
  .password_input i{
      cursor: pointer;
  }
  .login_from_container button {
      background-color: #E83D53;
      color: #ffffff;
      margin-left: 50%;
      padding-left: 8%;
      padding-right: 8%;
      outline: none;
     
  }
  .login_from_container button:active {
      border-color: #d8384d;
  }
  .icon-yanjing_bi {
      text-align: flex-start;
      display: inline-block;
     
  }
</style>

<script>

export default {
    data(){
        return {
                showPassword:true,
                account: '',
                password:'',
        }
         
    },




    methods: {
        onSubmit(){
            console.log(1);
        },
        changeShow(){
            var password_input_i = document.querySelector('.password_input').querySelector('i')
            
            this.showPassword=!this.showPassword
            if(this.showPassword){
                 password_input_i.setAttribute('class','el-input__icon iconfont icon-yanjing_bi')
            }
           else{
               password_input_i.setAttribute('class','el-input__icon iconfont icon-yanjing_kai')
           }
        },
        openXB(){
            if(this.account=='js001' && this.password=='123456'){
                 this.$router.push('/teacher')
            }else if(this.account=='gl001' && this.password=='123456'){
                this.$router.push('/manager')
            }
           
        }
    }
}
</script>