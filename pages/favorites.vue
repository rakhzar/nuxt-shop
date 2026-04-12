<script setup lang="ts">
usePageMeta('Избранное', 'Избранные товары');
const { products } = useFavoritesProducts();
</script>

<template>
  <div class="catalog__grid">
    <CatalogCard v-for="product in products" v-bind="product" :key="product.id" />
  </div>
</template>

<style scoped>
.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 70px 24px;
}
</style>
