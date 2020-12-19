<template>
  <div class="container" id="container">
    <div style="background: antiquewhite;width: 500px;height: max-content;margin: 30px auto auto auto;border-radius: 3%;padding: 30px">
      <a-form-model :model="dnItem" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="击杀者">
          <a-input v-model="dnItem.attacker" size="large"/>
        </a-form-model-item>
        <a-form-model-item label="被杀者">
          <a-input v-model="dnItem.victim" size="large"/>
        </a-form-model-item>

        <a-form-model-item label="武器">
          <a-select v-model="dnItem.weapon" default-value="ak47" style="" size="large" @change="handleChange">
              <a-select-option v-for="(item, id) in weapons" :key="id">
                <img :src="require(`../assets/svg/${item}.svg`)" width="42" height="30" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                {{item}}
              </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item label="红色边框">
          <a-switch v-model="dnItem.redBorder"/>
        </a-form-model-item>

        <a-form-model-item label="前置图标">
          <a-select
            v-model="dnItem.prefixIcon"
            default-value="1"
            mode="multiple"
            style="width: 100%"
            size="large"
            placeholder="select"
            option-label-prop="label"
          >
            <a-select-option v-for="(item, id) in prefixIcons" :key="id" :label="item">
              <img :src="require(`../assets/svg/${item}.svg`)" width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">
              {{item}}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="后置图标">
          <a-select
            v-model="dnItem.suffixIcon"
            mode="multiple"
            style="width: 100%"
            size="large"
            placeholder="select"
            option-label-prop="label"
          >
            <a-select-option v-for="(item, id) in suffixIcons" :key="id" :label="item" >
              <img :src="require(`../assets/svg/${item}.svg`)" :label=item width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">
              {{item}}
            </a-select-option>
          </a-select>
        </a-form-model-item>
<!--        <img src="../assets/svg/ak47.svg" width="44" height="32">-->
        <a-button @click="generate">生成</a-button>
        <a-button @click="test">测试</a-button>
<!--        <a-form-model-item label="1">-->
<!--          <a-input v-model="dnItem.x"/>-->
<!--        </a-form-model-item>-->
<!--        <a-form-model-item label="1">-->
<!--          <a-input v-model="dnItem.x"/>-->
<!--        </a-form-model-item>-->
<!--        <a-form-model-item label="1">-->
<!--          <a-input v-model="dnItem.x"/>-->
<!--        </a-form-model-item>-->
<!--        <a-form-model-item label="1">-->
<!--          <a-input v-model="dnItem.x"/>-->
<!--        </a-form-model-item>-->
      </a-form-model>
    </div>
    <div id="OutputDiv">
      <div id="DNArea" >
