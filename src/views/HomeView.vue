<template>
  <section class="home">
    <MarqueeBar />
    <div class="d-flex">
      <div class="flex-col-48">
        <h2 class="text-center text-shadow">中国癫痫基因1.0项目</h2>

        <div class="chinese">
          癫痫是一种常见的疾病，仅在中国就有超过900万患者受到癫痫疾病的困扰。然而，大多数癫痫患者的病因尚不清楚。基因研究表明，基因异常在癫痫发病过程中起着重要作用。随着科学技术的日益发展，更多患者可通过基因检测技术进一步明确病因，但如何正确解读基因检测结果是我们所面临的一大挑战。中国抗癫痫协会（CAAE）现已启动中国癫痫基因1.0
          (C-epg1.0)项目，其主要目标是将癫痫基因检测在临床中得到更好的应用
          ，在癫痫诊断和治疗中发挥更大的作用。临床癫痫专家、科学家以及基因检测专家将在此项目中合作。我们初步计划通过家庭三人组（患者与父母）进行外显子测序或全基因组测序，对1万例无获得性病因的癫痫患者进行基因检测，并培养能进行基因检测结果分析和判读的癫痫专家。除了科学研究外，每位患者的基因检测结果将被单独进行分析。我们将为每位患者提供可能的遗传诊断和治疗建议。同时，我们正努力寻找新的基因、新表型以及遗传损伤和临床严重程度间的相互关系。我们希望通过癫痫学家、患者和序列变异解读专家更密切的互动，建立评估遗传变异因果的新方法，并结合临床信息提供个体化治疗策略。
        </div>
      </div>
      <div class="flex-col-52">

        <h2 class="text-center text-shadow">China Epilepsy Gene 1.0</h2>
        <div class="english">
          Epilepsy is a common disorder that affects more than 9 million people
          in China. The causes of epilepsy were unknown in majority patients.
          Genetic studies suggest that gene abnormality plays an important role
          in the pathogenesis of epilepsy. With the advance of techniques,
          genetic test has become available for many patients. However, how to
          interpret the results from genetic test is challenging. China
          Association Against Epilepsy (CAAE) launched the China Epilepsy Gene
          1.0 (C-epg1.0) Project, aiming to make the genetic test helpful for
          diagnosis and management of epilepsy in clinical practice.
          Epileptologists, scientists, and experts in genetic test will work
          together in this project. We preliminarily plan to have genetic tests
          in 10,000 patients with epilepsy that had no acquired causes, in trios
          by whole exon sequencing or whole gene sequencing; and to have 1,000
          epileptologists trained in interpreting the results from genetic
          tests. In addition to scientific studies, the genetic test results
          will be analyzed individually. Possible genetic diagnosis and
          suggestions on management will be provided for each patient. We also
          look for new genes, new phenotypes, and the correlations between
          genetic impairment and clinical severity. We hope that by closer
          interactions between epileptologists, patients, and interpreters of
          sequence variants, that we will be able to provide methods of
          evaluating the causality of genetic variants with consideration on
          clinical information and strategies of individualized therapy.
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import MarqueeBar from "../components/MarqueeBar.vue";
</script>

<style>
.home .chinese {
  line-height: 2;
  font-size: 1rem;
  text-indent: 2em;
  text-align: justify;
}

.home .english {
  text-align: justify;
  line-height: 1.75;
  font-size: 0.875rem;
}
</style>
