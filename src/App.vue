<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <PageFoot />
</template>
<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import PageFoot from "./components/PageFoot.vue";
</script>
