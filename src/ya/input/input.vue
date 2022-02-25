<template>
  <div class="ya-input" :class="{ 'ya-input-active': isFocus }">
    <div class="ya-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="ya-input-field"
      ref="input"
      v-model="inputValue"
      :type="getType"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      @focus="inputFocusAction"
      @blur="inputBlurAction"
      @change="inputChangeAction"
    />
    <div
      class="ya-input-append"
      v-if="$slots.append || getClearVisible || getPwdEyeVisible"
    >
      <div class="ya-input-clear" v-if="getClearVisible" @touched="clearAction">
        <span class="ya-icon-wrong"></span>
      </div>
      <div class="ya-input-eye" v-if="getPwdEyeVisible" @click="pwdEyeAction">
        <font :class="eyeClass"></font>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
const Event_Input = 'input';

export default {
  components: {},
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    clearable: {
      type: [Boolean, Object],
      default: false
    },
    eye: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      formatedClearable: {
        visible: false,
        blurHidden: true
      },
      formatedEye: {
        open: false,
        reverse: false
      }
    };
  },
  computed: {
    getType() {
      const type = this.type;
      if (type === 'password' && this.eye && this.getPwdVisible) {
        return 'text';
      }
      return type;
    },
    getPwdVisible() {
      const eye = this.formatedEye;
      return eye.reverse ? !eye.open : eye.open;
    },
    getClearVisible(){
      return true;
    },
    getPwdEyeVisible(){
      return true;
    },
    _showPwdEye() {
      return true;
    },
    eyeClass() {
      return this.formatedEye.open ? 'ya-eye-visible' : 'ya-eye-invisible';
    }
  },
  watch: {
    inputValue(newObj) {
      this.$emit(Event_Input, newObj);
    }
  },
  methods: {
    inputFocusAction() {},
    inputBlurAction() {},
    inputChangeAction() {},
    clearAction() {},
    pwdEyeAction() {
      this.formatedEye.open = !this.formatedEye.open;
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
@import './input.less';
.ya-input {
  display: flex;
  align-items: center;
  font-size: @fontsize-medium;
  line-height: 1.429;
  background-color: @input-bgc;
  padding: 10px;
  border: 1px solid @input-border-color;
  .ya-input-prepend {
    display: flex;
    align-items: center;
  }
  .ya-input-field {
    display: block;
    flex: 1;
    width: 100%;
    min-width: 0;

    box-sizing: border-box;
    color: @input-color;
    line-height: inherit;
    background-color: inherit;
    border: 0;
    border-radius: 2px;
    outline: none;
  }
  .ya-input-append {
    display: flex;
    align-items: center;

    .ya-input-clear {
      color: @input-clear-icon-color;
      padding-right: 10px;
      .ya-icon-wrong {
        &::before {
          font-family: 'ya-icon' !important;
          content: '\e618';
        }
      }
    }
    .ya-input-eye {
      color: @input-clear-icon-color;
      padding-right: 10px;
      .ya-eye-visible {
        &::before {
          font-family: 'ya-icon' !important;
          content: '\e625';
        }
      }
      .ya-eye-invisible {
        &::before {
          font-family: 'ya-icon' !important;
          content: '\e624';
        }
      }
    }
  }
}
</style>