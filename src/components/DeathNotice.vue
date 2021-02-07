<template>
  <div class="container" id="container">
    <div class='main-container'>
      <div class='dn-item-container'>
        <div class="dn-item" v-for="(item,i) in dNotices" :key="i">
          第{{ i+1 }}项<br><br>
          <a-form-model :label-col={span:4} :wrapper-col={span:18}>
            <a-form-model-item label="击杀者">
              <a-input v-model="item.attacker" size="large"/>
            </a-form-model-item>
            <a-form-model-item label="被杀者">
              <a-input v-model="item.victim" size="large"/>
            </a-form-model-item>
            <a-form-model-item label="武器">
              <!--              <a-radio-group v-model="item.weapon" size="large" @change="handleChange">-->
              <!--                <a-radio-button v-for="(item) in weapons" :key="item">-->
              <!--                  <img :src="require(`../assets/svg/${item}.svg`)" height="30" style="background: rgba(0,0,0,0.1);border-radius: 4px">-->
              <!--                </a-radio-button>-->
              <!--              </a-radio-group>-->
              <a-select v-model="item.weapon" default-value="ak47" style="" size="large" @change="handleChange">
                <a-select-option v-for="(item) in weapons" :key="item">
                  <img :src="require(`../assets/svg/${item}.svg`)" width="42" height="30" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                  {{item}}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <!--            <a-form-model-item label="红色边框">-->
            <!--              <a-switch v-model="item.redBorder"/>-->
            <!--            </a-form-model-item>-->
            <a-form-model-item label="前置图标">
              <a-select
                v-model="item.prefixIcon"
                default-value="1"
                mode="multiple"
                style="width: 100%"
                size="large"
                placeholder="select"
                option-label-prop="label"
              >
                <a-select-option v-for="(item, id) in prefixIcons" :key="id" :label="item" :value="item">
                  <img :src="require(`../assets/svg/${item}.svg`)" width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                  {{item}}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="后置图标">
              <a-select
                v-model="item.suffixIcon"
                mode="multiple"
                style="width: 100%"
                size="large"
                placeholder="select"
                option-label-prop="label"
              >
                <a-select-option v-for="(item, id) in suffixIcons" :key="id" :label="item" :value="item">
                  <img :src="require(`../assets/svg/${item}.svg`)" :label=item width="44" height="32" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                  {{item}}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
      <div class='sidebar' id='sidebar'>
        <div class='preference-container'>
          偏好设置<br><br>
          <a-button @click="add">+</a-button>
          <a-button @click="minus">-</a-button>
          <br><br>
          <a-button @click="generate">生成</a-button>
          <a-button @click="test">测试</a-button>
        </div>
        <div class='preview-container'>
          预览<br><br>
          <div class="deathNotice" v-for="(item,i) in dNotices" :key="i" :class="{'DispRedBorder':item.redBorder}">
            <!-- 击杀者         -->
            <span class='attacker'>{{item.attacker}}</span>
            <!-- 前缀图标         -->
            <span v-for="(preIcon, j) in item.prefixIcon" :key='j'>
            <img class="prefix" :src="require(`../assets/svg/${preIcon}.svg`)"/>
          </span>
            <!-- 武器         -->
            <img class='weapon' :src="require(`../assets/svg/${item.weapon}.svg`)"/>
            <!-- 后缀图标         -->
            <span v-for="(sufIcon, k) in item.suffixIcon" :key='k'>
            <img class="suffix" :src="require(`../assets/svg/${sufIcon}.svg`)">
          </span>
            <!-- 受害者         -->
            <span class='victim'>{{item.victim}}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="OutputDiv" v-show='generating'>
      <div id="DNArea">
        <div class="deathNotice" v-for="(item,i) in dNotices" :key="i" :class="{'DispRedBorder':item.redBorder}">
          <!-- 击杀者         -->
          <span class='attacker'>{{item.attacker}}</span>
          <!-- 前缀图标         -->
          <span v-for="(preIcon, j) in item.prefixIcon" :key='j'>
            <img class="prefix" :src="require(`../assets/svg/${preIcon}.svg`)"/>
          </span>
          <!-- 武器         -->
          <img class='weapon' :src="require(`../assets/svg/${item.weapon}.svg`)"/>
          <!-- 后缀图标         -->
          <span v-for="(sufIcon, k) in item.suffixIcon" :key='k'>
            <img class="suffix" :src="require(`../assets/svg/${sufIcon}.svg`)">
          </span>
          <!-- 受害者         -->
          <span class='victim'>{{item.victim}}</span>
        </div>
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
      dNotices: [
        {
          attacker: 'Attacker',
          victim: 'Victim',
          weapon: 'ak47',
          prefixIcon: ['blindkill'],
          suffixIcon: ['headshot'],
          redBorder: false
        },
        {
          attacker: '中文字体样式.gg',
          victim: 'Purp1e',
          weapon: 'awp',
          prefixIcon: ['revenge', 'blindkill'],
          suffixIcon: [],
          redBorder: true
        }
      ],
      generating: false
    }
  },
  methods: {
    handleChange (value) {
    //   console.log(value)
    //   this.dnItem.weapon = value
    },
    generate () {
      // TODO: debug确保正确获取元素
      this.generating = true
      let e = document.getElementById('OutputDiv')
      if (e == null) {
        console.log('WTF is That')
        setTimeout(e = document.getElementById('OutputDiv'), 2000)
      }
      // TODO: OutputDiv 开始width和height都为auto用作预览，生成的时候设定两个值，生成结束了再恢复
      setTimeout(this.h2cGen(e), 5000)
    },
    h2cGen (e) {
      // 滚动条置顶解决生成图片不全的问题
      window.pageYOffset = 0
      document.documentElement.scrollTop = 0
      document.documentElement.scrollLeft = 0
      document.body.scrollTop = 0

      const hidpi = 4 // 缩放倍率，不随浏览器缩放改变
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
          link.setAttribute('download', '击杀.png')
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()

          this.generating = false
        }
      })
    },
    add () {
      //
      this.dNotices.push(
        {
          attacker: 'Attacker',
          victim: 'Victim',
          weapon: 'ak47',
          prefixIcon: [],
          suffixIcon: [],
          redBorder: false
        }
      )
    },
    minus () {
      //
      this.dNotices.pop()
    },
    test () {
      this.generating = !this.generating
      // console.log(document.getElementById('container').clientWidth)
      // window.devicePixelRatio 窗口缩放比例
      // console.log(window.devicePixelRatio)
      // console.log(this.dnItem.suffixIcon)
      // console.log(this.dnItem.prefixIcon)
      // const size = window.devicePixelRatio
      // document.body.style.cssText = document.body.style.cssText + '; -webkit-transform: scale(' + 1 / size + ');-webkit-transform-origin: 0 0;'
    }
  }
}

