<template>
  <div class="list">
    <ya-sticky ref="sticky">
      <template v-for="(item, i) in menu">
        <ya-sticky-ele :key="i" :vo="item">
          <div class="sticky-head">{{ item.name }}</div>
        </ya-sticky-ele>
        <div
          class="sticky-item"
          v-for="(menuItem, vi) in item.menu"
          :key="i + '-' + vi"
          @click="clickAction(menuItem)"
        >
          {{ menuItem.name }}
        </div>
      </template>
      <template v-slot:fixed="{ vo }">
        <div class="sticky-head">{{ vo.name }}</div>
      </template>
    </ya-sticky>
  </div>
</template>

<script>
import YaSticky from '../ya/sticky/sticky.vue';
import YaStickyEle from '../ya/sticky/sticky-ele.vue';
import RouterConfig from './config/route.js';
export default {
  components: {
    YaSticky,
    YaStickyEle
  },
  props: {},
  data() {
    return {
      menu: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickAction(v) {
      this.$router.push({ name: v.name });
    },
    init() {
      const base = { name: 'Base组件', menu: [] };
      const from = { name: 'From组件', menu: [] };
      const effect = { name: 'Effect组件', menu: [] };
      RouterConfig.forEach((element) => {
        if (element.meta) {
          switch (element.meta.type) {
            case 'Base组件':
              base.menu.push(element);
              break;
            case 'From组件':
              from.menu.push(element);
              break;
            case 'Effect组件':
              effect.menu.push(element);
              break;
          }
        }
      });
      this.menu = [base, from, effect];
    }
  },
  created() {},
  mounted() {
    this.init();
    this.$nextTick(() => {
      this.$refs.sticky.refresh();
    });
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
.list {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
}
.sticky-head {
  padding: 16px 16px 10px;
  line-height: 1;
  font-size: 16px;
  color: #999;
  background: #f7f7f7;
  position: relative;
  &::after {
    content: 'ya';
    position: absolute;
    opacity: 0.2;
    right: 20px;
  }
}
.sticky-item {
  height: 40px;
  line-height: 40px;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 0.4px solid #ebebeb;
  position: relative;
  &::before {
    content: '>';
    position: absolute;
    color: rgba(a, a, a, 0.3);
    opacity: 0.5;
    right: 30px;
  }
}
</style>