<template>
	<div id="app">
    	
		    <div id="logo">
            <img src="../../assets/images/logo.png">
        </div>
        <h2>智慧销售管理系统</h2>
        <div id="copyright">
            博耀信息版权所有（v1.0)
        </div>
	
			<div id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" v-model="loginName" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" v-model="password" placeholder="请输入密码">
				</div>
			</div>
     
			<div class="mui-content-padded">
				<button id='login' @click="getData" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
				</div>
		
	</div>
</template>

<script>
export default {
  data() {
    return {
      loginName: "2016238",
      password: "123456"
    };
  },
  methods: {
    getData() {
      let url = "/train-rest/rest/user/login"
      let user = {}
      user.loginName = this.loginName
      user.password = this.password
      let userjson = JSON.stringify(user)
      this.$axios.post(url,userjson,{emulateJSON : true} )
        .then(
          response => {
            //console.log(response.data)
            if (response.data.success === true){
              //提取用户请求凭据
              const userinfo = {
                loginName : response.data.data.loginName,
                companyName : response.data.data.companyName,
                largeAreaCode : response.data.data.largeAreaCode,
                largeAreaName : response.data.data.largeAreaName,
                areaName : response.data.data.areaName,
                roleName : response.data.data.roleName,
                companyId : response.data.data.companyId,
                token : response.data.data.token,
                company : response.data.data.company
            }
              this.$store.commit('setuserinfo',userinfo)
              this.$router.push({name :'home',params : userinfo})
            }
          },
          response => {
            console.log(
              "发送失败" + response.status + "," + response.statusText
            )
          }
        )
    }
  }
};
</script>

<style scoped>
#logo {
  margin: auto;
  padding-top:60px;
  width: 120px;
  height: 120px;;
}
img{
  width: 100%;
  }
h2 {
  display: block;
  text-align: center;
  margin-top: 100px;
  color: white;
}
#logout,#login{
  margin-top: 40px;
}
button{
  display: block;
  width: 120px;
  margin: auto;
}
#app {
  position:fixed;
  top:0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/login_bg.png");
  background-size : cover;
  }

  #copyright{
    position:fixed;
    bottom: 60px;
    left:50%;
    margin-left: -90px;
    color:#fff;
}

.mui-input-group {
  margin-top: 10px;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 22%;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
}

button {
  margin-top: 100px;
}
#login-form {
  margin: 30px;
}

</style>