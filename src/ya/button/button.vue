<template>
  <button :class="getClass" :type="type" @click="clickAction">
    <i :class="vo.icon" v-if="vo.icon"></i>
    <slot>
      <template v-if="vo.label">{{ vo.label }}</template>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'ya-button',
  components: {},
  props: {
    type: {
      type: String,
      default: 'button'
    },
    vo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      const {
        active = false,
        disabled = false,
        inline = false,
        primary = false,
        outline = false,
        light = false
      } = this.vo;
      return {
        'ya-button': true,
        'ya-button-active': active,
        'ya-button-disabled': disabled,
        'ya-button-inline': inline,
        'ya-button-primary': primary,
        'ya-button-outline': outline,
        'ya-button-outline-primary': outline && primary,
        'ya-button-light': light
      };
    }
  },
  watch: {},
  methods: {
    clickAction(e) {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.$emit('click', e);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
@import './button.less';
.ya-button {
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: #fff;
  background: #4a4c5b;
  outline: none;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.ya-button-outline {
  color: #666;
  background: transparent;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #666;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }
}
.ya-button-disabled {
  color: #fff;
  background: #ccc;
  position: relative;
  &::after {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}

.ya-button-primary {
  color: #fff;
  background: #fc9153;
}
.ya-button-light {
  color: #666;
  background: #fcfcfc;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
}
.ya-button-outline-primary {
  color: #fc9153;
  background: transparent;
  position: relative;
  &::after {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border: 1px solid #fc9153;
    border-radius: 2px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>