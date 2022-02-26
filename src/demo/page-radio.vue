<template>
  <div class="page-checkout">
    <ya-radio />
    <ya-radio />
    <ya-radio-group></ya-radio-group>
  </div>
</template>

<script>
import YaRadio from '../ya/radio/radio.vue';
import YaRadioGroup from '../ya/radio/radio-group.vue';
export default {
  components: {
    YaRadio,
    YaRadioGroup
  },
  props: {},
  data() {
    return {
      dataVo: {
        id: 1,
        state: false,
        label: '牛逼'
      },
      list: [
        {
          id: 2,
          state: false,
          label: '牛逼'
        },
        {
          id: 2,
          state: false,
          label: '牛逼1'
        },
        {
          id: 2,
          state: false,
          label: '牛逼2'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction() {
      console.log(this.dataVo);
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
</style>