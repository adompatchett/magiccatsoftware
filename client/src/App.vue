<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="router-view-area grow">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>