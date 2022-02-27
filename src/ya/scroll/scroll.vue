<template>
  <div ref="scroll" class="ya-scroll">
    <div class="ya-scroll-content">
      <div class="ya-scroll-download" v-if="getDownLoading">
        <ya-loading-4></ya-loading-4>
      </div>
      <slot :vo="vo">
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
      <div class="ya-scroll-upload" v-show="getUpLoading">
        <ya-loading-2></ya-loading-2>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';

BScroll.use(Pullup);
BScroll.use(PullDown);

import YaLoading4 from '../loading/loading4.vue';
import YaLoading2 from '../loading/loading2.vue';

export default {
  components: { YaLoading4, YaLoading2 },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {
          scrollY: true,
          pullDownRefresh: false,
          pullUpLoad: false
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
      if (this.options.pullUpLoad && this.upLoading) {
        return true;
      }
      return false;
    }
  },
  watch: {
    vo() {
      console.log(';');
      this.refreshLoading();
      this.refresh();
    }
  },
  methods: {
    clickItemAction() {},
    refreshLoading() {
      if (this.upLoading) {
        this.upLoading = false;
        this.scroll.finishPullUp();
      }
      if (this.downLoading) {
        this.downLoading = false;
        this.scroll.finishPullDown();
      }
    },
    refresh() {
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh();
        }
      });
    },
    initScroll() {
      if (this.scroll == null) {
        this.scroll = new BScroll(this.$refs.scroll, this.options);
        this.initEvents();
        this.scroll.refresh();
      }
    },
    initEvents() {
      const list = [];
      if (this.options.pullUpLoad) list.push('pullingUp');
      if (this.options.pullDownRefresh) list.push('pullingDown');
      list.forEach((v) => {
        this.scroll.on(v, (e) => {
          switch (v) {
            case 'pullingDown':
              this.downLoading = true;
              break;
            case 'pullingUp':
              this.upLoading = true;
              break;
          }
          console.log(v);
          this.$emit(v, e);
        });
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  destroyed() {
    if (this.scroll) {
      this.scroll.destroy();
      this.scroll = null;
    }
  }
};
</script>

<style lang='less' scoped>
.ya-scroll {
  height: 100%;
  overflow: hidden;
  .ya-scroll-content {
    padding-bottom: 50px;
  }
  .ya-scroll-download,
  .ya-scroll-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    &::after {
      content: '';
      width: 10px;
      height: 40px;
      display: block;
    }
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      display: block;
    }
  }
  .ya-scroll-item {
    line-height: 60px;
    font-size: 12px;
  }
}
</style>