</script>

<style scoped>

@font-face {
  font-family: 'Stratum2';
  src: url('../assets/font/Stratum2.ttf');
  font-style: normal;
  font-weight: bold;
}

@media screen and (max-width:960px){
  /* 当屏幕宽度小于960px时，适配的CSS代码块*/
  .main-container{
    width: max-content;
  }
  .dn-item-container{
    width: 60vw;
  }
  .sidebar{
    width: 32vw;
  }
}
@media screen and (min-width:961px){
  /* 当屏幕宽度大于等于961px时，适配的CSS代码块*/
  .main-container{
    width: 900px;
  }
  .dn-item-container{
    width: 600px;
  }
  .sidebar{
    width: 300px;
  }
}

.main-container{
  margin: 0 auto;
  display: block;
}

.sidebar{
  float: right;
}

/*击杀信息设置区域的容器*/
.dn-item-container{
  float: left;
  /*display: block;*/
  background: white;

  transition: 0.3s;
}

/*设置单个击杀信息的面板*/
.dn-item{
  background: #fefefe;
  height: max-content;
  margin: 30px 30px 30px auto;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

.preference-container{
  background: #fefefe;
  height: max-content;
  margin:  30px 30px 30px auto;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

.preview-container{
  background: #fefefe;
  height: max-content;
  margin:  30px 30px 30px auto;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

#OutputDiv{
  clear: both;
  width: 1920px;
  height: 1080px;
  /*position: fixed;*/
  /*float: end;*/
  margin: 30px auto;
  background: pink;  /*debug用的颜色*/
  /*background: rgba(0,0,0,0);*/
  /**/
  /*font-weight: bold;*/
  /*font-family: 'Stratum2';*/
  /* src: url("../assets/font/Stratum2.ttf") format('truetype'); */
}

#DNArea{
  width: max-content;
  float: right;
  /*display: flex;*/
 /*justify-content: end;*/
  /*float: right;*/
  /*horiz-align: right;*/
  margin-top: 72px;  /*距离顶边的距离*/
  margin-right: 10px; /*距离右侧边的距离*/
  /*text-align: center;*/
  /*line-height: 24px;*/
}

.deathNotice{
  font-family: 'Stratum2', 'Arial Unicode MS';
  font-size: 18px;
  /*font-weight: bold;*/
  font-weight: normal;
  width: max-content;
  align-self: end;
  margin: 2px;/*击杀条之间的距离*/
  padding: 4px 10px 4px 10px;
  transition-property: opacity;
  transition-timing-function: ease-out;
  background-color:rgba(0,0,0,0.65);
  border-radius: 4px;
  text-align: center;
  /*box-shadow: inset #e10000e6 0px 0px 1px;*/
  /*border: 2px solid #e10000;*/
  /*border: 2px outset rgba(0,0,0,0.44);*/
}

.DispRedBorder{
  /*height: 30px;*/
  border: 2px solid #e10000;
  padding: 2px 8px 2px 8px;
}

.attacker{
  color: rgb(234, 190, 84);padding-right: 4px;font-size: 16px;
}

.victim{
  color: rgb(111, 156, 230);padding-left: 4px;font-size: 16px;
}

.weapon{
  background: rgba(0,0,0,0);height: 23px;vertical-align: middle;visibility: visible;
}

.prefix{
  padding-right: 2px;height: 24px;
}

.suffix{
  padding-left: 2px;height: 24px;
}

span{

}
/*color: rgb(234, 190, 84); font-family: Stratum2;*/
/*color: rgb(111, 156, 230); font-family: Stratum2;*/
</style>
