<template>
  <div class="image">
    <div class="" v-for="(item, i) in list" :key="i" @click="clickAction">
      <img class="img" :src="item.img" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          img: 'https://dpubstatic.udache.com/static/dpubimg/C9lKs8y0E6/IMG_4014.jpg'
        },
        {
          img: 'https://dpubstatic.udache.com/static/dpubimg/hD6agmm2ov/IMG_4012.jpg'
        },
        {
          img: 'https://dpubstatic.udache.com/static/dpubimg/twV-VvZOA9/IMG_4011.jpg'
        },
        {
          img: 'https://dpubstatic.udache.com/static/dpubimg/eR_MahwRUT/IMG_4010.jpg'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickAction() {
      this.$createImagePreview({
        vo: this.list
      }).show();
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
.image{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.img {
  width: 80px;
  height: auto;
}
</style>