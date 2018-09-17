<template>
    <div>
       <header class="mui-bar mui-bar-nav">
			<div id="banner" >
            <img src="../../assets/images/slider3.jpg">
        </div>
		</header>
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">业务</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-phone"></span>
				<span class="mui-tab-label">营销</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-compose"></span>
				<span class="mui-tab-label">考核</span>
			</a>
            <a class="mui-tab-item" href="#tabbar-with-asset">
				<span class="mui-icon mui-icon-paperclip"></span>
				<span class="mui-tab-label">辅助</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我</span>
			</a>
		</nav>
		<div class="mui-content">
			<div id="tabbar" class="mui-control-content mui-active">
            <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/sale">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">销售发货</div>
                        </router-link>
                    </li>
		            <li  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						 <router-link to="/stoke">
		                    <span class="mui-icon mui-icon mui-icon-map"></span>
		                   
                    	</router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">代销发货</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">回款申报</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">调货申请</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-refresh"></span>
		                    <div class="mui-media-body">退货申请</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">促销申请</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">开票申请</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">往来查询</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">计划调剂</div></a></li>
		        </ul> 
		    </div>    	
			</div>

			<div id="tabbar-with-chat" class="mui-control-content">
            <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-locked"></span>
		                    <div class="mui-media-body">合同管理</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">客户拜访</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-search"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">客户分析</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">客户信用</div></a></li>
		        </ul> 
		    </div>
			</div>

			<div id="tabbar-with-contact" class="mui-control-content">
            <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-map"></span>
		                    <div class="mui-media-body">工作日志</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">移动考勤</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-paperplane"></span>
		                    <div class="mui-media-body">业绩管理</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-help"></span>
		                    <div class="mui-media-body">在线学习</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">在线考试</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon mui-icon-redo"></span>
		                    <div class="mui-media-body">成绩查询</div></a></li>
		        </ul> 
		    </div>	
			</div>

			<div id="tabbar-with-asset" class="mui-control-content">
			<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatboxes"></span>
		                    <div class="mui-media-body">活动计划</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-list"></span>
		                    <div class="mui-media-body">活动总结</div></a></li>
		        </ul> 
		    </div>	
			</div>
			<div id="tabbar-with-map" class="mui-control-content">
				<div class="title">这是div模式选项卡中的第4个子页面，该页面展示一个常见的设置示例.</div>
				<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						新消息通知
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						隐私
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						通用
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						关于mui
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a style="text-align: center;color: #FF3B30;">
						退出登录
					</a>
				</li>
			</ul>
			</div>
		</div>
	</body>
    </div>
</template>

<script>
    export default {
		
    }
</script>
     
<style scoped>
.title{
	margin: 20px 15px 10px;
	color: #6d6d72;
	font-size: 15px;
}
			
.oa-contact-cell.mui-table .mui-table-cell {
	padding: 11px 0;
	vertical-align: middle;
}
			
.oa-contact-cell {
	position: relative;
	margin: -11px 0;
}
	
.oa-contact-avatar {
	width: 75px;
}
.oa-contact-avatar img {
	border-radius: 50%;
}
.oa-contact-content {
	width: 100%;
}
.oa-contact-name {
	margin-right: 20px;
}
.oa-contact-name, oa-contact-position {
	float: left;
}
header {
    height: 176px;
}
.mui-bar-nav ~ .mui-content {
    padding-top: 176px;
}
.mui-bar {
    padding-left:0;
    padding-right: 0;
}
 img {
    width: 100%;
}
</style>