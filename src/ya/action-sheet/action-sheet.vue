<template>
  <transition>
    <ya-popup class="ya-action-sheet-popup" :visible="true" position="bottom" v-if="selfVisible">
      <div class="ya-action-sheet">
        <div class="ya-action-sheet-title">请选择列表</div>
        <ul class="ya-action-sheet-list">
          <li
            class="ya-action-sheet-item"
            v-for="(item, i) in vo"
            :key="i"
            v-html="item.ya"
            @click="clickAction(item)"
          ></li>
        </ul>
        <div class="ya-action-sheet-space"></div>
        <div class="ya-action-sheet-cancel" @click="cancelAction">取消</div>
      </div>
    </ya-popup>
  </transition>
</template>

<script>
import YaPopup from '../popup/popup.vue';
import popupMixin from '../common/mixins/popup'
import visibilityMixin from '../common/mixins/visibility'
export default {
  mixins:[popupMixin,visibilityMixin],
  components: { YaPopup },
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
  methods: {
    clickAction(e){
      this.$emit('change',e);
      this.hide();
    },
    cancelAction(){
      this.hide();
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
@import url('./action-sheet.less');
@color: #fc9153;
.ya-action-sheet {
  background-color: #fff;
  width: 100vw;

 .ya-action-sheet-title, .ya-action-sheet-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    display: block;
    padding: 17px 0px;
    margin: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #666;
    background-color: #fff;

    border-bottom: .5px solid @action-sheet-space-bgc;
  }
  .ya-action-sheet-title{
    color: @color;
    font-size: 12px;
  }
  .ya-action-sheet-space {
    height: 6px;
    background-color: @action-sheet-space-bgc;
  }
  .ya-action-sheet-cancel {
    background-color: transparent;
    padding-top: 23px;
    padding-bottom: 23px;
    color: @action-sheet-picker-cancel-color;
    font-size: @fontsize-medium;
    line-height: @fontsize-medium;
    background-color: transparent;
    text-align: center;
  }
}
</style>