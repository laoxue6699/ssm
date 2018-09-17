<template>
    <div id="app">
        <div class="mui-content">
			<div style="padding: 10px 10px;">
				<div id="segmentedControl" class="mui-segmented-control">
					<a class="mui-control-item mui-active touch" href="#item1">待处理（8)</a>
					<a class="mui-control-item touch" href="#item2">未完成</a>
					<a class="mui-control-item touch" href="#item3">待收货</a>
                    <a class="mui-control-item touch" href="#item4">已完成</a>
				</div>
			</div>
			<div>
				<div id="item1" class="mui-control-content mui-active">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第一个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第一个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第一个选项卡子项-3
						</li>
                        <li class="mui-table-view-cell">
							第一个选项卡子项-4
						</li>
						<li class="mui-table-view-cell">
							第一个选项卡子项-5
						</li>
						<li class="mui-table-view-cell">
							第一个选项卡子项-6
						</li>
                        <li class="mui-table-view-cell">
							第一个选项卡子项-7
						</li>
						<li class="mui-table-view-cell">
							第一个选项卡子项-8
						</li>
					</ul>
				</div>
				<div id="item2" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第二个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第二个选项卡子项-2
						</li>
					</ul>
				</div>
                <div id="item3" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第三个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-3
						</li>
					</ul>
				</div>
				<div id="item4" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第四个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第四个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第四个选项卡子项-3
						</li>
                        <li class="mui-table-view-cell">
							第四个选项卡子项-4
						</li>
					</ul>
				</div>
			</div>
			
		</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .touch {touch-action: none;}
</style>