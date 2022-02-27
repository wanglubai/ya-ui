<template>
  <div class="ya-loading2">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>


<style lang='less' scoped>
.ya-loading2 {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 10px;
    height: 10px;
    background-color: rgba(100, 100, 100, 0.8);
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  :nth-child(1) {
    animation-delay: -0.32s;
  }
  :nth-child(2) {
    animation-delay: -0.16s;
  }
}
@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>