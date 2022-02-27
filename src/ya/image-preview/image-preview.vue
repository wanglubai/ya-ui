<template>
  <ya-popup :maskClosable='true' v-model="selfVisible">
    <div class="ya-imags-slide" v-if="selfVisible">
      <ya-slide :vo="vo"></ya-slide>
    </div>
  </ya-popup>
</template>

<script>
import YaPopup from '../popup/popup.vue';
import YaSlide from '../slide/slide.vue';

import visibilityMixin from '../common/mixins/visibility';
import popupMixin from '../common/mixins/popup';
export default {
  mixins: [visibilityMixin, popupMixin],
  name: 'ya-image-preview',
  components: {
    YaPopup,
    YaSlide
  },
  props: {
    vo: {
      type: Array,
      default() {
        return [];
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
  },
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
.ya-imags-slide {
  width: 300px;
  height: 300px;
}
</style>