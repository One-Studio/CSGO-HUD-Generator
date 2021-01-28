<template>
  <div class="main-warpper">
    <div class="nav-bar">
      <a-menu mode="horizontal">
        <a-menu-item disabled>CSGO HUD Generator</a-menu-item>
        <a-menu-item @click="Gotodeathnotice">击杀生成</a-menu-item>
        <a-menu-item>准星生成</a-menu-item>
        <a-menu-item>其他</a-menu-item>
      </a-menu>
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
.main-warpper {
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #FFFFFF;
  padding: 0 400px;
  line-height: 60px;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
  box-shadow:0px 0px 10px #adabab;
  .nav-bar {
    a-menu {
      color: #d8d8d8;
    }
  }
}
</style>
