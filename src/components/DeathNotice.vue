<template>
  <div class="container" id="container">
    <div style="background: antiquewhite;width: 500px;height: max-content;margin: 30px auto auto auto;border-radius: 3%;padding: 30px">
      <a-form-model :model="dnItem" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="击杀者">
          <a-input v-model="dnItem.attacker"/>
        </a-form-model-item>
        <a-form-model-item label="被杀者">
          <a-input v-model="dnItem.victim"/>
        </a-form-model-item>

        <a-form-model-item label="武器">
          <a-select v-model="dnItem.weapon" default-value="" style="" @change="handleChange">
              <a-select-option v-for="(item, id) in weapons" :key="id">
                <img :src="require(`../assets/svg/${item}.svg`)" width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                {{item}}
              </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item label="红色边框">
          <a-switch v-model="dnItem.redBorder"/>
        </a-form-model-item>

        <a-form-model-item label="前置图标">
          <a-select
            v-model="dnItem.prefixIcon">
            mode="multiple"
            style="width: 100%"
            placeholder="select"
            option-label-prop="label"
          >
            <a-select-option v-for="(item, id) in prefixIcons" :key="id">
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
            placeholder="select"
            option-label-prop="label"
          >
<!--            <a-select-option v-for="(item, id) in suffixIcons" :key="id">-->
<!--              <img :src="require(`../assets/svg/${item}.svg`)" width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">-->
<!--              {{item}}-->
<!--            </a-select-option>-->
            <a-select-option value="NoScope" label="NoScope">
              NoScope
            </a-select-option>
            <a-select-option value="JumpKill" label="JumpKill">
              JumpKill
            </a-select-option>
            <a-select-option value="ThroughSmoke" label="ThroughSmoke">
              ThroughSmoke
            </a-select-option>
            <a-select-option value="Penetrate" label="Penetrate">
              Penetrate
            </a-select-option>
            <a-select-option value="HeadShot" label="HeadShot">
              HeadShot
            </a-select-option>
            <a-select-option value="Suicide" label="Suicide">
              Suicide
            </a-select-option>
            <a-select-option value="Kill360" label="Kill360">
              Kill360
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <img src="../assets/svg/ak47.svg" width="44" height="32">
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
      <div id="DNArea" style="margin-top: 40px;" v-for="(item,i) in dNotices" :key="i">
        <div class="deathNotice">{{i}} {{item.test}}</div><br>
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
        'Revenge',
        'Domination',
        'AttackerBlind'
      ],
      suffixIcons: [
        ''
      ],
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      dnItem: {
        attacker: '',
        victim: '',
        weapon: '',
        prefixIcon: [''],
        suffixIcon: [''],
        redBorder: ''
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
      const hidpi = 4 // 缩放倍率，不随浏览器缩放改变
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
  /*background: pink;*/
   background: rgba(0,0,0,0);
}

.deathNotice{
  /*background: azure;*/
  background: rgba(0,0,0,0);
  width: max-content;
  float: right;
  margin: 10px 10px 0 0;
}
</style>
