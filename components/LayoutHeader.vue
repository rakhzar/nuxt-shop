<template>
  <header class="header">
    <NuxtLink to="/">
      <IconLogo />
    </NuxtLink>
    <div class="header__content">
      <HeaderMenu />
      <div class="header__hr"></div>
      <HeaderIcons />
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply mx-auto max-w-[1248px] flex justify-between mt-12 border-b border-[var(--color-gray)];
}

.header__content {
  @apply flex gap-[60px] items-center;
}

.header__hr {
  @apply border-2 border-[var(--color-gray)] h-[17px] selft-start mt-[4px] mb-[6px];
}
</style>
