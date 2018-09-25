/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由插件
import home from '../pages/home/home' //引入首页组件
import login from '../pages/login/login' //引入登录页组件
import cover from '../pages/cover' //引入封面组件
import sale from '../pages/sale/sale' //引入库存查询页面
import stoke from '../pages/stoke/stoke' //引入销售发货页面
import capital from '../pages/capital/capital' //引入资金管理页面
import profile from '../pages/profile/profile'
import stokedetial from '../pages/stoke/stokedetail'

//声明使用路由插件
Vue.use(VueRouter)

export default new VueRouter({
    //配置所有路由
    routes: [
        {
            path : '/home',
            name : 'home',
            component : home
        },
        {
            path : '/login',
            component : login
        },
        {
            path : '/sale',
            component : sale
        },
        {
            path : '/stoke',
            name : 'stoke',
            component : stoke
        },
        {
            path : '/capital',
            component : capital
        },
        {
            path : '/profile',
            component : profile
        },
        {
            path : '/stokedetail',
            name : 'stokedetail',
            component : stokedetial
        },
        {
            path : '/',
            redirect : '/login'
        }
    ]
})