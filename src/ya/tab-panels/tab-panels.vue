<template>
  <div class="tab-panels">
    <div class="tab-panels-group" ref="panelsGroup">
      <slot>
        <ya-tab-panel
          v-for="(item, i) in vo"
          :vo="item"
          :key="i"
        ></ya-tab-panel>
      </slot>
    </div>
  </div>
</template>

<script>
import { prefixStyle } from '../common/utils/dom';
const TRANSFORM = prefixStyle('transform');
import YaTabPanel from './tab-panel.vue';
export default {
  name: 'ya-tab-panels',
  components: {
    YaTabPanel
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    vo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      panels: []
    };
  },
  computed: {},
  watch: {
    index:{
      handler:'_move',
      immediate:true
    }
  },
  methods: {
    _move() {
      console.log(this.index);
      this.$nextTick(() => {
        const group = this.$refs.panelsGroup;
        const distance = -(this.index * 100);
        group.style[TRANSFORM] = `translateX(${distance}%)`;
      });
    },
    add(ele) {
      this.panels.push(ele);
    },
    remove(ele) {
      const index = this.panels.indexOf(ele);
      if (index > -1) {
        this.panels.splice(index, 1);
      }
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
.tab-panels {
  position: relative;
  overflow: hidden;
  .tab-panels-group {
    display: flex;
    transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
}
</style>