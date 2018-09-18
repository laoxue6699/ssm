import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	//userInfo: null, //用户信息
	userinfo : {},
	params : {}
}
const mutations = {
	setuserinfo : function(state,info) {
		state.userinfo = info
	},
	setparams : function(state,param) {
		state.params = param
	}
}

export default new Vuex.Store({
	state,
	mutations
})