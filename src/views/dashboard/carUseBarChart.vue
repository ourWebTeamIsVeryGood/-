<template>
  <el-card>
    <div slot="header" class="clearfix">
        <span>车辆使用{{status}}统计</span>
        <div class="right">
          <el-button size="mini" type="text" @click="getList('getMonth')">月</el-button>
          <el-button size="mini" type="text" @click="getList('getQuarter')">季度</el-button>
          <el-button size="mini" type="text" @click="getList('getYear')">年</el-button>
          <el-button size="mini" type="text">详情</el-button>
        </div>
    </div>
    <div id="carUse" style="width:100%;height:300px;"></div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="车牌号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="card"
        label="车卡号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="dept"
        label="所属部门"
        align="center">
      </el-table-column>
      <el-table-column
        prop="num"
        label="使用次数"
        align="center">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000;

export default {
    name:"carUseBarChart",
    mixins: [resize],
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    data(){
        return{
          status:"2020年",
          chart:null,
          search:{
            a:1
          },
          tableData:[
            {
              id:1,
              date:"A13455",
              num:2,
              dept:'一总队',
              card:112
            }
          ]
        }
    },
    methods:{
      initChart(){
        this.chart=echarts.init(document.getElementById("carUse"))
        this.chart.setOption({
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '使用次数',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        })
      },
      getList(str){
        if(str){
          let obj={...eval('this.'+str+"()"),...this.search}
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .right{
    display: flex;
    justify-content: flex-end;
    float: right;
  }
</style>