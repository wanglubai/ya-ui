<template>
  <div>
    <div class="rate-c">
      <ya-rate :nums="10" v-model="value1"></ya-rate>
    </div>
    <div class="rate-c small">
      <ya-rate :nums="10" v-model="value1"></ya-rate>
    </div>
    <div class="console">console->{{ value1 }}</div>
    <div class="rate-c">
      <ya-rate :nums="10" v-model="value2">
        <item1 v-for="i in 10" :key="i" :index="i" />
      </ya-rate>
    </div>
    <div class="rate-c small">
      <ya-rate :nums="10" v-model="value2">
        <item1 v-for="i in 10" :key="i" :index="i" />
      </ya-rate>
    </div>
    <div class="console">⬆ console->{{ value2 }}</div>
    <div class="rate-c">
      <ya-rate :nums="10" v-model="value3" :disabled="true">
        <item2 v-for="i in 10" :key="i" :index="i" />
      </ya-rate>
    </div>
    <div class="rate-c small">
      <ya-rate :nums="10" :value="9" :disabled="true">
        <item2 v-for="i in 10" :key="i" :index="i" />
      </ya-rate>
    </div>
    <div class="console">⬆ console -> disabled</div>
  </div>
</template>

<script>
import Item1 from './rate/item1.vue';
import Item2 from './rate/item2.vue';
import YaRate from '../ya/rate/rate.vue';
export default {
  components: { YaRate, Item1, Item2 },
  props: {},
  data() {
    return {
      value1: 3,
      value2: 5,
      value3: 2
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
.rate-c {
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  &.small {
    width: 200px;
  }
}
.console {
  padding: 10px;
  margin-bottom: 40px;
}
</style>