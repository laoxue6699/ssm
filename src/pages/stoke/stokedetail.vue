<template>
    <div>
        <header class="mui-bar mui-bar-nav">
			<div class="title">
                <a @click="goto" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
		        <h1 class="mui-title">商品详情</h1>
            </div>
		</header>
		<div class="mui-content">
			<div class="mui-row">
                <div @click="changebb" class="mui-col-xs-6" :class={bb:isbb,tc:istc}>库存详情</div>
                <div @click="changebb" class="mui-col-xs-6" :class={bb:!isbb,tc:!istc}>计划详情</div>
            </div>
            <div v-if="isshow">
                <ul  class="mui-table-view">
				 <li class="mui-table-view-cell">商品编码 : {{this.$route.params.goods_code}}</li>
		         <li class="mui-table-view-cell">商品名称 : {{this.$route.params.goods_name}}</li>
		         <li class="mui-table-view-cell">仓库名称 : {{this.$route.params.goods_warehouse}}</li>
                 <li class="mui-table-view-cell">计量单位 : {{this.$route.params.goods_unit}}</li>
                 <li class="mui-table-view-cell">库存数量 : {{this.$route.params.erpGoodsNum}}</li>
			    </ul>
                <div class="mui-row bt">
                    <div class="mui-col-xs-3 ">日期</div>
                    <div class="mui-col-xs-3 ">业务员</div>
                    <div class="mui-col-xs-3 ">占用数量</div>
                    <div class="mui-col-xs-3 ">占用类型</div>
                </div>
                <ul  class="mui-table-view">
				 <li class="" v-for="item in stokelist">
                    <div class="mui-row">
                        <span class="mui-col-xs-3">{{item.submitTime}}</span>
                        <span class="mui-col-xs-3">{{item.name}}</span>
                        <span class="mui-col-xs-3">{{item.goods_num}}</span>
                        <span class="mui-col-xs-3">{{item.type}}</span>
                    </div>       
                </li>  
			    </ul>
                <div class="mui-col-xs-12">可用数量 : {{this.$route.params.goods_num}}</div>
            </div>
			<div v-if="!isshow"> 
                <ul  class="mui-table-view">
				 <li class="mui-table-view-cell">大区名称 : {{this.planlist.areaName}}</li>
                 <li class="mui-table-view-cell">商品编码 : {{this.planlist.goodsCode}}</li>
		         <li class="mui-table-view-cell">商品名称 : {{this.planlist.goodsName}}</li>
		         <li class="mui-table-view-cell">仓库名称 : {{this.$route.params.goods_warehouse}}</li>
                 <li class="mui-table-view-cell">计量单位 : {{this.$route.params.goods_unit}}</li>
                 <li class="mui-table-view-cell">计划总量 : {{this.planlist.totalPlanNum}}</li>
                 <li class="mui-table-view-cell">可用计划 : {{this.planlist.availablePlan}}</li>
			    </ul>
                <div class="mui-row bt">
                    <div class="mui-col-xs-4 ">申报日期</div>
                    <div class="mui-col-xs-4 ">申报人</div>
                    <div class="mui-col-xs-4 ">计划数量</div>
                </div>
                <ul  class="mui-table-view">
				 <li class="" v-for="item in applylist">
                    <div class="mui-row">
                        <span class="mui-col-xs-4">{{item.submitTimeSn}}</span>
                        <span class="mui-col-xs-4">{{item.userName}}</span>
                        <span class="mui-col-xs-4">{{item.goodsNum}}</span>
                    </div>   
                </li>    
			    </ul>
			</div>
		</div>

    </div>
</template>

<script>
    export default {
        created () {
            //请求产品占用信息API接口
            //请求远程库存列表数据
            let stokeurl = "/train-rest/rest/saleorreturn/getOccupyByGoodsCode" //远程请求地址
            let stoke = {}
            stoke.goods_code = this.$route.params.goods_code
            stoke.token = this.$store.state.params.token
            //生成请求参数对象
            let stokejson = JSON.stringify(stoke) //将请求参数对象转换程JSON格式
            this.$axios.post(stokeurl,stokejson,) //执行远程Ajax请求
                .then(
                response => {
                    //console.log(response.data)
                    if (response.data.success === true){
                        this.stokelist = response.data.data
                      //  console.log('stokelist',this.stokelist)
                    }
                },
                response => {
                    console.log(
                    "发送失败" + response.status + "," + response.statusText
                    )
                }
            )
            //请求产品计划信息接口
            let planurl = "/train-rest/rest/plan/get" //远程请求地址
            let plan = {}
            plan.goodsCode = this.$route.params.goods_code
            plan.areaCode = this.$store.state.params.largeAreaCode
            plan.companyId = this.$store.state.params.companyId
            plan.token = this.$store.state.params.token
            //console.log(plan)
            //生成请求参数对象
            let planjson = JSON.stringify(plan) //将请求参数对象转换程JSON格式
            this.$axios.post(planurl,planjson,) //执行远程Ajax请求
                .then(
                response => {
                    //console.log(response.data)
                    if (response.data.success === true){
                        this.planlist = response.data.data
                       // console.log('planlist',this.planlist)
                    }
                },
                response => {
                    console.log(
                    "发送失败" + response.status + "," + response.statusText
                    )
                }
                )
            //请求计划申报信息接口
            let applyurl = "/train-rest/rest/plan/getChildList" //远程请求地址
            let apply = {}
           // console.log(this.$route.params)
            apply.page = 1
            apply.pageSize = 20
            apply.areaCode = this.$store.state.params.largeAreaCode
            apply.token = this.$store.state.params.token
            //console.log(apply)
            //生成请求参数对象
            let applyjson = JSON.stringify(apply) //将请求参数对象转换程JSON格式
            this.$axios.post(applyurl,applyjson,) //执行远程Ajax请求
                .then(
                response => {
                    //console.log(response.data)
                    if (response.data.success === true){
                        this.applylist = response.data.data
                       // console.log('applylist',this.applylist)
                    }
                },
                response => {
                    console.log(
                    "发送失败" + response.status + "," + response.statusText
                    )
                }
                )
                },
        data() {
            return {
                isbb : true,
                isshow : true,
                istc :true,
                stokelist : [],
                planlist : [],
                applylist: []
            }
        },
        methods: {
            changebb() {
                this.isbb = !this.isbb
                this.isshow = !this.isshow
                this.istc = !this.istc
            },
            goto () {
                this.$router.replace({name :'stoke'})
            }
        },
    }
</script>

<style scoped>
.mui-table-view-cell {
    padding-left: 30px;
    font-size: 14px;
}
span {font-size: 14px;}

.mui-col-xs-12 {
    background-color: #fff;
    padding: 10px 30px;
    font-size: 14px;
    color: red;
}
.mui-col-xs-6,.mui-col-xs-3,.mui-col-xs-4{
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-left:0;
    padding-right: 0;
}
.bt {
    font-size: 16px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
}
.bb {
    border-bottom:2px solid #62b587;
}
.tc {
    color: #62b587;
}
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
</style>