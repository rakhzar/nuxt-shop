<template>
  <ul>
    <li><NuxtLink to="#">Контакты</NuxtLink></li>
    <li><NuxtLink to="#">Условия покупки</NuxtLink></li>
    <li><NuxtLink to="#">Доставка и возврат</NuxtLink></li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding: 0;
  gap: 30px;
}
ul a {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-dark-gray);
  text-decoration: none;
}

ul a:hover {
  color: var(--color-dark);
}
</style>
