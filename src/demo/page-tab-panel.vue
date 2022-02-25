<template>
  <div class="demo-tab-panel">
    <div class="demo-tab-panel-header">
      <ya-tab-bar :vo="panelsInfo" @change="changeAction"></ya-tab-bar>
    </div>
    <ya-tab-panels :index="index" :vo="panelsInfo"></ya-tab-panels>
  </div>
</template>

<script>
import YaTabBar from '../ya/tab-bar/tab-bar.vue';
import YaTabPanels from '../ya/tab-panels/tab-panels.vue';
export default {
  components: {
    YaTabBar,
    YaTabPanels
  },
  props: {},
  data() {
    return {
      index: 0,
      panelsInfo: [
        {
          id: 1,
          param:
            '从2008年百年奥运梦圆，到2022年与奥林匹克运动再度携手，北京成为历史上首座“双奥之城”。过去16天，北京见证竞技体育的荣耀与梦想，凝聚人类社会的团结与友谊。五环旗下，来自91个国家和地区的近3000名运动员奋力拼搏、挑战极限、超越自我，刷新了2项世界纪录和17项冬奥会纪录，奏响“更快、更高、更强——更团结”的华彩乐章。中国克服疫情影响，为举办一届简约、安全、精彩的冬奥会付出巨大努力，一流的比赛场馆设施，出色的组织服务工作，赢得了奥林匹克大家庭和国际社会的广泛好评。中国代表团以9金4银2铜刷新了单届冬奥会获金牌数和奖牌数两项纪录，名列金牌榜第3位，创造了自1980年参加冬奥会以来的历史最好成绩。',
          label: '冬奥会'
        },
        {
          id: 1,
          param:
            '　据国际谷物理事会的数据，乌克兰预计将在2021/22年度成为全球第三大玉米出口国，第四大小麦出口国。而俄罗斯则是全球最大的小麦出口国。而标普全球数据显示，乌克兰和俄罗斯占全球小麦出口份额的23%。由于新冠疫情、全球通胀等诸多因素影响，如今全球粮食价格已接近了10年来的高点。俄乌两国巨大的市场份额意味着，任何一方出口中断，都可能导致全球粮食价格再度飙升',
          label: '俄乌危机'
        },
        {
          id: 1,
          param: `程序员的工资高，这已经是“公开的秘密”。在当前大部分省份的人均可支配收入，仍然在3千元左右徘徊时，程序员的平均月工资，基本都在7k至15k左右。当然这个行业的困难之处在于，每过几年就要翻新一遍知识体系，依托日新月异的技术迭代，实现自我提升和不断进化。虽然，程序员一直以来都有“35岁门槛”一说，但这样的现象，肯定是针对低级别程序员而言的。`,
          label: '程序员'
        },
        { id: 1, param: `第一台阶是PC的普及.让所有的白领成为了信息生产者.为人类进入信息时代做好了足够的铺垫.同时,在这时段,产生了比尔盖茨这样百亿美元级别的财富领袖.互联网的普及,信息的海量爆发和瞬间到达,让人类社会进入了全新的网络经济时代.这个时段,产生了贝佐斯的千亿级财富领袖.同样的,马斯克之所以成为马斯克,他的启动资金,也拜网络经济所赐.没有这个阶段的准备功夫.马斯克再有宏大的思想,也没有办法变成现实.人类即将迈上第三个信息时代的台阶.也就是马斯克的星链,让世界每一块地表,每个人头顶,都笼罩在信息云的圣光之下.历史永远被改变,世界从此而不同.无数的应用创新会涌现,无数的时代先锋会诞生.相信这个时段会产生万亿级的世界首富.一定与卫星网络有关.(自然是星链计划的升级版.)`, label: '马斯克' }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeAction(e) {
      this.index = e.index;
      console.log(this.index);
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
.demo-tab-panel {
  width: 100%;
  height: 1wh;
  .demo-tab-panel-header {
    background-color: #fff;
    // height: 40px;
  }
}
</style>