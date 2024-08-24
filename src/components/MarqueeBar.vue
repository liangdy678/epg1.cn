<template>
  <div class="seamless-list" ref="scrollBody" @mouseenter="pause" @mouseleave="resume" @mousewheel="wheel"
    :style="{ '--scroll-distance': transform }">
    <ol class="seamless-list__body" v-for="i in 2">
      <li v-for="(item, k) in lists" class="seamless-list_item">
        <a :href="item[2]" target="_blank"><b>{{ item[0] }}</b></a>
        <img v-if="k <= 3" src="@/assets/images/new.gif" alt="标签" />
        <a target="_blank" :href="item[3]" class="seamless-list_item_mark">{{ item[1] }}</a>
      </li>
    </ol>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";


//配置
const config = Object.freeze({
  step: 1,// 自动滚动距离
  roller: true, // 是否开启鼠标滚动
  distance: 25, // 鼠标滚动距离
});

// 状态
const state = {
  isCanScroll: false,
  isStop: false,
};

// 高度
const heights = {
  body: 0,
  list: 0
}

const scrollBody = ref(null);
const Observerbody = new ResizeObserver(entries => {
  for (let entry of entries) {
    const target = entry.target
    heights.body = target.offsetHeight
    const elem = target.querySelector("ol")
    heights.list = elem.offsetHeight
  }
})

const scrollDistance = ref(0);
const transform = computed(() => `translateY(${scrollDistance.value}px)`);

// 自动滚动
const callback = () => {
  //跳出递归
  if (state.isStop) {
    return;
  }
  // 滚动主逻辑函数，每帧执行一次
  const distance = scrollDistance.value + heights.list
  if (distance > 0) {
    scrollDistance.value -= config.step
  } else {
    scrollDistance.value = distance
  }
  window.requestAnimationFrame(callback);
};

const resume = () => {
  state.isStop = false;
  // 判断是否可以滚动
  if (heights.body >= heights.list) {
    // scrollDistance.value = 0;
    state.isCanScroll = false;
  } else {
    state.isCanScroll = true;
    window.requestAnimationFrame(callback);
  }
};

const pause = () => {
  state.isStop = true;
};

const wheel = (e) => {

  if (!state.isCanScroll || !config.roller) {
    return;
  }
  e.preventDefault();

  if (e.deltaY >= 0) {  //向下滚动

    const distance = scrollDistance.value + heights.list

    if (distance > 0) {
      scrollDistance.value -= config.distance

    } else {
      scrollDistance.value = distance
    }

  } else { //向上滚动

    const distance = scrollDistance.value + config.distance
    if (distance >= 0) {
      scrollDistance.value = distance - heights.list
    } else {
      scrollDistance.value += config.distance
    }

  }
};

onMounted(() => {


  heights.body = scrollBody.value.offsetHeight

  heights.list = scrollBody.value.querySelector("ol").offsetHeight

  Observerbody.observe(scrollBody.value)

  if (heights.body && heights.list) {
    state.isCanScroll = true;
    resume();
  }

});

onBeforeUnmount(() => {
  state.isStop = true;
  Observerbody.disconnect()
});

