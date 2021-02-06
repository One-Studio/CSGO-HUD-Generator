<template>
  <div>
    <div class="head-out-box">
      <!-- <a href="">
        <img class="page-logo" src="../assets/One Studio alpha.png" alt="" />
      </a> -->
      <div class="head-inner-box">
        <ul class="head-ul">
          <li class="page-title">CSGO HUD Generator</li>
          <li>击杀生成</li>
          <li>准星生成</li>
          <li>其他</li>
          <!-- <li class="page-icon">？</li> -->
        </ul>
        <div class="head-icon">
          <a-icon type="question-circle" /><span style="margin-left: 10px"
            >中文/Eng</span
          >
        </div>
      </div>
    </div>
    <div style="padding-top: 70px">
      <a-card style="width: 1088px" class="index-card" bordered="false">
        <p>欢迎来到CSGO HUD Generator</p>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
// components
import DeathNotice from '@/components/DeathNotice.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Index',
  components: {
    DeathNotice
  }
})
export default class Index extends Vue {
  created () {
    // todo
  }

  Gotodeathnotice () {
    this.$router.push('/death-notice')
  }
}
</script>

<style lang="less" scoped>
.head-out-box {
  width: 100%;
  height: 60px;
  z-index: 1000;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: darkgrey 0 0 10px 0;
  .page-logo {
    float: left;
    // height: 20%;
    max-height: 60px;
  }
  .head-inner-box {
    width: 1088px;
    display: table;
    content: '';
    height: 100%;
    margin: 0 auto;
    .head-ul {
      float: left;
      list-style: none;
      line-height: 60px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      .page-title {
        font-size: 24px;
      }
      li {
        cursor: pointer;
        display: inline;
        float: left;
        margin-right: 30px;
        font-size: 15px;
      }
    }
    .head-icon {
      float: right;
    }
  }
}

.index-card {
  margin: 0 auto;
}
</style>
