<template>
  <div class="ya-loading">
    <span class="ya-loading-spinners" :style="getStyle">
      <i class="ya-loading-spinner" v-for="(item, i) in balde" :key="i"></i>
    </span>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  components: {},
  props: {
    size: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      balde: 12
    };
  },
  computed: {
    getStyle() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value
      };
    }
  },
  watch: {},
  methods: {},
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
@import url('./loading.less');
.ya-loading {
  font-size: @fontsize-large-xxx;
  display: flex;
  align-items: center;
  justify-content: center;
  .ya-loading-spinners {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    .ya-loading-spinner {
      position: absolute;
      left: 44.5%;
      top: 37%;
      width: 2px;
      height: 25%;
      border-radius: 50%/20%;
      opacity: 0.25;
      background-color: currentColor;

      .loop(@i) when (@i < 13) {
        &:nth-child(@{i}) {
          animation: spinner-fade 1s .083s*@i linear infinite;
          transform: rotate(30deg * (@i - 6)) translateY(-150%);
        }
        .loop((@i + 1));
      }
      .loop(1);
      @keyframes spinner-fade {
        0% {
          opacity: 0.85;
        }
        50% {
          opacity: 0.25;
        }
        100% {
          opacity: 0.25;
        }
      }
    }
  }
}
</style>