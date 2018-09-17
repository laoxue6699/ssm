<template>
  <div id="app">
    <div class="mui-bar mui-bar-nav">
      <top  pagetitle="库存查询" />
      <div class="mui-content">
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
      </div>

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

      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
        <li v-for="item in goodslist" class="mui-table-view-cell">
          <div class="mui-row">
            <div class="mui-col-xs-10">
              <h4 class="mui-ellipsis">{{item.goods_name}}</h4>
            </div>
            <div class='mui-row'>
              <div class="mui-col-xs-10">
                <ul>
                  <li>商品编码：{{item.warehouse_code}}</li>
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


  <bottom />
  </div>
</template>

<script>
import top from "../../components/top";
import bottom from "../../components/bottom";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      pagetitle: "库存查询：点击选择所要查询的公司",
      showcompany: false,
      showarea: false,
      showwarehouse: false,
      companyname: "请选择公司",
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
      arealist:  [
        {
            "code": "000100",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "0101",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "北方大区（梁克印）",
            "areaUserCode": "2013201",
            "id": 18,
            "shortName": "北方大区（梁克印）20650万",
            "seq": 1
        },
        {
            "code": "000200",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "0102",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "南方大区（余金兵）",
            "areaUserCode": "1999205",
            "id": 22,
            "shortName": "南方大区（余金兵）10300万",
            "seq": 1
        },
        {
            "code": "000300",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "0103",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "东北大区（李保）",
            "areaUserCode": "1997206",
            "id": 23,
            "shortName": "东北大区（李保）12100万",
            "seq": 1
        },
        {
            "code": "000400",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "0104",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "大客户（彭国庆）",
            "areaUserCode": "1999203",
            "id": 24,
            "shortName": "大客户（彭国庆）1350万",
            "seq": 1
        },
        {
            "code": "000500",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "0105",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "新疆（李阳）",
            "areaUserCode": "2007019",
            "id": 25,
            "shortName": "新疆（李阳）600万",
            "seq": 1
        },
        {
            "code": "000900",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "药肥事业部-非正常",
            "areaUserCode": "10001",
            "id": 43,
            "shortName": "药肥事业部-非正常",
            "seq": 1
        },
        {
            "code": "009009",
            "level": "2",
            "createRecordTime": null,
            "pid": "20",
            "remark": "",
            "erp_code": null,
            "version": 0,
            "companyId": 6,
            "enable": true,
            "name": "测试区域",
            "areaUserCode": "admin6",
            "id": 45,
            "shortName": "",
            "seq": 1
        }
    ],
      warehouselist: [
        {
            "id": 136,
            "cWhCode": "M017",
            "cWhName": "（肥料）肥东作物库",
            "type": null,
            "typeCn": null,
            "companyId": 6,
            "status": 1,
            "cityId": 10101,
            "cityName": "合肥",
            "companyNames": "丰乐农化分公司",
            "statusName": "启用"
        },
        {
            "id": 137,
            "cWhCode": "F005",
            "cWhName": "肥东制剂成品库",
            "type": null,
            "typeCn": null,
            "companyId": 6,
            "status": 1,
            "cityId": 10101,
            "cityName": "合肥",
            "companyNames": "丰乐农化分公司",
            "statusName": "启用"
        },
        {
            "id": 138,
            "cWhCode": "M013",
            "cWhName": "（肥料）上海先正达库",
            "type": null,
            "typeCn": null,
            "companyId": 6,
            "status": 1,
            "cityId": 10101,
            "cityName": "合肥",
            "companyNames": "丰乐农化分公司",
            "statusName": "启用"
        },
        {
            "id": 139,
            "cWhCode": "M014",
            "cWhName": "（肥料）安徽农望库",
            "type": null,
            "typeCn": null,
            "companyId": 6,
            "status": 1,
            "cityId": 10101,
            "cityName": "合肥",
            "companyNames": "丰乐农化分公司",
            "statusName": "启用"
        },
        {
            "id": 140,
            "cWhCode": "M015",
            "cWhName": "（肥料）大兴成品库",
            "type": null,
            "typeCn": null,
            "companyId": 6,
            "status": 1,
            "cityId": 10101,
            "cityName": "合肥",
            "companyNames": "丰乐农化分公司",
            "statusName": "启用"
        }
    ],
    goodslist : [
        {
            "id": null,
            "area_code": null,
            "area_name": null,
            "warehouse_code": "D003",
            "goods_warehouse": "大兴库（原药销售）",
            "goods_code": "01010006",
            "goods_name": "乙草胺原油90’",
            "goods_standard": "实重",
            "goods_category_code": null,
            "goods_price": 6,
            "goods_num": 2250,
            "goods_unit": "kg",
            "goods_plan": 0,
            "goods_taxRate": null,
            "customId": 0,
            "loadTonnage": null,
            "loadVolume": null,
            "cInvStd": null,
            "unitName": null,
            "batch": null,
            "usedNum": null,
            "appNum": null,
            "defineNum": null,
            "erpGoodsNum": 2250,
            "goods_numberRate": null,
            "goods_number": 2250,
            "isPlan": 1,
            "areaId": null,
            "customGoodsList": null,
            "retainNum": 0,
            "goods_type": 0,
            "cInvDefine14": 1,
            "produce_time": null,
            "produceTimeTxt": null,
            "saleOrReturnId": 0
        },
        {
            "id": null,
            "area_code": null,
            "area_name": null,
            "warehouse_code": "D003",
            "goods_warehouse": "大兴库（原药销售）",
            "goods_code": "01010020",
            "goods_name": "丙环唑原药",
            "goods_standard": "实重",
            "goods_category_code": null,
            "goods_price": 0,
            "goods_num": 250,
            "goods_unit": "kg",
            "goods_plan": 0,
            "goods_taxRate": null,
            "customId": 0,
            "loadTonnage": null,
            "loadVolume": null,
            "cInvStd": null,
            "unitName": null,
            "batch": null,
            "usedNum": null,
            "appNum": null,
            "defineNum": null,
            "erpGoodsNum": 250,
            "goods_numberRate": null,
            "goods_number": 250,
            "isPlan": 1,
            "areaId": null,
            "customGoodsList": null,
            "retainNum": 0,
            "goods_type": 0,
            "cInvDefine14": 1,
            "produce_time": null,
            "produceTimeTxt": null,
            "saleOrReturnId": 0
        },
        {
            "id": null,
            "area_code": null,
            "area_name": null,
            "warehouse_code": "D003",
            "goods_warehouse": "大兴库（原药销售）",
            "goods_code": "01010044",
            "goods_name": "高效氯氟氰菊酯（功夫菊酯）",
            "goods_standard": "实重",
            "goods_category_code": null,
            "goods_price": 0,
            "goods_num": 875,
            "goods_unit": "kg",
            "goods_plan": 0,
            "goods_taxRate": null,
            "customId": 0,
            "loadTonnage": null,
            "loadVolume": null,
            "cInvStd": null,
            "unitName": null,
            "batch": null,
            "usedNum": null,
            "appNum": null,
            "defineNum": null,
            "erpGoodsNum": 875,
            "goods_numberRate": null,
            "goods_number": 875,
            "isPlan": 1,
            "areaId": null,
            "customGoodsList": null,
            "retainNum": 0,
            "goods_type": 0,
            "cInvDefine14": 1,
            "produce_time": null,
            "produceTimeTxt": null,
            "saleOrReturnId": 0
        },
        {
            "id": null,
            "area_code": null,
            "area_name": null,
            "warehouse_code": "D003",
            "goods_warehouse": "大兴库（原药销售）",
            "goods_code": "01010050",
            "goods_name": "磺草酮原药",
            "goods_standard": "实重",
            "goods_category_code": null,
            "goods_price": 0,
            "goods_num": 340.9,
            "goods_unit": "kg",
            "goods_plan": 0,
            "goods_taxRate": null,
            "customId": 0,
            "loadTonnage": null,
            "loadVolume": null,
            "cInvStd": null,
            "unitName": null,
            "batch": null,
            "usedNum": null,
            "appNum": null,
            "defineNum": null,
            "erpGoodsNum": 340.9,
            "goods_numberRate": null,
            "goods_number": 340.9,
            "isPlan": 1,
            "areaId": null,
            "customGoodsList": null,
            "retainNum": 0,
            "goods_type": 0,
            "cInvDefine14": 1,
            "produce_time": null,
            "produceTimeTxt": null,
            "saleOrReturnId": 0
        },
        {
            "id": null,
            "area_code": null,
            "area_name": null,
            "warehouse_code": "D003",
            "goods_warehouse": "大兴库（原药销售）",
            "goods_code": "01010070",
            "goods_name": "氰氟草酯",
            "goods_standard": "实重",
            "goods_category_code": null,
            "goods_price": 0,
            "goods_num": 475,
            "goods_unit": "kg",
            "goods_plan": 0,
            "goods_taxRate": null,
            "customId": 0,
            "loadTonnage": null,
            "loadVolume": null,
            "cInvStd": null,
            "unitName": null,
            "batch": null,
            "usedNum": null,
            "appNum": null,
            "defineNum": null,
            "erpGoodsNum": 475,
            "goods_numberRate": null,
            "goods_number": 475,
            "isPlan": 1,
            "areaId": null,
            "customGoodsList": null,
            "retainNum": 0,
            "goods_type": 0,
            "cInvDefine14": 1,
            "produce_time": null,
            "produceTimeTxt": null,
            "saleOrReturnId": 0
        }
    ]
    }
  },
  methods: {
    company: function() {
      this.showcompany = true
      this.showarea = false
      this.showwarehouse = false
    },
    area: function() {
      this.showarea = true
      this.showcompany = false
      this.showwarehouse = false
    },
    warehouse: function() {
      this.showwarehouse = true
      this.showcompany = false
      this.showarea = false
    },
    selectcompany: function(item) {
      this.companyname = item.name
      this.showcompany = false
    },
    selectarea: function(item) {
      this.areaname = item.name
      this.showarea = false
    },
    selectwarehouse: function(item) {
      this.warehousename = item.cWhName
      this.showwarehouse = false
    }
  }
};
</script>

<style scoped>
.mui-bar {
  padding-left: 0;
  padding-right: 0;
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
</style>
