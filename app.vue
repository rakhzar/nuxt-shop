<script setup lang="ts">
import type { LayoutKey } from '#app';

const name = ref<LayoutKey>('auth');
</script>

<template>
  <NuxtLayout :name="name">
    <NuxtPage />
  </NuxtLayout>
</template>
