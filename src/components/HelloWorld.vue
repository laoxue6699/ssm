<template>
  <div id="hell">
    <h3 @click="getData">{{msg}}</h3>
     <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">面板1</a>
            <div class="mui-collapse-content">
                <p>面板1子内容</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '点击获取数据'
    }
  },
  methods: {
    getData() {
      let url ='/train-rest/rest/user/login'
      this.$axios.post(url,
      {"loginName":"2016238","password":"123456"},
      {emulateJSON:true}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
