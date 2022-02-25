<template>
  <div class="c">
    <div class="mask-top"></div>
    <div class="mask-bottom"></div>
    <div ref="scroll" class="ya-picker">
      <slot>
        <ul class="ya-picker-list">
          <li
            class="ya-picker-item"
            v-for="item in vo"
            :key="item"
            @click="clickItemAction"
          >
            {{ item }}
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'ya-picker',
  components: {},
  props: {
    options: {
      type: Object,
      default() {
        return {
          wheel: {
            selectedIndex: 1,
            wheelWrapperClass: 'ya-picker-list',
            wheelItemClass: 'ya-picker-item',
            wheelDisabledItemClass: 'ya-picker-disabled-item',
            adjustTime: 400,
            rotate: 20
          },
          useTransition: false,
          probeType: 3
        };
      }
    }
  },
  data() {
    return {
      selectedIndex: 2,
      vo: []
    };
  },
  computed: {},
  watch: {},
  methods: {
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
    initScroll() {
      if (!this.$refs.scroll) {
        return;
      }
      this.scroll = new BScroll(this.$refs.scroll, this.options);
      this.scroll.refresh();
      this.initScrollEvents();
    },
    clickItemAction() {},
    initScrollEvents() {
      const list = ['wheelIndexChanged','scrollEnd'];
      list.forEach((name) => {
        this.scroll.on(name, (e) => {
          console.log(this.scroll.getSelectedIndex(),e);
          this.$emit(name);
        });
      });
    }
  },
  created() {},
  mounted() {
    for (var i = 1; i < 10; i++) {
      this.vo.push(`${i}`);
    }
    this.$nextTick(() => {
      this.initScroll();
    });
  },
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
.c {
  position: relative;
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
// .border-bottom-1px,
// .border-top-1px {
//   position: relative;
//   &:before,
//   &:after {
//     content: '';
//     display: block;
//     position: absolute;
//     transform-origin: 0 0;
//   }
// }

// .border-bottom-1px {
//   &:after {
//     border-bottom: 1px solid #ebebeb;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     transform-origin: 0 bottom;
//   }
// }

// .border-top-1px {
//   &:before {
//     border-top: 1px solid #ebebeb;
//     left: 0;
//     top: 0;
//     width: 100%;
//     transform-origin: 0 top;
//   }
// }
.ya-picker {
  height: 166px;
  overflow: hidden;
  .ya-picker-list {
    margin-top: 68px;
  }
  .ya-picker-item {
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
}
.ya-picker-disabled-item {
  background-color: #ff0000;
}
</style>