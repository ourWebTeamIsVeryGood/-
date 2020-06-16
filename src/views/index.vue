<template>
  <div class="dashboard-editor-container">
    <panel-group @handleData="handleData" />

    <!-- <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row> -->

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <carUseBarChart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div ref="print" class="chart-wrapper">
          <peopleCar/>
        </div>
      </el-col>
    </el-row>
    <!-- 借车弹窗 -->
    <el-dialog width="30%" top="20vh" title="借车" :visible.sync="borrowCarStatus">
      <el-form size="mini" :model="borrowCarForm">
        <el-form-item label="活动名称" label-width="80px">
          <el-input v-model="borrowCarForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="80px">
          <el-select v-model="borrowCarForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="borrowCarStatus = false">取 消</el-button>
        <el-button type="primary" @click="borrowCarStatus = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog width="30%" top="20vh" title="还车" :visible.sync="returnCarStatus">
      <el-form size="mini" :model="returnCarForm">
        <el-form-item label="活动名称" label-width="80px">
          <el-input v-model="returnCarForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" label-width="80px">
          <el-select v-model="returnCarForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="returnCarStatus = false">取 消</el-button>
        <el-button type="primary" @click="returnCarStatus = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup'
import carUseBarChart from './dashboard/carUseBarChart'
import peopleCar from './dashboard/peopleCar'

export default {
  name: 'Index',
  components: {
    PanelGroup,
    carUseBarChart,
    peopleCar
  },
  data() {
    return {
      borrowCarStatus:false,
      borrowCarForm:{},
      returnCarStatus:false,
      returnCarForm:{}
    }
  },
  methods: {
    handleData(type) {
      eval("this."+type+"()");
    },
    borrowCar(){
      this.borrowCarStatus=true;
    },
    returnCar(){
      this.returnCarStatus=true;
    },
    exit(){
      this.$confirm("确定出口抬杆？","提示",{
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // lockScroll:false,
        type: "warning"
      }).then(_=>{
          this.msgSuccess("抬杆成功");
      }).catch(_=>{
          console.log("取消");
      })
    },
    entrance(){
      this.$confirm("确定进口抬杆？","提示",{
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(_=>{
          this.msgSuccess("抬杆成功");
      }).catch(_=>{
          console.log("取消");
      })
    },
    myprint(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    // padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
