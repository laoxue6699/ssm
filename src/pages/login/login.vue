<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
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
.area {
  margin: 20px auto 0px auto;
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

.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}

.mui-content-padded {
  margin-top: 25px;
}

.mui-btn {
  padding: 10px;
}

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}

button {
  margin-top: 100px;
}
</style>