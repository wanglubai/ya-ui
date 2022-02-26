<template>
  <div>
    <div class="pop">
      <ya-button @click="clickAction('center')">center</ya-button>
       <ya-button @click="clickAction('top')">top</ya-button>
      <ya-button @click="clickAction('left')">left</ya-button>
      <ya-button @click="clickAction('right')">right</ya-button>
      <ya-button @click="clickAction('bottom')">bottom</ya-button>
    </div>
    <ya-popup v-model="visible" :position="position">
      <div class="msg">
        <p>{{ position }}</p>
      </div>
    </ya-popup>
  </div>
</template>

<script>
import YaButton from '../ya/button/button.vue';
import YaPopup from '../ya/popup/popup.vue';
export default {
  components: { YaButton, YaPopup },
  props: {},
  data() {
    return {
      visible: false,
      position: 'center'
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickAction(v) {
      this.position = v;
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
.pop {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.msg {
  padding: 20px;
  background-color: aliceblue;
  p {
    padding: 10px;
  }
}
</style>