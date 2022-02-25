<template>
  <div>
    <div class="page-slide">
      <ya-slide :vo="list" @change="changeAction"></ya-slide>
    </div>
    <div class="des">自带图片模版,console->{{v}}</div>
    <div class="page-self">
      <ya-slide :vo="self" @change='selfChangeAction'>
        <template>
          <div class="self-item" v-for="(item, i) in self" :key="i">
            <div class="name">{{ item.name }}</div>
            <p class="info">{{ item.info }}</p>
          </div>
        </template>
        <template v-slot:pro="{ index, length }" >
          <div class="slef-index-c">
            <div class="slef-index">
              {{ self[index].name }} {{ index + 1 }}/{{ length }}
            </div>
          </div>
        </template>
      </ya-slide>
    </div>
    <div class="des">自定义模版,console->{{selfv.info}}</div>
  </div>
</template>

<script>
import YaSlide from '../ya/slide/slide.vue';
export default {
  components: {
    YaSlide
  },
  props: {},
  data() {
    return {
      v:'',
      selfv:'',
      self: [
        {
          name: '乌克兰局势',
          info: '当地时间25日8时20分许，俄罗斯的一支战斗机群接近乌克兰首都基辅，将于10至15分钟到达基辅上空。基辅市防空警报再次拉响，市政府敦促所有市民前往避难所。（总台记者 曹胜济 王晋燕）'
        },
        {
          name: '基辅市',
          info: '当地时间25日，乌克兰首都基辅市政部门发布最新公告称，基辅市6座地上地铁站已关闭。'
        },
        {
          name: '台媒',
          info: '中新社台北2月24日电2022年台湾老板的共同焦虑：找不到人！台湾最新一期《天下杂志》刊文指出，史上最大人才荒，已成为全台企业最大的梦魇。'
        }
      ],
      list: [
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/C9lKs8y0E6/IMG_4014.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/hD6agmm2ov/IMG_4012.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/twV-VvZOA9/IMG_4011.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/eR_MahwRUT/IMG_4010.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/hD6agmm2ov/IMG_4012.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/twV-VvZOA9/IMG_4011.jpg'
        },
        {
          url: 'www.baidu.com',
          img: 'https://dpubstatic.udache.com/static/dpubimg/eR_MahwRUT/IMG_4010.jpg'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction(e){
      this.v=e;
    },
    selfChangeAction(v){
     this.selfv= this.self[v]
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='less' scoped>
.page-slide {
  width: 100%;
  height: 250px;
}
.des {
  margin: 10px 20px 80px 10px;
}
.page-self {
  width: 100%;
  height: 200px;
  background-color: antiquewhite;
  .self-item {
    float: left;
    width: 100%;
    height: 200px;
    overflow: hidden;
    box-sizing: border-box;
    .name {
      font-size: 24px;
      font-weight: 500;
      padding: 10px 10px;
    }
    .info {
      padding: 4px 10px;
      white-space: normal;
      line-height: 20px;
      color: #222;
    }
  }
}
.slef-index-c {
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
}
.slef-index {
  background-color: rgba(0, 0, 0, 0.3);
  color: aliceblue;
  padding: 4px 12px;
  border-radius: 10px;
}
</style>