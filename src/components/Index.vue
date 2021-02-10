<template>
  <div>
    <div>
      <a-card style="width: 1088px" class="index-card" :bordered=false >
        <img class="logo" :src="require(`../assets/One Studio alpha.png`)"/>
        <h1 style="font-size: 48px;padding-left: 10px">  CSGO HUD Generator</h1>
<!--        <h2>自定义生成击杀和准星图片</h2>-->
        <a-space>
          <a-button size="large" @click="gotoDeathnotice">击杀生成</a-button>
          <a-button size="large" @click="gotoCrosshair">准星生成</a-button>
        </a-space>
       </a-card>
    </div>
  </div>
</template>

<script lang="ts">
// components
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Index',
  components: {
  }
})

export default class Index extends Vue {
  created () {
    // todo
  }

  gotoDeathnotice () {
    this.$router.push('/death-notice')
  }

  gotoCrosshair () {
    this.$router.push('/crosshair')
  }
}
</script>

<style lang="less" scoped>
.index-card {
  margin: 0 auto;
}

.logo {
  margin: 20px 20px auto;
  padding: 20px;
  height: 300px;
}
</style>
