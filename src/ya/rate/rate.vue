<template>
  <div
    ref="rateContainer"
    class="ya-rate"
    @touchstart.stop="handleStart"
    @touchmove.stop.prevent="handleMove"
    @touchend.stop="handleEnd"
    @mousedown.stop="handleStart"
    @mousemove.stop="handleMove"
    @mouseup.stop="handleEnd"
  >
    <slot>
      <ya-rate-item v-for="i in nums" :key="i" :index="i"></ya-rate-item>
    </slot>
  </div>
</template>

<script>
const EVENT_TYPE_MOUSE = 'mouse';
import YaRateItem from './rate-item.vue';
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  name: 'ya-rate',
  components: { YaRateItem },
  props: {
    nums: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.value
    };
  },
  computed: {},
  watch: {
    value(n) {
      this.index = n;
    }
  },
  methods: {
    handleStart(e) {
      if (!this.disabled) {
        if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
          this.mousePressed = true;
          document.addEventListener('mouseup', this.handleEnd);
          document.addEventListener('mousemove', this.handleMove);
        }
        const rect = this.$refs.rateContainer.getBoundingClientRect();
        this.left = rect.left;
        this.containerWidth = rect.width;
      }
    },
    handleMove(e) {
      if (
        !this.disabled &&
        (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)
      ) {
        this.computeTempValue(
          e.type.indexOf(EVENT_TYPE_MOUSE) === -1 ? e.touches[0] : e
        );
      }
    },
    handleEnd(e) {
      if (
        !this.disabled &&
        (e.type.indexOf(EVENT_TYPE_MOUSE) === -1 || this.mousePressed)
      ) {
        if (e.type.indexOf(EVENT_TYPE_MOUSE) > -1) {
          this.mousePressed = false;
          document.removeEventListener('mouseup', this.handleEnd);
          document.removeEventListener('mousemove', this.handleMove);
        }
        this.computeTempValue(
          e.type.indexOf(EVENT_TYPE_MOUSE) > -1 ? e : e.changedTouches[0]
        );
        this.$emit('change', this.index);
      }
    },
    computeTempValue(touch) {
      let leftAmount = Math.ceil(
        ((touch.clientX - this.left) / this.containerWidth) * this.nums
      );

      if (leftAmount > 0 && leftAmount <= this.nums) {
        this.index = leftAmount;
      } else if (leftAmount <= 0) {
        this.index = 0;
      } else {
        this.index = this.nums;
      }
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
.ya-rate {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>