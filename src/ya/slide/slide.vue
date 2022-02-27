<template>
  <div class="ya-slide" ref="slide">
    <div class="ya-slide-content">
      <slot>
        <ya-slide-item
          v-for="(item, i) in vo"
          :key="i"
          :vo="item"
        ></ya-slide-item>
      </slot>
    </div>
    <slot name="pro" :index="curIndex" :length="vo.length">
      <div class="ya-slide-dots-content">
        <div class="ya-slide-progress">
          <div v-if="config.progressType == 'txt'" class="ya-slide-pro">
            {{ curIndex + 1 }}-{{ vo.length }}
          </div>
          <template v-else>
            <span
              class="ya-slide-dot"
              :class="{ active: curIndex == i }"
              v-for="(item, i) in vo"
              :key="i"
              @click="clickAction(i)"
            >
            </span
          ></template>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import YaSlideItem from './slide-item.vue';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';

BScroll.use(Slide);
export default {
  name: 'ya-slide',
  components: { YaSlideItem },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
      }
    },
    config: {
      type: Object,
      default() {
        return {
          progressType: 'txt', //进度组件样式 txt dot
          scrollX: true,
          scrollY: false,
          slide: {
            autoplay: true,
            loop: true
          },
          probeType: 2, //设置回调事件
          click: true //元素是否可点击
        };
      }
    }
  },
  data() {
    return {
      scroll: null,
      curIndex: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    refresh() {
      if (this.scroll) {
        this.scroll.refresh();
      }
    },
    clickAction(i) {
      this.curIndex = i;
      if (this.scroll) {
        this.scroll.goToPage(this.curIndex, 0);
      }
    },
    init() {
      if (this.scroll == null) {
        this.scroll = new BScroll(this.$refs.slide, this.config);
        this.scroll.on('slidePageChanged', (e) => {
          this.curIndex = e.pageX;
          this.$emit('change', this.curIndex);
        });
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
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
.ya-slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .ya-slide-content {
    white-space: nowrap;
  }
}
.ya-slide-dots-content {
  width: 100%;
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  .ya-slide-progress {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 12px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .ya-slide-dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
    .ya-slide-pro {
      font-size: 12px;
      color: #eee;
    }
  }
}
</style>