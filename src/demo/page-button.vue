<template>
  <div class="btns">
    <ya-button :vo="{}"> normal </ya-button>
    <ya-button :vo="{ light: true }"> light=true </ya-button>
    <ya-button :vo="{ primary: true }"> primary=true </ya-button>
    <ya-button :vo="{ outline: true }"> outline=true </ya-button>
    <ya-button :vo="{ disabled: true }"> disabled=true </ya-button>
    <ya-button :vo="{ primary: true, outline: true }">
      primary,outline=true
    </ya-button>
    <ya-button :vo="{ primary: true, outline: true, icon: 'ya-info' }">
      icon
    </ya-button>
    <ya-button> <ya-checkbox :vo="{ state: true,label:'checkbox' }"></ya-checkbox> </ya-button>
  </div>
</template>

<script>
import YaButton from '../ya/button/button.vue';
import YaCheckbox from '../ya/checkbox/checkbox.vue';
export default {
  components: {
    YaButton,
    YaCheckbox
  },
  props: {},
  data() {
    return {};
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
.btns {
  height: 100vh;
  display: flex;
  background-color: #ebf0f5;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 60px;
}
</style>