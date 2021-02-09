<template>
  <div class="container" id="container">
    <div class='main-container'>
      <div class='dn-item-container'>
        <div class="dn-item" v-for="(item,i) in dNotices" :key="i">
          <h3>第{{ i+1 }}项</h3>
          <a-form-model :label-col={span:4} :wrapper-col={span:18}>
            <a-form-model-item label="击杀者">
              <a-input v-model="item.attacker" size="large" style='display: inline;width: 83%;margin-right: 2%' />
              <a-button size='large' style='width: 15%;display: inline;padding-left: 4%' :class='item.attackerCamp' @click='toggleAttackerCamp(item)'>{{item.attackerCamp}}</a-button>
            </a-form-model-item>
            <a-form-model-item label="被杀者">
              <a-input v-model="item.victim" size="large" style='display: inline;width: 83%;margin-right: 2%'/>
              <a-button size='large' style='width: 15%;display: inline;padding-left: 4%' :class='item.victimCamp' @click='toggleVictimCamp(item)'>{{item.victimCamp}}</a-button>
            </a-form-model-item>
            <a-form-model-item label="武器">
              <a-select v-model="item.weapon" default-value="ak47" size="large" style='width: 73%;margin-right: 2%'>
                <a-select-option v-for="(item) in weapons" :key="item" style='display: inline;width: 83%;margin-right: 2%'>
                  <img :src="require(`../assets/svg/${item}.svg`)" width="42" height="30" style="background: rgba(0,0,0,0.1);border-radius: 4px">
                  {{item}}
                </a-select-option>
              </a-select>
              <a-button size='large' style='width: 25%;padding-left: 4%;' @click='toggleBorder(item)' :class="{'btnRedBorder':item.redBorder}">边框</a-button>
            </a-form-model-item>
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
          <h3>偏好设置</h3>
          <a-form-model :label-col={span:10} :wrapper-col={span:10}>
            <a-form-model-item label='宽'>
              <a-input v-model='w'></a-input>
            </a-form-model-item>
            <a-form-model-item label='高'>
              <a-input v-model='h'></a-input>
            </a-form-model-item>
            <a-form-model-item label='HiDPI'>
              <a-input v-model='hidpi'></a-input>
            </a-form-model-item>
            <a-form-model-item label='文件前缀'>
              <a-input v-model='prefix'></a-input>
            </a-form-model-item>