<!--        <div class="deathNotice">{{i}} {{item.test}}</div><br>-->
        <div class="deathNotice" v-for="(item,i) in dNotices" :key="i" :class="{'DispRedBorder':dnItem.redBorder}">
          {{dnItem.attacker}}
          <img :src="require(`../assets/svg/${dnItem.weapon}.svg`)" width="42" height="18" style="background: rgba(0,0,0,0)">
          {{dnItem.victim}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
// import '../assets/svg'

export default {
  name: 'DeathNotice',
  data () {
    return {
      weapons: [
        'ak47',
        'ammobox',
        'ammobox_threepack',
        'armor',
        'armor_helmet',
        'assaultsuit',
        'aug',
        'awp',
        'axe',
        'bayonet',
        'bizon',
        'breachcharge',
        'breachcharge_projectile',
        'bumpmine',
        'c4',
        'controldrone',
        'cz75a',
        'deagle',
        'decoy',
        'defuser',
        'diversion',
        'dronegun',
        'elite',
        'famas',
        'firebomb',
        'fists',
        'fiveseven',
        'flashbang',
        'flashbang_assist',
        'frag_grenade',
        'g3sg1',
        'galilar',
        'glock',
        'grenadepack',
        'grenadepack2',
        'hammer',
        'healthshot',
        'heavy_armor',
        'hegrenade',
        'helmet',
        'hkp2000',
        'incgrenade',
        'inferno',
        'kevlar',
        'knife',
        'knife_bowie',
        'knife_butterfly',
        'knife_canis',
        'knife_cord',
        'knife_css',
        'knife_falchion',
        'knife_flip',
        'knife_gut',
        'knife_gypsy_jackknife',
        'knife_karambit',
        'knife_m9_bayonet',
        'knife_push',
        'knife_skeleton',
        'knife_stiletto',
        'knife_survival_bowie',
        'knife_t',
        'knife_tactical',
        'knife_ursus',
        'knife_widowmaker',
        'knifegg',
        'm4a1',
        'm4a1_silencer',
        'm4a1_silencer_off',
        'm249',
        'mac10',
        'mag7',
        'molotov',
        'mp5sd',
        'mp7',
        'mp9',
        'negev',
        'nova',
        'p90',
        'p250',
        'p2000',
        'planted_c4_survival',
        'prop_exploding_barrel',
        'radarjammer',
        'revolver',
        'sawedoff',
        'scar20',
        'sg556',
        'shield',
        'smokegrenade',
        'snowball',
        'spanner',
        'ssg08',
        'stomp_damage',
        'tablet',
        'tagrenade',
        'taser',
        'tec9',
        'ump45',
        'usp_silencer',
        'usp_silencer_off',
        'xm1014',
        'zone_repulsor'
      ],
      prefixIcons: [
        'revenge',
        'domination',
        'blindkill'
      ],
      suffixIcons: [
        'noscope',
        'jumpkill',
        'throughsmoke',
        'penetrate',
        'headshot',
        'suicide',
        'kill360'
      ],
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      dnItem: {
        attacker: 'Attacker',
        victim: 'Victim',
        weapon: 'ak47',
        prefixIcon: [],
        suffixIcon: [],
        redBorder: false
      },
      dNotices: [
        { test: 'A Kill B' },
        { test: 'dd Kill gg' }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    generate () {
      // TODO: OutputDiv 开始width和height都为auto用作预览，生成的时候设定两个值，生成结束了再恢复
      const hidpi = 2 // 缩放倍率，不随浏览器缩放改变
      const e = document.getElementById('OutputDiv')
      html2canvas(e, {
        allowTaint: true,
        useCORS: true,
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
          link.setAttribute('download', '击杀.png')
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
        }

        // // [重要]默认转化的格式为png,也可设置为其他格式
        // var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height)
        // document.body.appendChild(img)
      })
    },
    test () {
      // console.log(document.getElementById('container').clientWidth)
      // window.devicePixelRatio 窗口缩放比例
      console.log(window.devicePixelRatio)
      console.log(this.dnItem.suffixIcon)
      console.log(this.dnItem.prefixIcon)
      // const size = window.devicePixelRatio
      // document.body.style.cssText = document.body.style.cssText + '; -webkit-transform: scale(' + 1 / size + ');-webkit-transform-origin: 0 0;'
    }
  }
}

</script>

<style scoped>
#OutputDiv{
  height: 1080px;
  width: 1920px;
  margin: 40px 0 0 0;
  /*background: pink; !*debug用的颜色*!*/
  background: rgba(0,0,0,0);
}

#DNArea{
  width: max-content;
  float: right;
  margin-top: 100px;  /*距离顶边的距离*/
  margin-right: 20px; /*距离右侧边的距离*/
}

.deathNotice{
  height: max-content;
  margin-bottom: 20px;  /*击杀条之间的距离*/
  background: rgba(0,0,0,0.44);  /*击杀条的背景*/
  /*padding: 6px; !*击杀条内间距*!*/
  padding: 4px 10px 4px 10px;
  border-radius: 6px; /*边框圆角*/
}

.DispRedBorder{
  border: red solid 2px;
}
/*color: rgb(234, 190, 84); font-family: Stratum2;*/
/*color: rgb(111, 156, 230); font-family: Stratum2;*/
</style>
