<template>
  <div
    class="ya-tab"
    @click="clickAction"
    :class="{ 'ya-tab-unclick': vo.un, 'ya-tab-active': isActive }"
  >
    <slot name="icon">
      <i :class="vo.ic"></i>
    </slot>
    <slot>
      <div v-html="vo.label"></div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ya-tab',
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return { label: '' };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$parent.curVo === this.vo;
    }
  },
  watch: {},
  methods: {
    getUn(){
      if(this.vo&&this.vo.un){
        return true;
      }
      return false;
    },
    clickAction() {
      if (this.vo.un) return;
      this.$parent.trigger(this.vo);
    }
  },
  mounted() {
    this.$parent.add(this);
  },
  destroyed() {
    this.$parent.remove(this);
  }
};
</script>

<style lang='less' scoped>
@import url('./tab-bar.less');
.ya-tab {
  flex: 1;
  padding: 7px 0;
  color: @tab-color;
  text-align: center;
}
.ya-tab-unclick {
  opacity: 0.3;
}
.ya-tab-active {
  color: @tab-active-color;
}
</style>