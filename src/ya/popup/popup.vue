<template>
  <div class="ya-popup" :style="{ 'z-index': zIndex }" v-show="selfVisible">
    <!-- mask设置 -->
    <div
      v-if="mask"
      class="ya-popup-mask"
      @touchmove.prevent
      @click="maskClick"
    >
      <slot name="mask"></slot>
    </div>
    <!-- 容器 -->
    <div class="ya-popup-container" @touchmove.prevent :class="getPosClass">
      <div class="ya-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="ya-popup-content" v-else v-html="html"></div>
    </div>
  </div>
</template>

<script>
//mask->是否显示mask
//html->默认文本
//position->对齐方式
//maskClosable-> 是否遮罩关闭
import visibilityMixin from '../common/mixins/visibility';

const Event_Mask_Click = 'mask_click';
export default {
  name: 'ya-popup',
  mixins: [visibilityMixin],
  props: {
    zIndex: {
      type: Number,
      default: 100
    },
    // 遮罩是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    html: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    getPosClass() {
      return {
        [`ya-popup-${this.position}`]: true
      };
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(Event_Mask_Click, e);
      if (this.maskClosable) {
        this.hide();
      }
    }
  }
};
</script>

<style lang='less' scoped>
@popup-mask-bgc: rgb(37, 38, 45);
@popup-mask-opacity: 0.4;

.ya-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;
  .ya-popup-mask {
    overflow: hidden;
    background-color: @popup-mask-bgc;
    opacity: @popup-mask-opacity;
    pointer-events: auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ya-popup-container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    pointer-events: none;
    .ya-popup-content {
      pointer-events: auto;
    }
    &.ya-popup-center {
      align-items: center;
      justify-content: center;
    }
    &.ya-popup-top {
      align-items: flex-start;
      justify-content: center;
    }
    &.ya-popup-bottom {
      align-items: flex-end;
      justify-content: center;
    }
    &.ya-popup-left {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    &.ya-popup-right {
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
  }
}
</style>