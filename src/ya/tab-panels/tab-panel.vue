<template>
  <div class="ya-tab-panel">
    <slot>
      <div class="ya-tab-panel-param">{{ vo.param }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    vo: {
      type: Object,
      default() {
        return { param: '' };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.$parent.add(this);
  },
  destroyed() {
    this.$parent.remove(this);
  }
};
</script>

<style lang='less' scoped>
.ya-tab-panel {
  width: 100%;
  flex: 1 0 auto;
  .ya-tab-panel-param{
    font-size: 18px;
    padding: 20px;
    line-height: 40px;
  }
}
</style>