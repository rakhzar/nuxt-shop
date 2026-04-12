<script setup lang="ts">
useSeoMeta({
  title: 'Главная магазина',
  description: 'Главная магазина с ювелирными изделиями',
  ogDescription: 'Главная магазина с ювелирными изделиями',
});
</script>

<template>
  <div class="banner">
    <img class="banner-img" src="/assets/img/banner-img.svg" alt="Banner Image" />
    <div class="banner__content">
      <h1 class="banner__heading">Gold big hoops</h1>
      <span class="banner__price">$ 68,00</span>
      <NuxtLink class="banner__btn" to="/catalog">Смотреть</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.banner {
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

.banner__content {
  font-family: var(--font);
  position: absolute;
  top: 226px;
  left: 39px;
  color: var(--color-white-light);
  display: flex;
  flex-direction: column;
}

.banner__heading {
  margin: 0;
  color: var(--color-white-light);
}

.banner__price {
  font-size: 26px;
  margin-top: 16px;
}

.banner__btn {
  height: 53px;
  width: 193px;
  margin-top: 48px;
  padding: 14px 44px;
  width: fit-content;
  border: 3px solid var(--color-white-light);
  border-radius: 6px;
  color: var(--color-white-light);
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}

.banner__btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
