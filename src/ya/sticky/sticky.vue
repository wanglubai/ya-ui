<template>
  <div class="ya-sticky">
    <!-- 滚动容器 -->
    <div class="ya-sticky-scroll" ref="scroll">
      <div class="ya-sticky-content">
        <slot></slot>
      </div>
    </div>
    <!-- 头部展示条 -->
    <div class="ya-sticky-fixed" v-if="curChildVo">
      <slot name="fixed" :vo="curChildVo">
        <div class="ya-sticky-fixed-title" v-if="curChildVo.ya">
          {{ curChildVo.ya }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'ya-sticky',
  provide() {
    return { sticky: this };
  },
  components: {},
  props: {
    config: {
      type: Object,
      default() {
        return {
          scrollY: true,
          scrollX: false,
          click: true,
          probeType: 2,
          bounce: false
        };
      }
    }
  },
  data() {
    return {
      scroll: null,
      gapY: 0,
      curChildVo: null, //当前对象数据
      childrenList: [] //子对实例列表
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.init();
  },
  destroyed() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
  },
  methods: {
    init() {
      if (this.scroll == null) {
        this.scroll = new BScroll(this.$refs.scroll, this.config);
        this.scroll.on('scroll', this.setGapy);
      }
    },
    remove(instance) {
      this.childrenList.push(instance);
    },
    add(instance) {
      this.childrenList.push(instance);
    },
    refresh() {
      if (this.scroll) {
        this.scroll.refresh();
        console.log('ref');
      }
    },
    setGapy(e) {
      console.log(e);
      this.gapY = -e.y;
      this.checkSticky();
    },
    //计算当前sticky
    checkSticky() {
      let curChildVo = null;
      const childList = this.childrenList;
      for (var i = 0; i < childList.length; i++) {
        const childInstance = childList[i];
        const posInfo = childInstance.getPosInfo();
        if (posInfo['top'] < this.gapY) {
          curChildVo = childInstance.getVo();
        } else {
          break;
        }
      }
      if (this.curChildVo == curChildVo) {
        return;
      }
      this.curChildVo = curChildVo;
      return this.curChildVo;
    }
  }
};
</script>

<style lang='less' scoped>
.ya-sticky {
  position: relative;
  height: 100%;
}
.ya-sticky-scroll {
  width: 100%;
  height: 100%;
  .ya-sticky-content {
    width: 100%;
    height: auto;
  }
}
.ya-sticky-fixed {
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #666;
  .ya-sticky-fixed-title {
    width: 100%;
    height: 40px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>