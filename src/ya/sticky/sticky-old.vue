<template>
  <div class="ya-sticky">
    <slot></slot>
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
export default {
  name: 'ya-sticky',
  provide() {
    return { sticky: this };
  },
  components: {},
  props: {},
  data() {
    return {
      gapY: 0,
      curChildVo: null,
      childrenList: [] //子对实例列表
    };
  },
  computed: {},
  watch: {},
  methods: {
    remove(instance) {
      this.childrenList.push(instance);
    },
    add(instance) {
      this.childrenList.push(instance);
    },
    setPos(e) {
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
  height: 100%;
  position: relative;
  .ya-sticky-fixed {
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    .ya-sticky-fixed-title {
      width: 100%;
      height: 40px;
      background-color: #666;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>