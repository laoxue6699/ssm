<template>
    <div>
        <header class="mui-bar mui-bar-nav ">
            <div class="title">
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		        <h1 class="mui-title">库存查询</h1>
            </div>
        <form id='login-form' class="mui-input-group">
          <div @click="company" class="mui-input-row">
            <div class="mui-row label">
              <div class="mui-col-xs-2 ">公司</div>
              <div class="mui-col-xs-8 name">{{companyname}}</div>
              <div class="mui-col-xs-2  mui-navigate-right"></div>
            </div >
          </div>
          <div @click="area" class="mui-input-row">
            <div class="mui-row label">
              <div class="mui-col-xs-2 ">区域</div>
              <div class="mui-col-xs-8 name">{{areaname}}</div>
              <div class="mui-col-xs-2  mui-navigate-right"></div>
            </div >
          </div>
          <div @click="warehouse" class="mui-input-row">
            <div class="mui-row label">
              <div class="mui-col-xs-2 ">仓库</div>
              <div class="mui-col-xs-8 name">{{warehousename}}</div>
              <div class="mui-col-xs-2  mui-navigate-right"></div>
            </div >
          </div>
        </form>    

		</header>
		<div class="mui-content">
        <div v-show="showcompany" id="company" class="">
        <h4>选择公司</h4> <ul class="mui-table-view">
             <li v-for= "item in this.companylist" class="mui-table-view-cell">
               <span @click="selectcompany(item)" >{{item.name}}</span>
              </li>
        </ul>
      </div>
      <div v-show="showarea" id="area" class="">
        <h4>选择区域</h4> <ul class="mui-table-view">
             <li v-for= "item in this.arealist" class="mui-table-view-cell">
               <span @click="selectarea(item)" >{{item.name}}</span>
              </li>
        </ul>
      </div>
      <div v-show="showwarehouse" id="warehouse" class="
      ">
        <h4>选择仓库</h4> <ul class="mui-table-view">
             <li v-for= "item in this.warehouselist" class="mui-table-view-cell">
               <span @click="selectwarehouse(item)" >{{item.cWhName}}</span>
              </li>
        </ul>
      </div>
          <!--插入库存列表-->
          <liststoke v-if="issort"></liststoke>
      
      </div>
    </div>
</template>

