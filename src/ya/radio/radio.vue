<template>
  <div class="ya-radio">
    <input
      class="ya-radio-input"
      type="radio"
      :name="dataVo.id"
      :value="dataVo.label"
      v-model="dataVo.state"
    />
    <div class="ya-radio-ui"></div>
    <div class="ya-radio-label">{{ dataVo.label }}</div>
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
          state: 'true'
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
    'dataVo.state'(e){
      console.log(e);
      console.log(this.dataVo);
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
@font-color: #666;
@border-color: #ccc;
@bg-color: #fff;
@selected-color: #fc9153;

.ya-radio {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  .ya-radio-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ff0000;
  }

  .ya-radio-ui {
    box-sizing: border-box;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.42em;
    background-color: @bg-color;
    border: 1px solid @border-color;
  }
}
.ya-radio-checked .ya-radio-ui {
  border: 1px solid rgba(red, green, blue, 0);
  background-color: @selected-color;
}
.ya-radio-disabled .ya-radio-ui {
  opacity: 0.4;
}
</style>