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
  margin: 48px auto 17px;
  max-width: 1248px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray);
}

.header__content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.header__hr {
  border-left: 1px solid var(--color-gray);
  height: 17px;
  align-self: flex-start;
  margin-top: 4px;
}
</style>
