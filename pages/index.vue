<script setup lang="ts">
useSeoMeta({
  title: 'Главная магазина',
  description: 'Главная магазина с ювелирными изделиями',
  ogDescription: 'Главная магазина с ювелирными изделиями',
});
</script>

<template>
  <div class="banner-wrapper">
    <img class="banner-img" src="/assets/img/banner-img.svg" alt="Banner Image" />
  </div>
</template>

<style scoped>
.banner-wrapper {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 64px;
  background: var(--color-white-stub);
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
