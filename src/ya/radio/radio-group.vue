<template>
  <div>
    <ya-radio-group
      v-for="(item, i) in vo"
      :key="i"
      :vo="item"
      v-model="value"
    ></ya-radio-group>
  </div>
</template>

<script>
import YaRadioGroup from './radio.vue';
export default {
  components: {
    YaRadioGroup
  },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      dataVo: this.vo,
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
</style>