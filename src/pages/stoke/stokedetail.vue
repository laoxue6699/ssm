
<template>
    <div id="app">
        <header class="mui-bar mui-bar-nav">
            <div class="title">
                <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		        <h1 class="mui-title">库存详情</h1>
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
                 <li class="mui-table-view-cell">库存数量 : {{this.$route.params.goods_num}}</li>
			    </ul>
                <div class="mui-row bt">
                    <div class="mui-col-xs-3 ">日期</div>
                    <div class="mui-col-xs-3 ">业务员</div>
                    <div class="mui-col-xs-3 ">占用数量</div>
                    <div class="mui-col-xs-3 ">占用类型</div>
                </div>
                <ul  class="mui-table-view">
				 <li class="">
                    <div class="mui-row">
                        <span class="mui-col-xs-3">2018-09-18</span>
                        <span class="mui-col-xs-3">夏传乾</span>
                        <span class="mui-col-xs-3">7</span>
                        <span class="mui-col-xs-3">暂存</span>
                    </div>
                    
                </li>
                
			    </ul>
            </div>
			<div v-if="!isshow"> 
                <ul  class="mui-table-view">
				 <li class="mui-table-view-cell">大区名称 1</li>
                 <li class="mui-table-view-cell">商品编码 2</li>
		         <li class="mui-table-view-cell">商品名称 3</li>
		         <li class="mui-table-view-cell">仓库名称 4</li>
                 <li class="mui-table-view-cell">计量单位 5</li>
                 <li class="mui-table-view-cell">计划总量 6</li>
                 <li class="mui-table-view-cell">可用计划 7</li>
			    </ul>
                <div class="mui-row bt">
                    <div class="mui-col-xs-4 ">申报日期</div>
                    <div class="mui-col-xs-4 ">申报人</div>
                    <div class="mui-col-xs-4 ">计划数量</div>
                </div>
                <ul  class="mui-table-view">
				 <li class="">
                    <div class="mui-row">
                        <span class="mui-col-xs-4">2018-01-01</span>
                        <span class="mui-col-xs-4">许帮琼</span>
                        <span class="mui-col-xs-4">7000</span>

                    </div>   
                </li>
                <li class="">
                    <div class="mui-row">
                        <span class="mui-col-xs-4">2018-01-01</span>
                        <span class="mui-col-xs-4">许帮琼</span>
                        <span class="mui-col-xs-4">7000</span>

                    </div>   
                </li>
                <li class="">
                    <div class="mui-row">
                        <span class="mui-col-xs-4">2018-01-01</span>
                        <span class="mui-col-xs-4">许帮琼</span>
                        <span class="mui-col-xs-4">8000</span>

                    </div>   
                </li>
                <li class="">
                    <div class="mui-row">
                        <span class="mui-col-xs-4">2018-01-01</span>
                        <span class="mui-col-xs-4">许帮琼</span>
                        <span class="mui-col-xs-4">9000</span>

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
            //请求产品计划申报信息接口
        },
        data() {
            return {
                isbb : true,
                isshow : true,
                istc :true
            }
        },
        methods: {
            changebb() {
                this.isbb = !this.isbb
                this.isshow = !this.isshow
                this.istc = !this.istc
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