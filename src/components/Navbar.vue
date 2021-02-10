<template>
  <div>
    <div class="head-out-box">
      <div class="head-inner-box">
        <ul class="head-ul">
          <li class="page-title" @click="gotoIndex">CSGO HUD Generator</li>
          <li @click="gotoDeathnotice">击杀生成</li>
          <li @click="gotoCrosshair">准星生成</li>
          <li @click="otherClickFun">其他</li>
          <!-- <li class="page-icon">？</li> -->
        </ul>
        <div class="head-icon">
          <a-icon type="question-circle" /><span style="margin-left: 10px"
            >中文/En</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// components
import DeathNotice from '@/components/DeathNotice.vue'
import Crosshair from '@/components/Crosshair.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Index',
  components: {
    DeathNotice,
    Crosshair
  }
})
export default class Index extends Vue {
  isShowOtherPage = false

  created () {
    // todo
  }

  gotoIndex () {
    this.$router.push('/')
  }

  gotoDeathnotice () {
    this.$router.push('/death-notice')
  }

  gotoCrosshair () {
    this.$router.push('/crosshair')
  }

  otherClickFun () {
    // todo
    this.isShowOtherPage = true
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
