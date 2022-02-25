<template>
  <div class="textarea-c">
    <div class="textarea">
      <ya-textarea
        :autofocus="true"
        @blur="blurAction"
        @focus="focusAction"
        @input="inputAction"
        @change="changeAction"
      ></ya-textarea>
    </div>
    <div class="console">
      <p v-for="(item, i) in msg" :key="i">{{ item }}</p>
    </div>

    <div class="textarea">
      <ya-textarea
        :readonly="true"
        value="一段只读文本，readonly=true"
      ></ya-textarea>
    </div>

    <div class="textarea2">
      <ya-textarea v-model="value"></ya-textarea>
    </div>
    <div class="textarea3">
      <ya-textarea v-model="value"></ya-textarea>
    </div>
    <div class="textarea4">
      <ya-textarea v-model="value"></ya-textarea>
    </div>
  </div>
</template>

<script>
import YaTextarea from '../ya/textarea/textarea.vue';
export default {
  components: {
    YaTextarea
  },
  props: {},
  data() {
    return {
      value:'一段可写文本 hello world',
      msg: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    pushMsg(m) {
      if (this.msg.length == 5) {
        this.msg.shift();
      }
      this.msg.push(m);
    },
    blurAction() {
      this.pushMsg(`... blur event`);
    },
    focusAction() {
      this.pushMsg(`... focus event`);
    },
    inputAction(e) {
      this.pushMsg(`... input:${e}`);
    },
    changeAction(e) {
      this.pushMsg(`... change:${e}`);
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
.textarea {
  width: 90%;
  height: 80px;
  padding: 10px;
}

.textarea2 {
  width: 90%;
  height: 80px;
  padding: 10px;
}
.textarea3 {
  width: 80%;
  height: 70px;
  padding: 10px;
}
.textarea4 {
  width: 60%;
  height: 60px;
  padding: 10px;
}

.console {
  padding: 10px;
  p {
    font-size: 10px;
    color: gray;
    line-height: 16px;
  }
}
</style>