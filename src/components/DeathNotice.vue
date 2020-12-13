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
          <a-select v-model="dnItem.weapon" default-value="ak47" style="" @change="handleChange">
              <a-select-option value="ak47">ak47</a-select-option>
              <a-select-option value="ammobox">ammobox</a-select-option>
              <a-select-option value="ammobox_threepack">ammobox_threepack</a-select-option>
              <a-select-option value="armor">armor</a-select-option>
              <a-select-option value="armor_helmet">armor_helmet</a-select-option>
              <a-select-option value="assaultsuit">assaultsuit</a-select-option>
              <a-select-option value="aug">aug</a-select-option>
              <a-select-option value="awp">awp</a-select-option>
              <a-select-option value="axe">axe</a-select-option>
              <a-select-option value="bayonet">bayonet</a-select-option>
              <a-select-option value="bizon">bizon</a-select-option>
              <a-select-option value="breachcharge">breachcharge</a-select-option>
              <a-select-option value="breachcharge_projectile">breachcharge_projectile</a-select-option>
              <a-select-option value="bumpmine">bumpmine</a-select-option>
              <a-select-option value="c4">c4</a-select-option>
              <a-select-option value="controldrone">controldrone</a-select-option>
              <a-select-option value="cz75a">cz75a</a-select-option>
              <a-select-option value="deagle">deagle</a-select-option>
              <a-select-option value="decoy">decoy</a-select-option>
              <a-select-option value="defuser">defuser</a-select-option>
              <a-select-option value="diversion">diversion</a-select-option>
              <a-select-option value="dronegun">dronegun</a-select-option>
              <a-select-option value="elite">elite</a-select-option>
              <a-select-option value="famas">famas</a-select-option>
              <a-select-option value="firebomb">firebomb</a-select-option>
              <a-select-option value="fists">fists</a-select-option>
              <a-select-option value="fiveseven">fiveseven</a-select-option>
              <a-select-option value="flashbang">flashbang</a-select-option>
              <a-select-option value="flashbang_assist">flashbang_assist</a-select-option>
              <a-select-option value="frag_grenade">frag_grenade</a-select-option>
              <a-select-option value="g3sg1">g3sg1</a-select-option>
              <a-select-option value="galilar">galilar</a-select-option>
              <a-select-option value="glock">glock</a-select-option>
              <a-select-option value="grenadepack">grenadepack</a-select-option>
              <a-select-option value="grenadepack2">grenadepack2</a-select-option>
              <a-select-option value="hammer">hammer</a-select-option>
              <a-select-option value="healthshot">healthshot</a-select-option>
              <a-select-option value="heavy_armor">heavy_armor</a-select-option>
              <a-select-option value="hegrenade">hegrenade</a-select-option>
              <a-select-option value="helmet">helmet</a-select-option>
              <a-select-option value="hkp2000">hkp2000</a-select-option>
              <a-select-option value="incgrenade">incgrenade</a-select-option>
              <a-select-option value="inferno">inferno</a-select-option>
              <a-select-option value="kevlar">kevlar</a-select-option>
              <a-select-option value="knife">knife</a-select-option>
              <a-select-option value="knife_bowie">knife_bowie</a-select-option>
              <a-select-option value="knife_butterfly">knife_butterfly</a-select-option>
              <a-select-option value="knife_canis">knife_canis</a-select-option>
              <a-select-option value="knife_cord">knife_cord</a-select-option>
              <a-select-option value="knife_css">knife_css</a-select-option>
              <a-select-option value="knife_falchion">knife_falchion</a-select-option>
              <a-select-option value="knife_flip">knife_flip</a-select-option>
              <a-select-option value="knife_gut">knife_gut</a-select-option>
              <a-select-option value="knife_gypsy_jackknife">knife_gypsy_jackknife</a-select-option>
              <a-select-option value="knife_karambit">knife_karambit</a-select-option>
              <a-select-option value="knife_m9_bayonet">knife_m9_bayonet</a-select-option>
              <a-select-option value="knife_outdoor">knife_outdoor</a-select-option>
              <a-select-option value="knife_push">knife_push</a-select-option>
              <a-select-option value="knife_skeleton">knife_skeleton</a-select-option>
              <a-select-option value="knife_stiletto">knife_stiletto</a-select-option>
              <a-select-option value="knife_survival_bowie">knife_survival_bowie</a-select-option>
              <a-select-option value="knife_t">knife_t</a-select-option>
              <a-select-option value="knife_tactical">knife_tactical</a-select-option>
              <a-select-option value="knife_ursus">knife_ursus</a-select-option>
              <a-select-option value="knife_widowmaker">knife_widowmaker</a-select-option>
              <a-select-option value="knifegg">knifegg</a-select-option>
              <a-select-option value="m4a1">m4a1</a-select-option>
              <a-select-option value="m4a1_silencer">m4a1_silencer</a-select-option>
              <a-select-option value="m4a1_silencer_off">m4a1_silencer_off</a-select-option>
              <a-select-option value="m249">m249</a-select-option>
              <a-select-option value="mac10">mac10</a-select-option>
              <a-select-option value="mag7">mag7</a-select-option>
              <a-select-option value="molotov">molotov</a-select-option>
              <a-select-option value="mp5sd">mp5sd</a-select-option>
              <a-select-option value="mp7">mp7</a-select-option>
              <a-select-option value="mp9">mp9</a-select-option>
              <a-select-option value="negev">negev</a-select-option>
              <a-select-option value="nova">nova</a-select-option>
              <a-select-option value="p90">p90</a-select-option>
              <a-select-option value="p250">p250</a-select-option>
              <a-select-option value="p2000">p2000</a-select-option>
              <a-select-option value="planted_c4_survival">planted_c4_survival</a-select-option>
              <a-select-option value="prop_exploding_barrel">prop_exploding_barrel</a-select-option>
              <a-select-option value="radarjammer">radarjammer</a-select-option>
              <a-select-option value="revolver">revolver</a-select-option>
              <a-select-option value="sawedoff">sawedoff</a-select-option>
              <a-select-option value="scar20">scar20</a-select-option>
              <a-select-option value="sg556">sg556</a-select-option>
              <a-select-option value="shield">shield</a-select-option>
              <a-select-option value="smokegrenade">smokegrenade</a-select-option>
              <a-select-option value="snowball">snowball</a-select-option>
              <a-select-option value="spanner">spanner</a-select-option>
              <a-select-option value="ssg08">ssg08</a-select-option>
              <a-select-option value="stomp_damage">stomp_damage</a-select-option>
              <a-select-option value="tablet">tablet</a-select-option>
              <a-select-option value="tagrenade">tagrenade</a-select-option>
              <a-select-option value="taser">taser</a-select-option>
              <a-select-option value="tec9">tec9</a-select-option>
              <a-select-option value="ump45">ump45</a-select-option>
              <a-select-option value="usp_silencer">usp_silencer</a-select-option>
              <a-select-option value="usp_silencer_off">usp_silencer_off</a-select-option>
              <a-select-option value="xm1014">xm1014</a-select-option>
              <a-select-option value="zone_repulsor">zone_repulsor</a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item label="红色边框">
          <a-switch v-model="dnItem.redBorder"/>
        </a-form-model-item>

        <a-form-model-item label="前置图标">
          <a-select
            v-model="dnItem.prefixIcon"
            mode="multiple"
            style="width: 100%"
            placeholder="select"
            option-label-prop="label"
          >
            <a-select-option value="Revenge" label="Revenge">
              Revenge
            </a-select-option>
            <a-select-option value="Domination" label="Domination">
              Domination
            </a-select-option>
            <a-select-option value="AttackerBlind" label="AttackerBlind">
              AttackerBlind
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

export default {
  name: 'DeathNotice',
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      dnItem: {
        attacker: '',
        victim: '',
        weapon: '',
        prefixIcon: [],
        suffixIcon: [],
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
