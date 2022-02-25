<template>
  <div class="ya-rate-item1" :class="{ active: isActivate }"></div>
</template>

<script>
import mixins from '../../ya/rate/rate-mixins';
export default {
  mixins: [mixins]
};
</script>

<style lang='less' scoped>
.ya-rate-item1 {
  flex: auto auto auto;
  width: 20px;
  height: 100%;
  background-color: rgb(190, 187, 187);
  margin-right: 10px;
  &::after {
    content: '';
    display: block;
    padding: 50% 0;
  }
  &.active {
    background-color: #fdc2a5;
  }
}
</style>
