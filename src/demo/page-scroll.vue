<template>
  <ya-scroll
    class="scroll"
    :vo="list"
    :options="{ pullDownRefresh: true, pullUpLoad: true }"
    @pullingDown="pullingDownAction"
    @pullingUp="pullingUpAction"
  ></ya-scroll>
</template>

<script>
import YaScroll from '../ya/scroll/scroll.vue';
import str from './utils/str';
export default {
  components: {
    YaScroll
  },
  props: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    pullingDownAction() {
      setTimeout(() => {
        this.list = [];
        this.creat();
      }, 2000);
    },
    pullingUpAction() {
      setTimeout(() => {
        this.creat();
      }, 2000);
    },
    creat() {
      for (var i = 0; i < 4; i++) {
        let getstr = `【${new Date().getTime()}】 ${str(100)}`;
        this.list.push(getstr);
      }
    }
  },
  created() {},
  mounted() {
    this.creat();
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
.scroll {
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  width: 100vw;
  height: 100vh;
}
</style>