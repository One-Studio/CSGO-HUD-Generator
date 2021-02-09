<template>
  <div class="bg">
    <div class='preference-container'>
      <h2>偏好设置</h2>
      <a-form-model :label-col={span:8} :wrapper-col={span:10}>
        <a-form-model-item label='宽' style='margin-bottom: 4px'>
          <a-input v-model='width'></a-input>
        </a-form-model-item>
        <a-form-model-item label='高' style='margin-bottom: 4px'>
          <a-input v-model='height'></a-input>
        </a-form-model-item>
        <a-form-model-item label='HiDPI' style='margin-bottom: 4px'>
          <a-input v-model='hidpi'></a-input>
        </a-form-model-item>
        <a-form-model-item label='长度' style='margin-bottom: 4px'>
          <a-slider v-model='size' :min="0" :max="128" />
        </a-form-model-item>
        <a-form-model-item label='线宽' style='margin-bottom: 4px'>
          <a-slider v-model='lineWidth' :min="0" :max="64" />
        </a-form-model-item>
        <a-form-model-item label='间隙' style='margin-bottom: 4px'>
          <a-slider v-model='gap' :min="-32" :max="64" />
        </a-form-model-item>
        <a-form-model-item label='透明度' style='margin-bottom: 4px'>
          <a-slider v-model='alpha' :min="0" :max="255" />
        </a-form-model-item>
        <a-form-model-item label='R' style='margin-bottom: 4px'>
          <a-slider v-model='r' :min="0" :max="255" />
        </a-form-model-item>
        <a-form-model-item label='G' style='margin-bottom: 4px'>
          <a-slider v-model='g' :min="0" :max="255" />
        </a-form-model-item>
        <a-form-model-item label='B' style='margin-bottom: 4px'>
          <a-slider v-model='b' :min="0" :max="255" />
        </a-form-model-item>
      </a-form-model>
      <br>
      <a-space>
        <a-button @click="generate">生成</a-button>
        <!--        <a-button @click="toggleFullScreen">全屏</a-button>-->
        <!--        <a-button @click="test">测试</a-button>-->
      </a-space>
    </div>
    <div class='preview-container'>
      <h2>预览</h2>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
        <path
          :d="
        'M'+(150-gap/2)+' '+100+' L'+(150-gap/2-size)+' '+100+' '+
        'M'+(150+gap/2)+' '+100+' L'+(150+gap/2+size)+' '+100+' '+
        'M'+150+' '+(100-gap/2)+' L'+150+' '+(100-gap/2-size)+' '+
        'M'+150+' '+(100+gap/2)+' L'+150+' '+(100+gap/2+size)
      "
          fill="none"
          :stroke-width=lineWidth
          :stroke="'rgba('+r+','+g+','+b+','+alpha+')'"/>
      </svg>
    </div>
    <div id="Crosshair" v-show='generating' :style="'width:'+width+'px;height:'+height+'px;clear:both'">
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
      size: 8,
      lineWidth: 2,
      gap: 6,
      outline: 0,
      alpha: 255,
      r: 0,
      g: 255,
      b: 0,
      hidpi: 1,
      generating: false
    }
  },
  methods: {
    generate () {
      // 先显示outputDiv，再延迟50ms生成图片
      this.generating = true
      setTimeout(this.html2canvas, 50)
    },
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

@media screen and (max-width:960px){
  /* 当屏幕宽度小于960px时，适配的CSS代码块*/
  .preference-container{
    margin: 30px 5% auto 5%;
  }
  .preview-container{
    margin: 30px 5% auto 5%;
  }
}
@media screen and (min-width:961px){
  /* 当屏幕宽度大于等于961px时，适配的CSS代码块*/
  .preference-container{
    float: left;
    width: 30%;
    margin:  30px 1% auto 20%;
  }
  .preview-container{
    float: left;
    width: 30%;
    margin:  30px 15% auto 1%;
  }
}

.preference-container {
  background: #fefefe;
  height: max-content;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

.preview-container{
  background: #fefefe;
  height: max-content;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}
</style>
