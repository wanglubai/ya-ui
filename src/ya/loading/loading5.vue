<template>
  <div class="ya-loading4">
    <div class="loader__ball"></div>
    <div class="loader__ball"></div>
    <div class="loader__ball"></div>
  </div>
</template>


<style lang='less' scoped>

@dotColor: #111;
@bgColor: #69c2a3;
@dotSize: 1.5rem;
@duration: 2.5s;

.ya-loading4 {
  animation: rotate @duration linear infinite normal;
  position: relative;
  transform-origin: 10% 10%;
  .loader__ball {
    height: @dotSize;
    left: -@dotSize / 2;
    position: absolute;
    top: -@dotSize / 2;
    transform-origin: 50% 50%;
    width: @dotSize;

    &:nth-of-type(2) {
      transform: rotate(120deg);
    }

    &:nth-of-type(3) {
      transform: rotate(240deg);
    }

    &::after {
      animation: move @duration / 2 ease-in-out infinite alternate;
      background-color: @dotColor;
      border-radius: 50%;
      content: '';
      display: inline-block;
      height: 100%;
      width: 100%;
      transform-origin: 50% 50%;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes move {
  0%,
  15% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150%);
  }
}
</style>