<template>
  <div class="ya-sticky-ele">
    <div class="ya-sticky-content">
      <slot :vo="vo">
        <div class="ya-sticky-h" v-show="vo.ya">{{ vo.ya }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import { getRect } from '../common/utils/dom';
let tuid = 0;
export default {
  name: 'ya-sticky-ele',
  inject: ['sticky'],
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      tuid: 0,
      cachePosInfo: null //位置信息缓存
    };
  },
  cachePosInfo: null,
  computed: {},
  watch: {},
  methods: {
    getVo() {
      return this.vo;
    },
    refreshPosInfo() {
      const { top, height } = this.getRect();
      const cachePosInfo = {
        top: top,
        height: height,
        bottomY: top + height,
        id: this.tuid
      };
      this.$options.cachePosInfo = cachePosInfo;
      return this.$options.cachePosInfo;
    },
    getPosInfo() {
      if (this.$options.cachePosInfo == null) {
        this.refreshPosInfo();
      }
      return this.$options.cachePosInfo;
    },
    getRect() {
      return getRect(this.$el);
    }
  },
  mounted() {
    this.tuid = tuid++;
    this.sticky.add(this);

    console.log('elel');
  },
  beforeDestroy() {
    this.sticky.remove(this);
  }
};
</script>

<style lang='less' scoped>
.ya-sticky-h {
  width: 100%;
  height: 40px;
  background-color: #666;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  .ya-sticky-content{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>