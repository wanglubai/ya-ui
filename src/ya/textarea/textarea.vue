<template>
  <div class="ya-textarea" :class="{ 'ya-textarea-active': isFocus }">
    <textarea
      ref="ele"
      class="ya-textarea-ele"
      v-model="selfValue"
      v-bind="$props"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      @focus="focusAction"
      @blur="blurAction"
      @change="changeAction"
    />
    <span v-if="remainTag&&!readonly" class="ya-textarea-remain">{{ remain }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    cols: Number,
    rows: Number,
    readonly: Boolean,
    wrap: String,
    autofocus: Boolean,
    //剩余提示
    remainTag: {
      type: Boolean,
      default: true
    },
    //提示语
    placeholder: {
      type: String,
      default: 'please...'
    },
    value: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      selfValue: this.value,
      isFocus: false
    };
  },
  computed: {
    //字数
    count() {
      return this.selfValue.length;
    },
    //剩余字数
    remain() {
      let diff = this.maxlength - this.count;
      return diff;
    }
  },
  watch: {
    value(val) {
      this.selfValue = val;
    },
    selfValue(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    focusAction(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    blurAction(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },
    changeAction() {
      this.$emit('change', this.selfValue);
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
@import url('./textarea.less');
.ya-textarea {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px @textarea-border-color solid;
  &.ya-textarea-active {
    border: 1px @textarea-focus-border-color solid;
  }
  .ya-textarea-ele {
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    font-size: 100%;
    line-height: inherit;
    color: @textarea-color;
    background-color: @textarea-bgc;
    border-radius: 2px;
    resize: none;
    border: none;
    outline: none;
  }
  .ya-textarea-remain {
    position: absolute;
    bottom: 7px;
    right: 10px;
    color: @textarea-remain-color;
  }
}
</style>