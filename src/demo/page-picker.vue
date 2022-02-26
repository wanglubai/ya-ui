<template>
  <div class="page-picker">
    <ya-button @click="clickAction">选择一种水果</ya-button>
    <div class="msg">{{ msg }}</div>
    <ya-picker
      ref="picker"
      @change="changeAction"
      :vo="list"
    ></ya-picker>
  </div>
</template>

<script>
import YaButton from '../ya/button/button.vue';
import YaPicker from '../ya/picker/picker.vue';
export default {
  components: {
    YaButton,
    YaPicker
  },
  props: {},
  data() {
    return {
      msg: '--',
      list: ['草莓', '菠萝', '苹果', '大鸭梨', '车厘子', '葡萄']
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction(e) {
      this.msg = this.list[e];
    },
    clickAction() {
      this.visible = true;
      this.$refs.picker.show();
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
.page-picker {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 100px;
  flex-direction: column;
  .page-picker-content {
    width: 500px;
    height: 160px;
    background-color: #fff;
  }
  .msg {
    margin-top: 100px;
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>