<script>
import liststoke from './list_stoke'
export default {
  components: {
    liststoke
  },
  provide () { //设置动态刷新组件
    return {
      reload : this.reload
    }
  },
  data() {
    return { //设置本实例所用到的变量值
      issort : true, //刷新列表的标志
      showcompany: false, //选择公司区块默认隐藏
      showarea: false, //选择区域区块默认隐藏
      showwarehouse: false, //选择仓库区块默认隐藏
      companyname: this.$store.state.userinfo.companyName, //公司名称 默认取自状态库
      areaname: "请选择大区", //区域名称
      warehousename: "请选择仓库", //仓库名称
      companylist: this.$store.state.userinfo.company, //公司列表 默认取自状态库
      companyId: this.$store.state.userinfo.companyId, //公司代码 默认取自状态库
      largeAreaCode: "", //区域代码
      wareHouseCode: "", //仓库代码
      keyword: "", //模糊查询关键字
      token: "", //token 默认取自状态库
      params:{}, //参数库
      arealist:  [], //区域列表
      warehouselist: [], //仓库列表
      goodslist : [] //库存列表
    }
  },
  created () {
    this.params.token = this.$store.state.userinfo.token
    this.params.page = 1
    this.params.pageSize = 10
    this.params.companyId = this.$store.state.userinfo.companyId
    this.params.largeAreaCode = this.largeAreaCode
    this.params.keyword = this.keyword
    this.params.wareHouseCode = this.wareHouseCode
    this.$store.commit('setparams',this.params)
  },
  methods: {
    setparams() { //初始化请求远程数据参数
    this.params.token = this.token
    this.params.page = 1
    this.params.pageSize = 10
    this.params.companyId = this.companyId
    this.params.largeAreaCode = this.largeAreaCode
    this.params.keyword = this.keyword
    this.params.wareHouseCode = this.wareHouseCode
    this.$store.commit('setparams',this.params)
    console.log(this.store.state.params)
  },
    provide () {
      return {
        reload :this.reload
      }
    },
    reload () {
      this.issort = false
      this.$nextTick(()=>{
      this.issort = true
      this.setparams
      }) 

    },
    company () { //点击公司名称，显示公司选择窗口，同时隐藏其他两个窗口
      this.showcompany = true
      this.showarea = false
      this.showwarehouse = false
    },
    area () { //点击区域名称，显示公司选择窗口，同时隐藏其他两个窗口
      this.showarea = true
      this.showcompany = false
      this.showwarehouse = false
      //请求远程区域数据
          let id = this.$store.state.userinfo.companyId
          let url = "/train-rest/rest/area/listOfLastArea?companyId=" +'"'+id+'"'//远程请求地址
          let area = {} //生成请求参数对象
            area.page = 1
            area.pageSize = 20
            area.token = this.$store.state.userinfo.token //从本地存取的用户信息中读取token
            area.isMe = 2
            area.companyId = this.$store.state.userinfo.companyId
            let areajson = JSON.stringify(area) //将请求参数对象转换程JSON格式
            //console.log(areajson)
            this.$axios.post(url,areajson,{
              headers:{'content-type':'application/json;charset=UTF-8'}
            }) //执行远程Ajax请求
              .then(
                response => {
                  //console.log(response.data)
                  if (response.data.success === true){
                    this.arealist = response.data.data //将远程请求成功的库存列表数据赋给本地变量数组
                    this.select = "area"
                    //console.log(response.data.data)
                  }
                },
                response => {
                  console.log(
                    "发送失败" + response.status + "," + response.statusText
                  )
                }
              )
          },
    warehouse () { //点击仓库名称，显示公司选择窗口，同时隐藏其他两个窗口
      this.showwarehouse = true
      this.showcompany = false
      this.showarea = false
      //请求远程仓库数据
      let url = "/train-rest/rest/warehouse/list" //远程请求地址
      let warehouse = {} //生成请求参数对象
        warehouse.token = this.$store.state.userinfo.token //从本地存取的用户信息中读取token
        warehouse.processCodes = '2'
        warehouse.companyId = this.$store.state.userinfo.companyId //从本地存取的用户信息中读取公司ID
        warehouse.page = "1"
        warehouse.pageSize = "5"
        warehouse.process_type = "send_goods"
        warehouse.isMe = "1"
        let warehousejson = JSON.stringify(warehouse) //将请求参数对象转换程JSON格式
      // console.log(warehousejson)
        this.$axios.post(url,warehousejson) //执行远程Ajax请求
          .then(
            response => {
              //console.log(response.data)
              if (response.data.success === true){
                this.warehouselist = response.data.data //将远程请求成功的库存列表数据赋给本地变量数组
              // console.log(response.data.data)
              }
            },
            response => {
              console.log(
                "发送失败" + response.status + "," + response.statusText
              )
            }
          )
      },
    selectcompany : function(item) { //选择公司
      //请求远程公司数据
     // this.companyId = item.id
      this.companyname = item.name
      this.showcompany = false
      this.params.companyId = this.companyI
      this.$store.commit('setparams',this.params)
      this.reload()
      //console.log(this.$store.state.params)
    },
    selectarea : function(item) { //选择区域
      this.largeAreaCode = item.code
      this.areaname = item.name
       //对库存列表按区域名称进行筛选
      this.showarea = false
      //console.log('item',item)
      this.params.largeAreaCode = item.code
      this.params.largAreaName = item.name
      this.$store.commit('setparams',this.params)
      //console.log(this.$store.state.params)
      this.reload()
    },
    selectwarehouse : function(item) { //选择仓库
      this.wareHouseCode = item.cWhCode
      this.warehousename = item.cWhName
      //对库存列表按仓库名称进行筛选
      this.showwarehouse = false
      this.params.wareHouseCode = this.wareHouseCode
      this.$store.commit('setparams',this.params)
      //console.log(this.$store.state.params)
      this.reload()
    }
  },

}
</script>

<style scoped>
.title {
    height: 40px;
    line-height: 40px;
    background-color: #4093d6;
    color: #fff;
}
.mui-pull-left,h1{
    color: #fff;
}
.mui-bar {
  padding-left: 0;
  padding-right: 0;
}
.mui-content {
    margin-top: 130px;
}
h4 {
  padding: 10px;
  color: brown;
}
.label {
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.1;
    padding: 11px 15px;
}
.name {
  text-align:center;
}
.mui-col-xs-10 li {
    font-size: 16px;
}
</style>