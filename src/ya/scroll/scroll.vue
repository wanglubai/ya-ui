<template>
  <div ref="wrapper" class="ya-scroll-wrapper">
    <div>
      <ya-loading v-if="getDownLoading"></ya-loading>
      <slot>
        <ul class="ya-scroll-list">
          <li
            class="ya-scroll-item"
            v-for="item in vo"
            :key="item"
            @click="clickItemAction"
          >
            {{ item }}
          </li>
        </ul>
      </slot>
      <ya-loading v-if="getUpLoading"></ya-loading>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import YaLoading from '../loading/loading.vue';

const Event_Click = 'click';
export default {
  components: { YaLoading },
  inject: ['sticky'],
  props: {
    vo: [],
    isShowUpLoading: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {
          scrollY: true,
          probeType: 3,
          click: true
        };
      }
    }
  },
  data() {
    return {
      upLoading: false,
      downLoading: false,
      scroll: null
    };
  },
  computed: {
    getDownLoading() {
      if (this.options.pullDownRefresh && this.downLoading) {
        return true;
      }
      return false;
    },
    getUpLoading() {
      if (this.options.pullUpLoad && this.upLoading && this.isShowUpLoading) {
        return true;
      }
      return false;
    }
  },
  watch: {
    vo() {
      if (this.upLoading) {
        this.upRefresh();
        return;
      }
      if (this.downLoading) {
        this.downRefresh();
        return;
      }
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    }
  },
  methods: {
    refresh() {
      if (this.scroll) {
        this.scroll.refresh();
      }
    },
    clickItemAction(e) {
      this.$emit(Event_Click, e);
    },
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, this.options);
      this.scroll.refresh();
      this.initScrollEvents();
    },
    //上滑动加载刷新
    upRefresh() {
      this.$nextTick(() => {
        this.upLoading = false;
        this.scroll.finishPullUp();
        this.scroll.refresh();
      });
    },
    //下拉刷新
    downRefresh() {
      this.$nextTick(() => {
        this.downLoading = false;
        this.scroll.refresh();
        this.scroll.finishPullDown();
      });
    },
    initScrollEvents() {
      const list = [
        'beforeScrollStart',
        'scrollStart',
        'scrollCancel',
        'scrollEnd',
        'scroll',
        'refresh'
      ];
      this.options.pullDownRefresh && list.push('pullingDown');
      this.options.pullUpLoad && list.push('pullingUp');
      list.forEach((name) => {
        this.scroll.on(name, (e) => {
          switch (name) {
            case 'pullingDown':
              this.downLoading = true;
              break;
            case 'pullingUp':
              this.upLoading = true;
              break;
            case 'scroll':
              if (this.sticky) {
                this.sticky.setPos(e);
              }
              break;
          }
          this.$emit(name, e);
        });
      });
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      console.log(scroll);
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
@import url('./scroll.less');
.ya-scroll-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  .ya-scroll-item {
    height: 60px;
    line-height: 60px;
    font-size: @fontsize-large-x;
    padding-left: 20px;
  }
}
</style>