<template>
  <div class="bg">
    <a-button size="large" @click="html2canvas" style="margin-top: 40px">生成</a-button>
    <br>
    <div id="Crosshair" :style="'width:'+width+'px;height:'+height+'px'">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" :width="width+'px'" :height="height+'px'">
        <path
          :d="
          'M'+(width/2-gap/2)+' '+height/2+' L'+(width/2-gap/2-size)+' '+height/2+' '+
          'M'+(width/2+gap/2)+' '+height/2+' L'+(width/2+gap/2+size)+' '+height/2+' '+
          'M'+width/2+' '+(height/2-gap/2)+' L'+width/2+' '+(height/2-gap/2-size)+' '+
          'M'+width/2+' '+(height/2+gap/2)+' L'+width/2+' '+(height/2+gap/2+size)
        "
          fill="none"
          :stroke-width=lineWidth
          :stroke="'rgb('+r+','+g+','+b+')'"
          :opacity="alpha" />
      </svg>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'Crosshair',
  data () {
    return {
      width: 1920,
      height: 1080,
      size: 10,
      lineWidth: 2,
      gap: 10,
      outline: 0,
      alpha: 255,
      r: 0,
      g: 255,
      b: 0,
      hidpi: 2
    }
  },
  methods: {
    html2canvas () {
      // html2canvas获取元素、生成图片、并跳转下载
      const e = document.getElementById('Crosshair')
      // 滚动条置顶解决生成图片不全的问题
      window.pageYOffset = 0
      document.documentElement.scrollTop = 0
      document.documentElement.scrollLeft = 0
      document.body.scrollTop = 0

      const hidpi = this.hidpi // 缩放倍率，不随浏览器缩放改变
      html2canvas(e, {
        allowTaint: false,
        useCORS: false,
        backgroundColor: 'rgba(0,0,0,0)',
        scale: hidpi
      }).then(canvas => {
        const dataURL = canvas.toDataURL('image/png')
        this.imgUrl = dataURL
        if (this.imgUrl !== '') {
          const link = document.createElement('a')
          const context = canvas.getContext('2d')
          // [重要]关闭抗锯齿
          context.mozImageSmoothingEnabled = false
          context.webkitImageSmoothingEnabled = false
          context.msImageSmoothingEnabled = false
          context.imageSmoothingEnabled = false
          link.href = canvas.toDataURL()
          // !文件名设置
          link.setAttribute('download', '准星生成.png')
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
        }
      })
    }
  }
}
</script>

<style scoped>
.bg {
  margin: auto;
  background-color: #fefefe;
}

#Crosshair {
  background-color: rgba(0,0,0,0);
}
</style>
