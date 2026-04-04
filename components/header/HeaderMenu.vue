<template>
  <div class="header__menu">
    <NuxtLink to="/catalog">Магазин</NuxtLink>
    <NuxtLink to="/about">О нас</NuxtLink>
  </div>
</template>

<style scoped>
.header__menu {
  display: flex;
  gap: 60px;
  align-items: center;
}

.header__menu a {
  line-height: 27px;
  color: var(--color-black);
  text-decoration: none;
}
</style>
