<template>
  <div >    
      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
        <li v-for="item in goodslist" class="mui-table-view-cell">
          <div class="mui-row">
            <div class="mui-col-xs-10">
              <h4 class="mui-ellipsis">{{item.goods_name}}</h4>
            </div>
            <div class='mui-row'>
              <div class="mui-col-xs-10">
                <ul>
                  <li>公司：{{companyname}}</li>
                  <li>区域：{{item.area_name}}</li>
                  <li>仓库：{{item.goods_warehouse}}</li>
                  <li>商品编码：{{item.goods_code}}</li>
                  <li>剩余库存：{{item.goods_num}}</li>
                  <li>可用计划：{{item.goods_plan}}</li>
                  <li>规格：  {{item.goods_standard}}</li>
                  <li>单价：  {{item.goods_price}}</li>
                  <li>单位：  {{item.goods_unit}}</li>
                </ul>
              </div>
              <div class="mui-col-xs-2">
                <span class="mui-navigate-right"></span>
              </div>
            </div>
          </div>
         </li>
        </ul>
  </div>
</template>

<script>
  export default {
    inject : ['reload'],
    data() {
      return {
        companyname: this.$store.state.userinfo.companyName,
        goodslist: []
      }
    },   
  created : function() {
    //请求远程库存列表数据
    let url = "/train-rest/rest/saleorreturn/good_list" //远程请求地址
    let stoke = {} //生成请求参数对象
    stoke.token = this.$store.state.userinfo.token //从本地存取的用户信息中读取token
    stoke.processCodes = '2'
    stoke.companyId = this.$store.state.userinfo.companyId //从本地存取的用户信息中读取公司ID
    stoke.page = "1"
    stoke.pageSize = "20"
    stoke.process_type = "send_goods"
    stoke.isMe = "1"
      let stokejson = JSON.stringify(stoke) //将请求参数对象转换程JSON格式
      this.$axios.post(url,stokejson,) //执行远程Ajax请求
        .then(
          response => {
              //console.log(response.data)
              if (response.data.success === true){
                  if(this.$store.state.goodssort === 'all'){
                    this.goodslist = response.data.data
                  }
                  if(this.$store.state.goodssort === 'warehouse'){
                    let reclist = response.data.data
                    let warehouseid = this.$store.state.warehouseid
                    this.goodslist = reclist.filter(obj => obj.warehouse_code = warehouseid)
                  }
                  console.log('goodssort',this.$store.state.goodssort)
                  console.log('warehouseid',this.$store.state.warehouseid)
            }
          },
          response => {
            console.log(
              "发送失败" + response.status + "," + response.statusText
            )
          }
        )
        
    //this.$store.commit('setuserinfo')
    //console.log(this.$store.state.userinfo)
  }
  }
</script>

<style scoped>
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
