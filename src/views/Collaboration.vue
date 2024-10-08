<template>
  <div class="container-md mblock-2 fs-1 line-height-1">
    <section>
      <h2 class="text-center text-shadow text-title mb-0">欢迎加入合作</h2>
      <h3 class="text-center text-shadow text-title mt-0">
        Requesting Collaboration
      </h3>
      <p>
        我们欢迎全国的临床癫痫医生、从事基因研究与基因检测的专业人员和单位参加中国癫痫基因1.0项目。参与者将获得共享资源，进行研究和发表论文的机会。
      </p>
      <p>
        We welcome clinical epileptologists and specialists who work on gene
        detection all over the country to join China Epilepsy Gene 1.0 Program.
      </p>
    </section>
    <section>
      <h2 class="text-center text-shadow text-title mb-0">规则与政策</h2>
      <h3 class="text-center text-shadow text-title mt-0">
        Rules and Policies
      </h3>
      <ol class="line-height-2">
        <li>
          参与者按照项目要求协助病人入组进行基因检测并提供相关临床资料给项目组。
        </li>
        <li>
          完成一定数量的病例收集后，参与者可根据相关的规定向委员会申请查阅相关资料进行分析与研究。
        </li>
        <li>
          参与者基于自己独立的资料完成的研究和论文可以单独发表。但如果要加注EPG1.0项目时需要通过委员会同意。
        </li>
        <li>
          文章中涉及到其他研究者的资料时需要征求委员会与原资料贡献者同意。
        </li>
        <li>
          发表文章作者顺序须依照贡献大小进行排序，如果其他研究者的贡献达到或者超过作者本身的贡献时，原则上应作为共同第一作者或共同通讯作者。
          <span
            >(详细合作协议内容，请点击以下文件：

            <svg
              class="icon"
              style="
                width: 1.5rem;
                height: 1.5rem;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
              "
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2075"
            >
              <path
                d="M535.119473 0h69.599248v95.247413C729.226717 96.331138 853.614299 93.92286 977.881468 96.331138a40.459078 40.459078 0 0 1 44.914393 45.516463c2.047037 234.566322 0 469.614299 1.204139 703.819379-1.204139 24.082785 2.287865 50.694262-11.318909 72.248354-16.978363 12.041392-38.893697 10.837253-58.761994 12.041392h-349.200376V1023.518344h-72.248354C354.980245 990.886171 177.490122 960.541863 0 928.752587V95.488241C178.33302 63.578551 356.786453 32.511759 535.119473 0z"
                fill="#2A5699"
                p-id="2076"
              ></path>
              <path
                d="M604.718721 131.010348H988.598307v761.979304H604.718721v-95.247413h302.479774v-48.165569H604.718721v-59.002822h302.479774v-48.16557H604.718721v-59.002822h302.479774v-48.165569H604.718721v-60.206961h302.479774V428.673565H604.718721v-60.206961h302.479774v-46.96143H604.718721v-59.604892h302.479774V214.336783H604.718721zM240.827846 341.373471c22.156162-1.324553 44.19191-2.287865 66.348071-3.492003 15.533396 80.4365 31.30762 160.632173 48.165569 240.827845 13.125118-82.724365 27.695202-165.087488 41.783632-247.571025 23.239887-0.842897 46.479774-2.167451 69.719661-3.612418-26.370649 115.356538-49.369708 231.796802-78.148636 346.430856-19.386642 10.355597-48.165569 0-71.52587 1.204139C301.034807 596.169332 283.093133 517.779868 269.245532 438.667921c-13.606773 76.944497-31.30762 153.16651-46.841016 229.508937-22.39699-1.204139-44.793979-2.528692-67.311383-4.094073-19.266228-104.760113-42.024459-208.918156-60.206962-313.919097 19.868297-0.963311 39.857008-1.806209 60.206962-2.528693 12.041392 75.860771 25.648166 151.360301 36.124177 227.341487 16.135466-77.907808 32.873001-155.695202 49.610536-233.603011z"
                fill="#FFFFFF"
                p-id="2077"
              ></path>
            </svg>
            <a :href="url.href" download="基因1.0项目合作协议.doc">
              基因1.0项目合作协议.doc </a
            >）
          </span>
        </li>
      </ol>
    </section>
    <section>
      <h2 class="text-center text-shadow text-title mb-0">合作单位</h2>
      <h3 class="text-center text-shadow text-title mt-0">Cooperative units</h3>
      <div class="d-flex">
        <div class="flex-col">
          <p v-for="(v, k) in unitsleft" :key="k">（{{ k + 1 }}） {{ v }}</p>
        </div>
        <div class="flex-col">
          <p v-for="(v, k) in unitsright" :key="k">
            （{{ k + 1 + unitsleft.length }}） {{ v }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const unitsleft = [
  "深圳华大生命科学研究院",
  "智因东方(北京)转化医学研究中心有限公司",
  "北京贝瑞和康医学检验实验室有限公司",
  "安吉康尔(深圳)科技有限公司",
];

const unitsright = [
  "广州金谱科技有限公司",
  "赛福解码(北京)基因科技有限公司",
  "上海恩元生物科技有限公司",
  "广州嘉检医学检测有限公司",
];
const url = new URL(`../assets/doc/基因1.0项目合作协议.doc`, import.meta.url);
</script>
