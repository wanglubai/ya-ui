<template>
  <div class="ya-action">
    <ya-button @click="clickAction">点击列表</ya-button>
    <div class="console">console->{{ msg }}</div>
    <ya-action-sheet
      :vo="list"
      v-model="visible"
      @change="changeAction"
    ></ya-action-sheet>
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
      list: [{ ya: '流浪地球' }, { ya: '三体' }, { ya: '天龙八部' }, { ya: '球形闪电' }],
      visible: false,
      msg: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction(v) {
      this.msg = v.ya;
    },
    clickAction() {
      this.visible = true;
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
.ya-action {
  padding: 50px;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.console{
  margin-top: 30px;
}
</style>