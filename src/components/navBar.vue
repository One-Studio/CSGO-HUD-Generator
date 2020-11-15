<template>
  <div class="main-warpper">
    <div class="nav-bar">
      <div class="left-box">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'NavBar'
})
export default class NavBar extends Vue {
  created () {
    // todo
  }
}
</script>

<style lang="less" scoped>
.main-warpper {
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #d8d8d8;
  padding: 0 400px;
  line-height: 60px;
  .nav-bar {
    .left-box {
      height: 34px;
      width: 545px;
    }
  }
}</style
>>
