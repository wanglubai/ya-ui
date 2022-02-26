<template>
  <div>
      <ya-loading></ya-loading>
      <ya-loading1></ya-loading1>
  </div>
</template>

<script>
import YaLoading from '../ya/loading/loading.vue'
import YaLoading1 from '../ya/loading/loading1.vue'
export default {
  components: {
    YaLoading,
    YaLoading1
  },
  props:{
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='less' scoped>
  
</style>