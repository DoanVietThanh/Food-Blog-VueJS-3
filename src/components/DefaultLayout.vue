<template>
  <navbar />
  <main>
    <div class="container max-w-[1200px] mx-auto mb-8">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
