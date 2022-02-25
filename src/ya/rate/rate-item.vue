<template>
  <div class="ya-rate-item" :class="{ 'ya-rate-item-active': isActivate }">
    <slot>
      <div class="ya-rate-item-icon"></div>
    </slot>
  </div>
</template>

<script>
import rateMixins from './rate-mixins';
export default {
  name: 'ya-rate-item',
  mixins: [rateMixins]
};
</script>

<style lang='less' scoped>
.ya-rate-item {
  position: relative;
  width: 32px;
  flex: 0 1 auto;
  margin-right: 6px;
  &::after {
    content: '';
    display: block;
    padding: 50% 0;
  }
  &:last-child {
    margin-right: 0;
  }
  .ya-rate-item-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('grey.png');
  }
}

.ya-rate-item-active {
  .ya-rate-item-icon {
    background-image: url('bright.png');
  }
}
</style>