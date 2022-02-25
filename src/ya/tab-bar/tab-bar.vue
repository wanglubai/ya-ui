<template>
  <div class="ya-tab-bar">
    <slot>
      <ya-tab-ele v-for="(item, i) in vo" :key="i" :vo="item"></ya-tab-ele>
    </slot>
  </div>
</template>

<script>
import YaTabEle from './tab.vue';
export default {
  name: 'ya-tab',
  components: { YaTabEle },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      //待优化，观察多层？index更快？
      curVo: this.vo[this.index]
    };
  },
  computed: {},
  watch: {},
  methods: {
    add() {},
    remove() {},
    trigger(vo) {
      if (this.curVo == vo) {
        return;
      }
      this.curVo = vo;
      this.$emit('change', {
        vo: this.curVo,
        index: this.vo.indexOf(this.curVo)
      });
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
@import url('./tab-bar.less');
.ya-tab-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>