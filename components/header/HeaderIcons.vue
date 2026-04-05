<template>
  <div class="header__icons">
    <NuxtLink to="#">
      <Icon name="icons:search" size="21px" />
    </NuxtLink>
    <NuxtLink to="/cart">
      <Icon name="icons:cart" size="21px" />
    </NuxtLink>
    <NuxtLink to="/favorites">
      <Icon name="icons:favorite" size="21px" />
    </NuxtLink>
    <NuxtLink to="/account">
      <Icon name="icons:user" size="21px" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.header__icons {
  @apply flex gap-[40px] items-center;
}

.header__icons a {
  @apply pb-6 border-b-2 border-transparent;
}

.header__icons a.router-link-active {
  @apply border-b-[var(--color-black)];
}
</style>
