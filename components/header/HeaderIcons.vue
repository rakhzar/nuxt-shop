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
  display: flex;
  gap: 40px;
  align-items: center;
}

.header__icons a {
  padding-bottom: 17px;
  border-bottom: 1px solid transparent;
}

.header__icons a.router-link-active {
  border-bottom: 1px solid var(--color-black);
}
</style>
