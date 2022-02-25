<template>
  <div>
    <div class="demo-tab-content">
      <ya-tab-bar :vo="vo1" @change="change1Action" />
    </div>
    <div class="console">{{ vo1Json }}</div>

    <div class="demo-tab-content">
      <ya-tab-bar :vo="vo2" @change="change2Action" />
    </div>
    <div class="console">{{ vo2Json }}</div>

    <div class="demo-tab-content">
      <ya-tab-bar :vo="vo3" @change="change3Action" />
    </div>
    <div class="console">{{ vo3Json }}</div>
  </div>
</template>

<script>
import YaTabBar from '../ya/tab-bar/tab-bar.vue';
export default {
  components: { YaTabBar },
  props: {},
  data() {
    return {
      vo1: [
        { label: 'label1' },
        { label: 'label2' },
        { label: 'label3' },
        { label: 'label4' }
      ],
      vo1Json: 'console->',
      vo2: [
        { label: '按钮1' },
        { label: '禁用', un: true },
        { label: '按钮3' },
        { label: '按钮4' }
      ],
      vo2Json: 'console->',
      vo3: [
        { label: '按钮1', ic: 'ya-info' },
        { label: '禁用', un: true, ic: 'ya-share' },
        { label: '按钮3', ic: 'ya-smile' },
        { label: '按钮4', ic: 'ya-wifi' }
      ],
      vo3Json: 'console->'
    };
  },
  computed: {},
  watch: {},
  methods: {
    change1Action(p) {
      this.vo1Json = 'console->' + JSON.stringify(p);
    },
    change2Action(p) {
      this.vo2Json = 'console->' + JSON.stringify(p);
    },
    change3Action(p) {
      this.vo3Json = 'console->' + JSON.stringify(p);
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
.demo-tab-content {
  background-color: #fff;
  padding: 10px;
}
.console {
  padding: 10px;
  opacity: 0.3;
}
</style>