<template>
  <div>
    <input
      type="radio"
      :name="dataVo.id"
      :value="dataVo.label"
      v-model="dataVo.state"
    />
    <div>{{ dataVo.label }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return {
          label: 'label',
          state: 'label'
        };
      }
    }
  },
  data() {
    return {
      dataVo: this.vo
    };
  },
  computed: {},
  watch: {
    // 'dataVo.label': {
    //   handler: function () {
    //     console.log(this.dataVo);
    //     this.$emit('change', this.dataVo);
    //   }
    // }
  },
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