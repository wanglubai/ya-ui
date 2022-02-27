<template>
  <div class="sticky">
    <ya-sticky ref="sticky">
      <template v-for="(item, i) in list">
        <ya-sticky-ele :vo="item.sticky" :key="i">
          <template>
            <div class="ya-sticky-ele-title">
              ----{{ item.sticky.title }}----
            </div>
          </template>
        </ya-sticky-ele>
        <div :key="i + 'txt'" class="content">
          <div class="txt">{{ item.txt }}</div>
        </div>
      </template>
      <template v-slot:fixed="{ vo }">
        <div class="title">
          {{ vo.title }}
          <div class="bottom">{{ vo.title }}</div>
          <div class="name">{{ vo.name }}</div>
        </div>
      </template>
    </ya-sticky>
  </div>
</template>

<script>
import YaSticky from '../../ya/sticky/sticky.vue';
import YaStickyEle from '../../ya/sticky/sticky-ele.vue';
import str from '../utils/str';
export default {
  components: {
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
    str(300);
    for (var i = 0; i < 8; i++) {
      let getstr = str(200);
      this.list.push({
        sticky: {
          title: `${getstr.substring(0, 5)}`,
          name: '作者：哈利波特'
        },
        txt: getstr
      });
    }
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
<style>
.ya-sticky-ele-title {
  text-align: center;
  width: 100%;
  padding-top: 25px;
  font-size: 24px;
  padding-bottom: 20px;
}
</style>
<style lang='less' scoped>
.sticky {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 242, 243);
  position: fixed;
}
.content{
  padding: 20px;
  box-sizing: border-box;
}
.title {
  text-align: center;
  width: 100%;
  padding-top: 20px;
  font-size: 24px;
  padding-bottom: 20px;
  background-color: rgb(241, 242, 243);
  position: relative;
  
  .bottom {
    position: fixed;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 10px;
    right: 20px;
    top: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url('./icon.jpeg');
  }
}

.sticky-list {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
}
.txt {
  line-height: 30px;
  text-indent: 40px;
}
.name {
  font-size: 12px;
  position: absolute;
  right: 10px;
  opacity: 0.3;
}
</style>