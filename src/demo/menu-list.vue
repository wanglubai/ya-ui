<template>
  <ya-sticky ref="sticky" class="list-sticky">
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
      <div class="sticky-head-fixed">{{ vo.name }}</div>
    </template>
  </ya-sticky>
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
  }
};
</script>

<style lang='less' scoped>
.list-sticky {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
}
.sticky-head {
  padding: 16px 16px 10px;
  line-height: 1;
  font-size: 16px;
  color: #999;
  background: #f7f7f7;
  width: 100%;
}
.sticky-head-fixed {
  padding: 16px 16px 10px;
  line-height: 1;
  font-size: 16px;
  color: #999;
  background: #f7f7f7;
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