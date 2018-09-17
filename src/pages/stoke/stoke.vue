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
  provide () {
    return {
      reload : this.reload
    }
  },
  data() {
    return {
      issort : true,
      showcompany: false,
      showarea: false,
      showwarehouse: false,
      companyname: this.$store.state.userinfo.companyName,
      areaname: "请选择区域",
      warehousename: "请选择仓库",
      companylist: [
            {
                "businessLicence": "B",
                "companyNo": "B",
                "createTime": 1517899548000,
                "createUpdateInfo": false,
                "enable": true,
                "id": 6,
                "insertResource": false,
                "isDelete": "0",
                "isPlan": 1,
                "linkman": "B",
                "logourl": "d:/upload/20180206/5431f26e-1b86-40a0-b1bb-b99349171a79.jpg",
                "name": "丰乐农化分公司",
                "pId": 1,
                "phone": "B",
                "remark": "B",
                "scopeofBusiness": "B",
                "version": 0
            }
        ],
      arealist:  [],
      warehouselist: [],
      goodslist : []
    }
  },
  methods: {
    reload () {
      this.issort = false
      this.$nextTick(()=>{
        this.issort = true
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
      
      this.companyname = item.name
      this.showcompany = false
    },
    selectarea : function(item) { //选择区域
      this.areaname = item.name
       //对库存列表按区域名称进行筛选
      this.showarea = false
    },
    selectwarehouse : function(item) { //选择仓库
      //选中的仓库代码存入状态中，在库存列表中作为筛选条件
      this.$store.commit('setwarehouseid',item.cWhCode)
      //将库存列表状态改为按选中的仓库代码筛选
      this.$store.commit('setgoodssort','warehouse')
      this.warehousename = item.cWhName
      //对库存列表按仓库名称进行筛选
      this.reload()
      this.showwarehouse = false
    }
  },

}
</script>

<style scoped>
.title {
    height: 50px;
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