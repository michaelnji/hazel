<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notivue, Notification } from 'notivue'
import 'boxicons/css/boxicons.css'
import NavbarComp from '@/components/navbar/NavbarComp.vue'
</script>

<template>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  <div class="dar app">
    <NavbarComp />
    <RouterView />
  </div>
</template>

<style>
.app{
  background-color: var(--base-200);
  color: var(--base-content);
  width: 100%;
}
</style>