const lists = [
  ["中国癫痫基因1.0项目最新发现—「去泛素化酶USP25基因导致遗传性全面性癫痫」（2024-6-16）",
    "Heterozygous variants in USP25 cause genetic generalized epilepsy",
    "https://zktt.caaetv.com/caaett/mobile-page/share/articleDetail.html?id=1078",
    "https://pubmed.ncbi.nlm.nih.gov/38875478"
  ]
  ,
  [
    "国际合作发现新的神经发育障碍致病基因UNC79（2023-6-9）",
    "A new neurodevelopmental disorder linked to heterozygous variants in UNC79",
    "https://mp.weixin.qq.com/s/iF3-fbdXLe3nimyDMM9esA",
    "https://pubmed.ncbi.nlm.nih.gov/37183800",
  ],
  [
    "广州医科大学廖卫平教授研究团队发现新的人类致病基因—UNC13B（2021-4-27）",
    "UNC13B variants associated with partial epilepsy with favorable outcome",
    "http://www.caae.org.cn/news/show/id/389",
    "https://pubmed.ncbi.nlm.nih.gov/33876820",
  ],
  [
    "广医二院廖卫平教授团队又一重大发现解密新的癫痫致病基因HCFC1及其亚分子效应（2023-7-25）",
    "HCFC1 variants in the proteolysis domain are associated with X-linked idiopathic partial epilepsy: Exploring the underlying mechanism",
    "https://mp.weixin.qq.com/s/_7rstkl-KA7bgIbWoP8DSQ",
    "https://pubmed.ncbi.nlm.nih.gov/37264743",
  ],
  [
    "中国癫痫基因1.0项目多中心合作发现新的癫痫致病基因-MPDZ（2023-7-26）",
    "MPDZ variants associated with epilepsies and/or febrile seizures and the individualized genotype-phenotype correlation",
    "http://www.caae.org.cn/news/show/id/515",
    "https://pubmed.ncbi.nlm.nih.gov/38292201",
  ],
  [
    "广医二院综合癫痫中心团队发现新的癫痫致病基因-BSN基因（2022-12-28）",
    "Variants in BSN gene associated with epilepsy with favorable outcome",
    "https://mp.weixin.qq.com/s/HwxSzm8j-iuSDOAy19uHog",
    "https://pubmed.ncbi.nlm.nih.gov/36600631",
  ],
  [
    "贵州青年医生在我院癫痫中心进修学习期间发现新的癫痫致病基因BRWD3（2022-12-21）",
    "Variants in BRWD3 associated with X-linked partial epilepsy without intellectual disability",
    "https://mp.weixin.qq.com/s/O0HW-wG7Chbsy4xHIstbBQ",
    "https://pubmed.ncbi.nlm.nih.gov/36514184",
  ],
  [
    "中国癫痫基因1.0项目发现第12个新的癫痫致病基因-CELSR1（2022-8-15）",
    "CELSR1 variants are associated with partial epilepsy of childhood",
    "http://www.caae.org.cn/news/show/id/466",
    "https://pubmed.ncbi.nlm.nih.gov/36453712",
  ],
  [
    "广东青年医生发现新的癫痫致病基因—ATP6V0C 中国癫痫基因1.0项目新突破（2022-6-7）",
    "ATP6V0C Is Associated With Febrile Seizures and Epilepsy With Febrile Seizures Plus",
    "http://www.caae.org.cn/news/show/id/457",
    "https://pubmed.ncbi.nlm.nih.gov/35600075",
  ],
  [
    "新发现：原多囊肾基因PKD1是新的重要的癫痫致病基因（2022-5-11）",
    "Recessive PKD1 Mutations Are Associated With Febrile Seizures and Epilepsy With Antecedent Febrile Seizures and the Genotype-Phenotype Correlation",
    "http://www.caae.org.cn/news/show/id/451",
    "https://pubmed.ncbi.nlm.nih.gov/35620448",
  ],
  [
    "中国癫痫基因1.0项目再发现新的癫痫致病基因-AFF2（2022-4-1）",
    "AFF2 is associated with X-linked partial (focal) epilepsy with antecedent febrile seizures",
    "http://www.caae.org.cn/news/show/id/448",
    "https://pubmed.ncbi.nlm.nih.gov/35431806",
  ],
  [
    "中国癫痫基因1.0项目再发现新的癫痫致病基因-CELSR3（2021-12-26）",
    "CELSR3 variants are associated with febrile seizures and epilepsy with antecedent febrile seizures",
    "http://www.caae.org.cn/news/show/id/434",
    "https://pubmed.ncbi.nlm.nih.gov/34951123",
  ],
  [
    "新的癫痫致病基因- CHD4基因—中国癫痫基因1.0项目又一发现（2021-6-17）",
    "CHD4 variants are associated with childhood idiopathic epilepsy with sinus arrhythmia",
    "http://www.caae.org.cn/news/show/id/401",
    "https://pubmed.ncbi.nlm.nih.gov/34109749",
  ],
  [
    "「CAAE中国癫痫基因1.0项目」重要成果——「癫痫全外显子测序结果分析进修班」首期学员发现新的癫痫类型与致病基因（2021-3-12）",
    "YWHAG Mutations Cause Childhood Myoclonic Epilepsy and Febrile Seizures: Molecular Sub-regional Effect and Mechanism",
    "https://mp.weixin.qq.com/s/0XFTIDsL7rqrh8H8kLqYlw",
    "https://pubmed.ncbi.nlm.nih.gov/33767733",
  ],
  [
    "PGM3基因为新的癫痫致病基因——中国癫痫基因1.0项目初见成效（2020-11-11）",
    "Heterozygous PGM3 variants are associated with idiopathic focal epilepsy with incomplete penetrance",
    "https://mp.weixin.qq.com/s/jUB_of_hdQNrFv9Y-DxO3A",
    "https://pubmed.ncbi.nlm.nih.gov/33193641",
  ],
];
</script>

<style>
.seamless-list {
  width: 75%;
  height: 375px;
  margin: 1rem auto;
  overflow: hidden;
  position: relative;
  resize: both;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  --scroll-distance: translateY(0);
}

.seamless-list__body {
  margin-block: 0;
  padding-right: 1.5rem;
  padding-block: 2rem;
  text-align: justify;
  list-style-type: decimal-leading-zero;
  transform: var(--scroll-distance);
}

.seamless-list__body .seamless-list_item {
  line-height: 1.75;
}

.seamless-list__body .seamless-list_item:not(:last-child) {
  margin-bottom: 1rem;
}

.seamless-list__body .seamless-list_item .seamless-list_item_mark {
  color: rgb(223 140 126);
}
</style>
