<template>
  <nav class="header__menu">
    <NuxtLink to="/catalog">Магазин</NuxtLink>
    <NuxtLink to="/about">О нас</NuxtLink>
  </nav>
</template>

<style>
.header__menu {
  @apply flex gap-[60px] items-center;
}

.header__menu a {
  @apply text-[16px] leading-[27px] text-[var(--color-black)] no-underline pb-6 border-b-2 border-transparent transition-colors duration-200;
}

.header__menu a:hover {
  @apply hover:text-[var(--color-dark-gray)];
}

.header__menu a.router-link-active {
  @apply border-b-[var(--color-black)];
}
</style>
