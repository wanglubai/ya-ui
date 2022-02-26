<template>
  <div>
    <slot>
      <ya-checkbox
        v-for="(item, i) in dataVo"
        :key="i"
        :vo="item"
        @change="changeAction"
      ></ya-checkbox>
    </slot>
  </div>
</template>

<script>
import YaCheckbox from './checkbox.vue';
export default {
  name: 'ya-checkbox-group',
  model: {
    prop: 'vo',
    event: 'change'
  },
  components: {
    YaCheckbox
  },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      dataVo: this.vo
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction(vo) {
      this.dataVo.forEach((ele) => {
        if (ele.label == vo.label) {
          ele.state = vo.state;
        }
      });
      console.log(JSON.stringify(this.dataVo));
      this.$emit('change', this.dataVo);
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