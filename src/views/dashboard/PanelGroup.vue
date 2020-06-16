<template>
  <div>
      <el-row :gutter="10" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="handleData('borrowCar')">
            <div class="card-panel-icon-wrapper icon-people">
              <svg-icon icon-class="jieche" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                借车
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('messages')">
            <div class="card-panel-icon-wrapper icon-message">
              <svg-icon icon-class="jiebang" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                解绑
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="handleData('returnCar')">
            <div class="card-panel-icon-wrapper icon-money">
              <svg-icon icon-class="borrowcar" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                还车
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-yongche">
              <svg-icon icon-class="yongche" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                用车
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-weibao">
              <svg-icon icon-class="weibao" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                维保
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-youhao">
              <svg-icon icon-class="youhao" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                油耗
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="handleData('entrance')">
            <div class="card-panel-icon-wrapper icon-daozha1">
              <svg-icon icon-class="daozha" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                进口抬杆
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="handleData('exit')">
            <div class="card-panel-icon-wrapper icon-daozha2">
              <svg-icon icon-class="daozha" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                出口抬杆
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('purchases')">
            <div class="card-panel-icon-wrapper icon-whitelist">
              <svg-icon icon-class="whitelist" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                白名单
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-tixing">
              <svg-icon icon-class="tixing" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                到期提醒
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-jinji">
              <svg-icon icon-class="jinji" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                紧急单号
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
          <div class="card-panel" @click="goRouter('shoppings')">
            <div class="card-panel-icon-wrapper icon-yichang">
              <svg-icon icon-class="yichang" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                异常单号
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleData(type) {
      this.$emit('handleData', type)
    },
    goRouter(path){
      console.log(path);
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  // margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 80px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    border-radius: 8px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
      .icon-yongche{
        background: #ffb67c;
      }
      .icon-weibao{
        background: #baa1dd;
      }
      .icon-youhao{
        background: #ff4700;
      }
      .icon-daozha1{
        background: #10a7EA;
      }
      .icon-daozha2{
        background: #FF8c9d;
      }
      .icon-whitelist{
        background: #95b0fe;
      }
      .icon-yichang{
        background: #FFA647;
      }
      .icon-jinji{
        background: #ff6263;
      }
      .icon-tixing{
        background: #F8b360;
      }
    }
    .icon-tixing{
      color: #F8b360;
    }
    .icon-jinji{
      color: #ff6263;
    }
    .icon-yichang{
      color: #FFA647;
    }
    .icon-whitelist{
      color: #95b0fe;
    }
    .icon-daozha2{
      color: #FF8c9d;
    }
    .icon-daozha1{
      color: #10a7EA;
    }
    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
      
    }
    .icon-yongche{
      color: #ffb67c;
    }
    .icon-weibao{
      color: #baa1dd;
    }
    .icon-youhao{
      color: #ff4700;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 8px 0 0 8px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 30px;
    }

    .card-panel-description {
      // float: right;
      display: flex;
      height: 100%;
      font-weight: bold;
      margin: 0;
      justify-content: center;
      .card-panel-text {
        line-height: 80px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
