<template>
  <div class="ya-loading1">
    <span v-for="i in str" :key="i">{{ i }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      str: 'ya-ui'
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
.ya-loading1 {
  :nth-child(1) {
    animation: ani 2s  linear 2 infinite;
  }
}
@keyframes ani {
  0% {
    color: antiquewhite;
    transform: scale(0);
  }
  50% {
    color: aqua;
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}
</style>