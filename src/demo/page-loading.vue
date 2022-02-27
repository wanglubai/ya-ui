<template>
  <div class="page-loading">
    <div class="el"><ya-loading-1></ya-loading-1></div>
    <div class="el"><ya-loading-2></ya-loading-2></div>
    <div class="el"><ya-loading-3></ya-loading-3></div>
    <div class="el"><ya-loading-4></ya-loading-4></div>
    <div class="el"><ya-loading-5></ya-loading-5></div>
    <div class="el"><ya-loading-6></ya-loading-6></div>
  </div>
</template>

<script>
import YaLoading1 from '../ya/loading/loading1.vue';
import YaLoading2 from '../ya/loading/loading2.vue';
import YaLoading3 from '../ya/loading/loading3.vue';
import YaLoading4 from '../ya/loading/loading4.vue';
import YaLoading5 from '../ya/loading/loading5.vue';
import YaLoading6 from '../ya/loading/loading6.vue';
export default {
  components: {
    YaLoading1,
    YaLoading2,
    YaLoading3,
    YaLoading4,
    YaLoading5,
    YaLoading6
  }
};
</script>

<style lang='less' scoped>
.page-loading {
  // background-color: burlywood;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.el {
  margin: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>