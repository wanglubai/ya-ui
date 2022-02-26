<template>
  <div class="page-checkout">
    <YaCheckout :vo="{ disabled: true, state: false, label: '不可点击按钮' }" />
    <div class="console">disabled=true;state=false</div>

    <YaCheckout :vo="{ disabled: true, state: true, label: '可点击按钮' }" />
    <div class="console">disabled=true;state=true</div>

    <ya-checkbox-group v-model="list" :vo="list"></ya-checkbox-group>
    <div class="console">group->{{ getList }}</div>
  </div>
</template>

<script>
import YaCheckout from '../ya/checkbox/checkbox.vue';
import YaCheckboxGroup from '../ya/checkbox/checkbox-group.vue';
export default {
  components: {
    YaCheckout,
    YaCheckboxGroup
  },
  props: {},
  data() {
    return {
      list: [
        {
          state: false,
          label: 'checkbox1',
          param: { val: '携带参数' }
        },
        {
          state: false,
          label: 'checkbox2',
          param: { val: '携带参数' }
        },
        {
          state: false,
          label: 'checkbox3',
          param: { val: '携带参数' }
        }
      ]
    };
  },
  computed: {
    getList(){
      return JSON.stringify(this.list);
    }
  },
  watch: {
    list() {
      console.log('111');
    }
  },
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
.page-checkout {
  position: fixed;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  .console {
    margin: 10px 0px 40px 10px;
    color: #999;
    word-break: break-all;
    line-height: 30px;
    font-size: 12px;
  }
}
</style>