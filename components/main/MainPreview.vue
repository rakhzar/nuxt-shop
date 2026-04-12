<template>
  <div class="preview-header">
    <h2 class="preview__title">Последние поступления</h2>
    <NuxtLink class="preview__link" to="/catalog">Все</NuxtLink>
  </div>
</template>

<style scoped>
.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39px;
}

.preview__link {
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-transform: capitalize;
  color: var(--color-accent);
  text-decoration: none;
}
</style>
