<template>
  <div class="ya-switch">
    <input
      class="ya-switch-input"
      type="checkbox"
      v-model="selfValue"
      :disabled="disabled"
    />
    <i class="ya-switch-ui"></i>
    <span class="ya-switch-label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selfValue: this.value
    };
  },
  computed: {},
  watch: {
    value(val) {
      this.selfValue = val;
    },
    selfValue(val) {
      this.$emit('change', val);
    }
  },
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
@import url('./switch.less');

.ya-switch {
  display: flex;
  position: relative;
  align-items: center;
  .ya-switch-input {
    position: absolute;
    z-index: 1;
    width: @switch-width;
    height: @switch-height;
    opacity: 0;
    &:checked + .ya-switch-ui {
      border-color: @switch-on-bgc;
      background-color: @switch-on-bgc;
      &::before {
        transform: scale(0);
      }
      &::after {
        transform: translateX(@switch-width - @switch-height);
      }
    }
    &:disabled + .ya-switch-ui {
      opacity: 0.3;
    }
  }

  .ya-switch-ui {
    position: relative;
    display: block;
    width: @switch-width;
    height: @switch-height;
    box-sizing: content-box;
    border: 1px solid @switch-off-border-color;
    border-radius: @switch-height;
    background-color: @switch-off-border-color;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: @switch-height;
      background-color: @switch-off-bgc;
      transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.28);
    }

    &::after {
      width: @switch-height;
      background-color: @color-white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
  }

  .ya-switch-label {
    display: block;
    margin-left: 10px;
    &:empty {
      margin-left: 0;
    }
  }
}
</style>