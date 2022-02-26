<template>
  <div class="ya-checkbox" :class="rootclass">
    <input
      class="ya-checkbox-input"
      :disabled="vo.disabled"
      type="checkbox"
      v-model="dataVo.state"
    />
    <span class="ya-checkbox-ui"> </span>
    <span class="ya-checkout-label">
      <slot>{{ dataVo.label }}</slot>
    </span>
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
    // state true||false
    // label 'laebl'
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
  computed: {
    rootclass() {
      const classObj = {
        'ya-checkbox-checked': this.dataVo.state,
        'ya-checkbox-disabled': this.dataVo.disabled
      };

      return classObj;
    }
  },
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
@font-color: #666;
@border-color: #ccc;
@bg-color: #fff;
@selected-color: #fc9153;
.ya-checkbox {
  position: relative;
  text-align: left;
  font-size: 100%;
  color: @font-color;
  // background-color: @bg-color;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px 10px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .ya-checkbox-input {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .ya-checkbox-ui {
    box-sizing: border-box;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.42em;
    background-color: @bg-color;
    border: 1px solid @border-color;
  }
}
.ya-checkbox-checked .ya-checkbox-ui {
  border: 1px solid rgba(red, green, blue, 0);
  background-color: @selected-color;
}
.ya-checkbox-disabled .ya-checkbox-ui {
  opacity: 0.4;
}
</style>