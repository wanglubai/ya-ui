<template>
  <div class="app">
    <div class="aaa">assassss</div>
    <div class="app-c">
      <ya-sticky>
        <ya-scroll>
          <div class="fi">
            <template v-for="(item, i) in list">
              <ya-sticky-ele :vo="item.sticky" :key="i"> </ya-sticky-ele>
              <div
                class="item"
                v-for="(v, vi) in item.list"
                :key="i + '-' + vi"
              >
                {{ v }}
              </div>
            </template>
          </div>
        </ya-scroll>
      </ya-sticky>
    </div>
  </div>
</template>

<script>
import YaSticky from './ya/sticky/sticky.vue';
import YaStickyEle from './ya/sticky/sticky-ele.vue';
import YaScroll from './ya/scroll/scroll.vue';
import './ya/common/css/reset.less';
export default {
  components: {
    YaScroll,
    YaSticky,
    YaStickyEle
  },
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    for (var i = 0; i < 10; i++) {
      this.list.push({
        sticky: {
          ya: `____${i}____`
        },
        list: [
          '啊缓存拉屎难吃',
          '啊缓存拉屎难吃',
          '啊缓存拉屎难吃',
          '啊缓存拉屎难吃'
        ]
      });
    }
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
.app {
  width: 100%;
  background-color: rgb(241, 242, 243);
  .aaa {
    height: 100px;
    width: 1px;
  }
  .scroll {
    height: 400px;
  }
  .label {
    text-align: center;
    font-size: 40px;
    height: 40px;
  }
  .item {
    text-align: center;
    padding: 10px;
  }
  .app-c {
    height: 400px;
    width: 100%;
    background-color: antiquewhite;
  }
}
</style>