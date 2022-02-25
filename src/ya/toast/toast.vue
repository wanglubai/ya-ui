<template>
  <transition name="ya-toast-fade">
    <ya-popup
      :z-index="zIndex"
      :maskClosable="true"
      :mask="mask"
      v-model="isVisible"
    >
      <div v-show="msg" class="ya-toast-tip" v-html="msg"></div>
    </ya-popup>
  </transition>
</template>

<script>
import popupMixin from '../common/mixins/popup';
import visibilityMixin from '../common/mixins/visibility';
import YaPopup from '../popup/popup.vue';

const Event_Timeout = 'timeout';
export default {
  name: 'ya-toast',
  mixins: [visibilityMixin, popupMixin],
  components: { YaPopup },
  props: {
    msg: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: false
    },
    cd: {
      type: Number,
      default: 3000
    },
    zIndex: {
      type: Number,
      default: 110
    }
  },
  data() {
    return {
      timer: null
    };
  },
  computed: {},
  watch: {
    isVisible(newVal) {
      if (!newVal) {
        this.clearTimer();
        this.$emit(Event_Timeout);
      }
    }
  },
  methods: {
    maskClickAction() {
      this.maskClosable && this.hide();
    },
    show() {
      this.isVisible = true;
      this.clearTimer();
      this.$nextTick(() => {
        if (this.timer !== 0) {
          this.timer = setTimeout(() => {
            this.hide();
          }, this.cd);
        }
      });
    },
    hide() {
      this.clearTimer();
      this.isVisible = false;
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.ya-toast-fade-enter-active {
  animation: toast-in 0.2s;
}

.ya-toast-fade-leave-active {
  animation: toast-in 0.2s;
}

@keyframes toast-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes toast-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
