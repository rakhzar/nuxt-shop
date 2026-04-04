<template>
  <div class="header">
    <NuxtLink to="/">
      <IconLogo />
    </NuxtLink>
    <div class="header__content">
      <HeaderMenu />
      <div class="header__hr"></div>
      <HeaderIcons />
    </div>
  </div>
</template>

<style scoped>
.header {
  margin: 0 auto;
  max-width: 1248px;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  border-bottom: 1px solid var(--color-gray);
}

.header__content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.header__hr {
  border-left: 1px solid var(--color-dark-gray);
  height: 17px;
  align-self: flex-start;
  margin: 4px 0 6px 0;
}
</style>
