<script setup lang="ts">
import HeroPreviewComp from '@/components/hero-preview/HeroPreviewComp.vue';
</script>

<template>
  <main class="home-container">
    <div class="hero">
      <div class="hero-text">
        <h1>
          A dazzling array of vibrant hues
        </h1>
        <p>
          Carefully crafted color palettes and gradients for your next project, because you deserve nothing but
          <b>Awesome</b>
        </p>
        <div class="cta-group">
          <button class="btn btn-primary btn-lg">
            explore palettes
          </button>
        </div>
      </div>
      <div>
        <HeroPreviewComp />

      </div>
    </div>
  </main>
</template>

<style scoped>
@import '../assets/home.css';

</style>