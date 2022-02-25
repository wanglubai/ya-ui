<template>
  <div>
    <ya-button @click="clickAction">点击列表</ya-button>
    <ya-action-sheet :vo="list" :visible="bl"></ya-action-sheet>
  </div>
</template>

<script>
import YaActionSheet from '../ya/action-sheet/action-sheet.vue';
import YaButton from '../ya/button/button.vue';
export default {
  components: {
    YaActionSheet,
    YaButton
  },
  props: {},
  data() {
    return {
      list: [{ ya: '111' }, { ya: '2222' }, { ya: '333' }],
      bl: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickAction() {
      this.bl = true;
    }
  },
  created() {},
  mounted() {
    // setTimeout(() => {
    //   this.bl = true;
    // }, 3000);
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
</style>