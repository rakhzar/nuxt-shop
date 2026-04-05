<template>
  <ul>
    <li><NuxtLink to="#">Контакты</NuxtLink></li>
    <li><NuxtLink to="#">Условия покупки</NuxtLink></li>
    <li><NuxtLink to="#">Доставка и возврат</NuxtLink></li>
  </ul>
</template>

<style scoped>
ul {
  @apply list-none flex p-0 gap-[30px];
}
ul a {
  @apply font-normal text-base uppercase text-[var(--color-dark-gray)] no-underline;
}
ul a:hover {
  @apply hover:text-[var(--color-dark)];
}
</style>
