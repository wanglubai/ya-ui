<template>
  <transition name="ya-dialog-fade">
    <ya-popup v-show="isVisible">
      <div class="ya-dialog">
        <div
          class="ya-dialog-close"
          v-show="closeVisble"
          @click="clickCloseAction"
        >
          <span class="yaic-close"></span>
        </div>
        <div>asassa</div>
      </div>
    </ya-popup>
  </transition>
</template>

<script>
import visibilityMixin from '../common/mixins/visibility';
import popupMixin from '../common/mixins/popup';

import YaPopup from '../popup/popup.vue';

// const Event_Close = 'close';
// const Event_Confirm = 'confirm';
// const Event_Cancel = 'cancel';
export default {
  name: 'ya-dialog',
  mixins: [visibilityMixin, popupMixin],
  components: {
    YaPopup
  },
  props: {
    closeVisble: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    clickCloseAction() {
      this.hide();
      this.$emit();
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
@import './dialog.less';

.ya-dialog {
  width: 270px;
  padding: 0px;
  text-align: center;
  overflow: hidden;
  border-radius: 2px;
  background-color: @dialog-bgc;
  .ya-dialog-close {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    color: @dialog-close-color;
    font-size: @fontsize-large-x;
    .yaic-close::before {
      font-family: 'ya-icon' !important;
      content: '\e60d';
    }
  }
}
.ya-dialog-fade-enter-active {
  animation: dialog-fadein 0.4s;
  .ya-dialog {
    animation: dialog-zoom 0.4s;
  }
  @keyframes dialog-fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes dialog-zoom {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>