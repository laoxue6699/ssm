import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	//userInfo: null, //用户信息
	userinfo : {},
	goodssort : "all",
	warehouseid : ""
}
const mutations = {
	setuserinfo : function(state,info) {
		state.userinfo = info
	},
	setgoodssort : function(state,vel){
		state.goodssort = vel
	},
	setwarehouseid : function(state,vel){
		state.warehouseid = vel
	}
}

export default new Vuex.Store({
	state,
	mutations
})