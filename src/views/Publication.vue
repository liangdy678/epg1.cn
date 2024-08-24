<template>
  <section class="publication container-md">
    <h2 class="text-center text-shadow text-title">
      Discovery and Publication
    </h2>
    <ol class="publication-list">
      <li v-for="(v, k) in articles" :key="k">
        {{ v.title }}
        <b>
          <i>{{ v.journal }}</i>
        </b>
        {{ v.date }} [ <a :href="v.pubmed" target="_blank">Pubmed</a> ] <span v-if="v.note"> ( {{ v.note }}
          )</span>
      </li>
    </ol>
  </section>
</template>
<script setup>
const articles = [

  {
    title: "Cuixia Fan, et al. Heterozygous variants in USP25 cause genetic generalized epilepsy.",
    journal: "Brain",
    date: "2024 Jun 14:awae191",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/38875478",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Jie Wang, et al. UNC13B variants associated with partial epilepsy with favourable outcome.",
    journal: "Brain",
    date: "2021;144(10):3050-3060",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/33876820",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Bayat Allan, et al. A new neurodevelopmental disorder linked to heterozygous variants in UNC79.",
    journal: "Genetics in Medicine",
    date: "2023;25(9):100894",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37183800",
    note: "a novel causative gene of human disease"
  },
  {
    title: "He Na, et al. HCFC1 variants in the proteolysis domain are associated with X-linked idiopathic partial epilepsy: Exploring the underlying mechanism.",
    journal: "Clinical and Translational Medicine",
    date: "2023;13(6):e1289",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37264743",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Maoqiang Tian, et al. Variants in BRWD3 associated with X-linked partial epilepsy without intellectual disability.",
    journal: "CNS Neurosci Ther",
    date: "2023;29(2):727-735",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36514184",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Jia Li, et al. CELSR3 variants are associated with febrile seizures and epilepsy with antecedent febrile seizures.",
    journal: "CNS Neurosci Ther",
    date: "2022;28(3):382-389",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/34951123",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Xiaorong Liu, et al. CHD4 variants are associated with childhood idiopathic epilepsy with sinus arrhythmia.",
    journal: "CNS Neurosci Ther",
    date: "2021;27(10):1146-1156",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/34109749",
    note: "a novel causative gene of human disease"
  },

  {
    title: "Mingfeng He, et al. ZFHX3 variants cause childhood partial epilepsy and infantile spasms with favourable outcomes.",
    journal: "J Med Genet.",
    date: "2024;61(7):652-660",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/38508705",
    note: "a novel causative gene of human disease"
  },

  {
    title: "Bin Li, et al. ATP6V1A variants are associated with childhood epilepsy with favorable outcome.",
    journal: "Seizure",
    date: "2023;S1059-1311(23)00218-2",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37574426",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Zilong Ye, et al. NEXMIF variants are associated with epilepsy with or without intellectual disability",
    journal: "Seizure",
    date: "2023;S1059-1311(23)00226-1",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37643945",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Yujie Chen, et al. CCDC88C variants are associated with focal epilepsy and genotype-phenotype correlation.",
    journal: "Clinical Gentics",
    date: "2024",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/38173219",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Yunyan He, et al. DLG3 variants caused X-linked epilepsy with/without neurodevelopmental disorders and the genotype-phenotype correlation.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2024;16:1290919",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/38249294",
    note: "a novel causative gene of epilepsy"
  },

  {
    title: "Li Ren-Ke, et al. Investigation of FRMPD4 variants associated with X-linked epilepsy",
    journal: "Seizure",
    date: "2024;116:45-50",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37330374",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Jiehua Yang, et al. MED12 variants associated with X-linked recessive partial epilepsy without intellectual disability.",
    journal: "Seizure",
    date: "2023",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36894399",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Luo, Sheng, et al. SZT2 variants associated with partial epilepsy or epileptic encephalopathy and the genotype-phenotype correlation.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2023;16:1162408",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37213690",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Dongfang Zou, et al. Association of FAT1 with focal epilepsy and correlation between seizure relapse and gene expression stage.",
    journal: "Seizure",
    date: "2023;S1059-1311(23)00063-8",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36941137",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Liang Jin, et al. Recessive APC2 missense variants associated with epilepsies without neurodevelopmental disorders.",
    journal: "Seizure",
    date: "2023;111:172-177",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/37657306",
    note: "a novel causative gene of epilepsy"
  },

  {
    title: "Junxia Luo, et al. MPDZ variants associated with epilepsies and/or febrile seizures and the individualized genotype-phenotype correlation.",
    journal: "Genes & Diseases",
    date: "2023;11(3):101032",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/38292201",
    note: "a novel causative gene of epilepsy"
  },

  {
    title: "Wenjun Bian, et al. SHROOM4 Variants Are Associated With X-Linked Epilepsy With Features of Generalized Seizures or Generalized Discharges.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2022;15:862480",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/35663265",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Zheng Chen, et al. CELSR1 variants are associated with partial epilepsy of childhood.",
    journal: "American journal of medical genetics Part B, Neuropsychiatric genetics",
    date: "2022;189(7-8):247-256",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36453712",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Xiang Li, et al. BCOR variants are associated with X-linked recessive partial epilepsy.",
    journal: "Epilepsy Research",
    date: "2022;187:107036",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36279688",
    other:
      "https://zktt.caaetv.com/caaett/mobile-page/share/articleDetail.html?id=768",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Sheng Luo, et al. Recessive LAMA5 Variants Associated With Partial Epilepsy and Spasms in Infancy.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2022;15:825390",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/35663266",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Yang Tian, et al. ATP6V0C Is Associated With Febrile Seizures and Epilepsy With Febrile Seizures Plus.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2022;15:889534",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/35600075",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Jingyang Wang, et al. Recessive PKD1 Mutations Are Associated With Febrile Seizures and Epilepsy With Antecedent Febrile Seizures and the Genotype-Phenotype Correlation.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2022;15:861159",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/35620448",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Tingting Ye, et al. Variants in BSN gene associated with epilepsy with favourable outcome.",
    journal: "J Med Genet",
    date: "2022",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/36600631",
    note: "a novel causative gene of human disease"
  },
  {
    title: "Dongfang Zou, et al. AFF2 Is Associated With X-Linked Partial (Focal) Epilepsy With Antecedent Febrile Seizures.",
    journal: "Frontiers in Molecular Neuroscience",
    date: "2022;15:795840",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/35431806",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Meigang Ma, et al. RYR2 Mutations Are Associated With Benign Epilepsy of Childhood With Centrotemporal Spikes With or Without Arrhythmia.",
    journal: "Frontiers in Neuroscience",
    date: "2021;15:629610",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/33897349",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Xiaorong Liu, et al. Heterozygous PGM3 Variants Are Associated With Idiopathic Focal Epilepsy With Incomplete Penetrance.",
    journal: "Frontiers in Genetics",
    date: "2020;11:559080",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/33193641",
    note: "a novel causative gene of epilepsy"
  },
  {
    title: "Xingguang Ye, et al. YWHAG Mutations Cause Childhood Myoclonic Epilepsy and Febrile Seizures: Molecular Sub-regional Effect and Mechanism.",
    journal: "Frontiers in Genetics",
    date: "2021;12:632466",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/33767733",
  },
  {
    title: "Bin Tang, et al. Optimization of in silico tools for predicting genetic variants: individualizing for genes with molecular subregional stratification.",
    journal: "Briefings in Bioinformatics",
    date: "2019 Nov 4",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/31686106",
  },
  {
    title: "Shi YW, et al. Synaptic clustering differences due to different GABRB3 mutations cause variable epilepsy syndromes.",
    journal: "Brain",
    date: "2019;142(10):3028-3044",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/31435640"
  },
  {
    title: "Na He, et al. Evaluating the pathogenic potential of genes with de novo variants in epileptic encephalopathies.",
    journal: "Genetics in Medicine",
    date: "2018;17(8):e12456",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/29895856",
  },
  {
    title: "Peng Zhou, et al. Novel mutations and phenotypes of epilepsy-associated genes in epileptic encephalopathies.",
    journal: "Genes, Brain and Behavior",
    date: "2018;17(8):e12456",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/29314583",
  },
  {
    title: "Jie Wang, et al. Epilepsy-associated genes.",
    journal: "Seizure",
    date: "2017;44:11-20",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28007376",
  },
  {
    title: "Yiwu Shi, et al. HLA-A*24:02 as a common risk factor for antiepileptic drug–induced cutaneous adverse reactions.",
    journal: "Neurology",
    date: "2017;6;88(23):2183-2191",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28476759",
  },
];
</script>
