<template>
  <div >    
      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
        <li v-for="item in goodslist" class="mui-table-view-cell">
          <div class="mui-row">
            <div class="mui-col-xs-10">
              <h4 class="mui-ellipsis">{{item.goods_name}}</h4>
            </div>
            <div @click="goto(item)" class='mui-row'>
              <div class="mui-col-xs-10">
                <ul>
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
    methods: {
      goto(item) {
        this.$router.push({name :'stokedetail',params : item})
      }
    },
  created () {
    //请求远程库存列表数据
    let url = "/train-rest/rest/saleorreturn/good_list" //远程请求地址
    let stoke = this.$store.state.params //生成请求参数对象
    let stokejson = JSON.stringify(stoke) //将请求参数对象转换程JSON格式
    this.$axios.post(url,stokejson,) //执行远程Ajax请求
        .then(
          response => {
              //console.log(response.data)
              if (response.data.success === true){
                this.goodslist = response.data.data
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
