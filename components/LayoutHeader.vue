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
  <hr class="header__bottom-hr" />
</template>

<style scoped>
.header {
  padding: 0 16px;
  margin: 48px auto 0;
  max-width: 1248px;
  display: flex;
  justify-content: space-between;
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

.header__bottom-hr {
  border: none;
  border-bottom: 1px solid var(--color-gray);
  height: 1px;
  margin: 0 auto;
  max-width: 1216px;
}
</style>