<!--            <a-form-model-item label='等比放大'>-->
<!--              <a-switch v-model='scaling'/>-->
<!--            </a-form-model-item>-->
          </a-form-model>
          <a-space>
            <a-button @click="minus"><a-icon type="minus" /></a-button>
            <a-button @click="add"><a-icon type="plus" /></a-button>
          </a-space>
          <br><br>
          <a-space>
            <a-button @click="generate">生成</a-button>
            <a-button @click="toggleFullScreen">全屏</a-button>
            <a-button @click="test">测试</a-button>
          </a-space>
        </div>
        <div class='preview-container'>
          <h3>预览</h3>
          <div class="deathNotice" v-for="(item,i) in dNotices" :key="i" :class="{'DispRedBorder':item.redBorder}">
            <!-- 击杀者         -->
            <span class='attacker' :class='item.attackerCamp'>{{item.attacker}}</span>
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
            <span class='victim' :class='item.victimCamp'>{{item.victim}}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="OutputDiv" v-show='generating' :style="{height:h+'px',width:w+'px'}">
      <div id="DNArea">
        <div class="deathNotice" v-for="(item,i) in dNotices" :key="i" :class="{
          'DispRedBorder': item.redBorder,
          'dn-transparent': item.hide
        }">
          <!-- 击杀者         -->
          <span class='attacker' :class='item.attackerCamp'>{{item.attacker}}</span>
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
          <span class='victim' :class='item.victimCamp'>{{item.victim}}</span>
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
          attackerCamp: 'T',
          victim: 'Victim',
          victimCamp: 'CT',
          weapon: 'ak47',
          prefixIcon: ['blindkill'],
          suffixIcon: ['headshot'],
          redBorder: false,
          hide: false
        },
        {
          attacker: '中文字体样式.gg',
          attackerCamp: 'CT',
          victim: 'Purp1e',
          victimCamp: 'T',
          weapon: 'awp',
          prefixIcon: ['revenge', 'blindkill'],
          suffixIcon: [],
          redBorder: true,
          hide: false
        }
      ],
      generating: false,
      w: 1920,
      h: 1080,
      hidpi: 2,
      prefix: '击杀-',
      current: 0
    }
  },
  methods: {
    toggleAttackerCamp (item) {
      if (item.attackerCamp === 'CT') {
        item.attackerCamp = 'T'
      } else {
        item.attackerCamp = 'CT'
      }
    },
    toggleVictimCamp (item) {
      if (item.victimCamp === 'CT') {
        item.victimCamp = 'T'
      } else {
        item.victimCamp = 'CT'
      }
    },
    toggleBorder (item) {
      item.redBorder = item.redBorder !== true
    },
    generate () {
      // 先显示outputDiv，再延迟50ms生成图片
      this.generating = true
      // 设置参数确保第一张图片只有第一个击杀
      this.current = 0
      for (let j = 0; j < this.dNotices.length; j++) {
        this.dNotices[j].hide = j !== 0
      }

      setTimeout(this.html2canvas, 50)
    },
    html2canvas () {
      // html2canvas获取元素、生成图片、并跳转下载
      const e = document.getElementById('OutputDiv')
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
          link.setAttribute('download', this.prefix + (this.current + 1) + '.png')
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()

          // !确保一个一个生成
          if (++this.current < this.dNotices.length) {
            for (let j = 0; j < this.dNotices.length; j++) {
              this.dNotices[j].hide = j !== this.current
            }
            setTimeout(this.html2canvas, 50)
          } else {
            this.generating = false
          }
        }
      })
    },
    add () {
      this.dNotices.push(
        {
          attacker: 'Attacker',
          attackerCamp: 'T',
          victim: 'Victim',
          victimCamp: 'CT',
          weapon: 'ak47',
          prefixIcon: [],
          suffixIcon: [],
          redBorder: false,
          hide: false
        }
      )
    },
    minus () {
      //
      this.dNotices.pop()
    },
    test () {
      // this.toggleFullScreen()
      this.generating = !this.generating
      // console.log(document.getElementById('container').clientWidth)
      // window.devicePixelRatio 窗口缩放比例
      // console.log(window.devicePixelRatio)
      // console.log(this.dnItem.suffixIcon)
      // console.log(this.dnItem.prefixIcon)
      // const size = window.devicePixelRatio
      // document.body.style.cssText = document.body.style.cssText + '; -webkit-transform: scale(' + 1 / size + ');-webkit-transform-origin: 0 0;'
    },
    toggleFullScreen () {
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        }
      }
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
  .preview-container{
    /*margin:  475px 30px 30px auto;*/
    margin:  470px 30px 30px auto;
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
  .preview-container{
    /*margin:  475px 30px 30px auto;*/
    margin:  470px 30px 30px auto;
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
  position: fixed;
  background: #fefefe;
  height: max-content;
  margin:  30px 30px 30px auto;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

.preview-container{
  position: fixed;
  background: #fefefe;
  height: max-content;
  border-radius: 6px;
  padding: 20px;
  mso-border-shadow: yes;
  filter:drop-shadow(4px 4px 10px rgba(0,0,0,0.1));
}

#OutputDiv{
  clear: both;
  /*width: 1920px;*/
  /*height: 1080px;*/
  /*position: fixed;*/
  /*float: end;*/
  margin: 30px auto;
  /*background: pink;  !*debug用的颜色*!*/
  background: rgba(0,0,0,0);
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
  font-weight: bold;
  width: max-content;
  /*float: right;*/
  right: 0;
  margin: 2px 0 0 auto;/*击杀条之间的距离*/
  padding: 5px 10px 5px 10px;
  transition-property: opacity;
  transition-timing-function: ease-out;
  background-color:rgba(0,0,0,0.65);
  border-radius: 4px;
  text-align: center;
  /*box-shadow: inset #e10000e6 0px 0px 1px;*/
  /*border: 2px solid #e10000;*/
  /*border: 2px outset rgba(0,0,0,0.44);*/
}

.dn-transparent {
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
}

.btnRedBorder{
  border-color: #e10000;
  /*border: 1px solid #e10000;*/
}

.DispRedBorder{
  /*height: 30px;*/
  border: 2px solid #e10000;
  padding: 3px 8px 3px 8px;
}

.attacker{
  padding-right: 4px;font-size: 16px;
}

.victim{
  padding-left: 4px;font-size: 16px;
}

.CT{
  color: rgb(111, 156, 230);
}

.T{
  color: rgb(234, 190, 84);
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
