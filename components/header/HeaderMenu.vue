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
  font-size: 16px;
  line-height: 27px;
  color: var(--color-black);
  text-decoration: none;
  padding-bottom: 24px;
  border-bottom: 2px solid transparent;
}

.header__menu a:hover {
  color: var(--color-dark-gray);
}

.header__menu a.router-link-active {
  border-bottom: 2px solid var(--color-black);
}
</style>
