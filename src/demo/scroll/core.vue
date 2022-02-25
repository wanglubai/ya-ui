<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in emojis" :key="index">
          {{ item }}
        </div>
      </div>
    </div>

    <div class="scroll-wrapper2" ref="scroll2">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in emojis" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  components: {},
  props: {},
  data() {
    return {
      bs: null,
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 🙄 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '🙄 ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      new BScroll(this.$refs.scroll2, {
        freeScroll: true
      });

      new BScroll(this.$refs.scroll, {
        // probeType: 3,
        eventPassthrough:'horizontal'
      });
    }
  },
  created() {},
  mounted() {
    this.init();
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
.scroll-wrapper {
  width: 100%;
  height: 400px;
  overflow: hidden;
  .scroll-content {
    width: 100%;
  }
  .scroll-item {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 40px;
    &:nth-child(2n) {
      background-color: #f3f5f7;
    }
    &:nth-child(2n + 1) {
      background-color: #42b983;
    }
  }
}
.scroll-wrapper2 {
  width: 300px;
  height: 300px;
  overflow: hidden;
  .scroll-content {
    // white-space: nowrap;
    // display: inline-block;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border: 1px solid #42b983;
  }
  .scroll-item {
    display: inline-block;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 40px;
  }
}
</style>