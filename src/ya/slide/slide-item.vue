
<template>
  <div class="ya-slide-item">
    <slot :vo="vo">
      <img :src="vo.img" />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ya-slide-item',
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return {
          // url:'',
          // img:''
        };
      }
    }
  },
  data() {
    return {};
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
.ya-slide-item {
  float: left;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);

    img {
      display: block;
      width: 100%;
    }
}
</style>