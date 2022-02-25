<template>
  <div class="ya-checkbox">
    <label class="ya-checkbox-wrap">
      <input class="ya-checkbox-input" type="checkbox" v-model="dataVo.state" />
      <span class="ya-checkbox-ui">
        <i></i>
      </span>
      <span class="ya-checkout-label">
        <slot>{{ dataVo.label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ya-checkbox',
  model: {
    prop: 'vo',
    event: 'change'
  },
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return {
          state: true,
          label: 'label'
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
    'dataVo.state': {
      handler: function () {
        this.$emit('change', this.dataVo);
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import url('./checkbox.less');
</style>