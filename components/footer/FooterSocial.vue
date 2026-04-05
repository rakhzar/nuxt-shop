<template>
  <div class="footer__social">
    <NuxtLink to="#">
      <Icon name="icons:li" size="30px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:fb" size="30px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:in" size="30px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:tw" size="30px" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.footer__social {
  @apply flex gap-[30px];
}

.footer__social a {
  @apply text-[var(--color-dark-gray)];
}

.footer__social a:hover {
  @apply hover:text-[var(--color-dark)];
}
</style>
