<template>
  <div class="ya-rate-item2" :class="{ active: isActivate }"></div>
</template>

<script>
import mixins from '../../ya/rate/rate-mixins';
export default {
  mixins: [mixins]
};
</script>

<style lang='less' scoped>
.ya-rate-item2 {
  width: 20px;
  flex: 0 1 auto;
  height: 100%;
  background-color: rgb(190, 187, 187);
  border-radius: 50%;
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
