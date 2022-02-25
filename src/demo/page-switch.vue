<template>
  <div class="switch">
    <div class="switch-c">
      <ya-switch v-model="value1">默认选中 可点击</ya-switch>
    </div>
    <div class="console">console->{{ value1 }}</div>
    <div class="switch-c">
      <ya-switch v-model="value2">默认未选择 可点击</ya-switch>
    </div>
    <div class="console">console->{{ value2 }}</div>
    <div class="switch-c">
      <ya-switch v-model="value4">默认未选中 可点击</ya-switch>
    </div>

    <div class="switch-c">
      <ya-switch v-model="value3" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value4" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value3" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value4" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value3" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value4" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value3" :disabled="true"> 不可点击</ya-switch>
    </div>
    <div class="switch-c">
      <ya-switch v-model="value4" :disabled="true"> 不可点击</ya-switch>
    </div>
  </div>
</template>

<script>
import YaSwitch from '../ya/switch/switch.vue';
export default {
  components: {
    YaSwitch
  },
  props: {},
  data() {
    return {
      value1: true,
      value2: false,
      value3: true,
      value4: false
    };
  },
  computed: {},
  watch: {
    value4() {
      this.value3 = !this.value4;
    }
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
.switch {
  padding: 10px;
  .switch-c {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
  }
  .console {
    padding: 10px;
  }
}
</style>