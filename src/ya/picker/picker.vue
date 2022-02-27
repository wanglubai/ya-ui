<template>
  <ya-popup position="bottom" v-model="selfVisible">
    <div class="ya-picker-c">
      <div class="mask-top"></div>
      <div class="mask-bottom"></div>

      <div ref="scroll" class="ya-picker">
        <slot>
          <ul class="ya-picker-list">
            <li class="ya-picker-item" v-for="item in vo" :key="item">
              {{ item }}
            </li>
          </ul>
        </slot>
      </div>

      <div class="ya-picker-cancel" @click="cancelAction">取消</div>
      <div class="ya-picker-ok" @click="okAction">确认</div>
    </div>
  </ya-popup>
</template>

<script>
import BScroll from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';
import YaPopup from '../popup/popup.vue';
BScroll.use(Wheel);

export default {
  name: 'ya-picker',
  components: { YaPopup },
  props: {
    vo: [],
    options: {
      type: Object,
      default() {
        return {
          wheel: {
            selectedIndex: 0,
            wheelWrapperClass: 'ya-picker-list',
            wheelItemClass: 'ya-picker-item',
            wheelDisabledItemClass: 'ya-picker-disabled-item',
            adjustTime: 400,
            rotate: 20
          },
          click: false,
          useTransition: false,
          probeType: 3
        };
      }
    }
  },
  data() {
    return {
      selfVisible: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    cancelAction() {
      this.selfVisible = false;
    },
    okAction() {
      this.selfVisible = false;
      this.$emit('change', this.getSelectedIndex());
    },
    show() {
      this.selfVisible = true;
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    getScroll() {
      return this.scroll;
    },
    getSelectedIndex() {
      return this.scroll && this.scroll.getSelectedIndex();
    },
    wheelTo(index, delay) {
      if (this.scroll) {
        this.scroll.wheelTo(index, delay);
      }
    },
    refresh() {
      if (this.scroll) {
        this.scroll.refresh();
      }
    },
    initScroll() {
      if (this.scroll) return;
      this.scroll = new BScroll(this.$refs.scroll, this.options);
      this.initScrollEvents();
    },
    initScrollEvents() {
    }
  },
  mounted() {},
  destroyed() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
  }
};
</script>

<style lang='less' scoped>
.ya-picker-c {
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  background-color: #fff;
  .mask-top,
  .mask-bottom {
    z-index: 10;
    width: 100%;
    height: 68px;
    pointer-events: none;
    transform: translateZ(0);
  }

  .mask-top {
    border-bottom: 1px solid #ebebeb;
    position: absolute;
    top: 0;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.8)
    );
  }

  .mask-bottom {
    position: absolute;
    border-top: 1px solid #ebebeb;
    bottom: 0px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.8)
    );
  }
}
.ya-picker {
  height: 166px;
  overflow: hidden;
  pointer-events: initial;
  .ya-picker-list {
    margin-top: 68px;
  }
  .ya-picker-item {
    height: 30px;
    width: auto;
    text-align: center;
    line-height: 30px;
  }
}
.ya-picker-cancel {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #fc9153;
}
.ya-picker-ok {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #fc9153;
}
</style>