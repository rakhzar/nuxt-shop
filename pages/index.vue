<script setup lang="ts">
import type { GetProductsResponse } from '~/interfaces/product.interface';
const API_URL = useAPI();
const { query } = useCatalogFilters();

useSeoMeta({
  title: 'Главная магазина',
  description: 'Главная магазина с ювелирными изделиями',
  ogDescription: 'Главная магазина с ювелирными изделиями',
});

const { data: productsData } = await useFetch<GetProductsResponse>(API_URL + '/products', {
  key: 'get-products',
  query,
});

const mainProducts = computed(() => productsData.value?.products?.slice(0, 6) ?? []);
</script>

<template>
  <div>
    <div class="banner">
      <MainBanner />
    </div>
    <div class="preview">
      <MainPreview />
    </div>
    <div class="preview__grid">
      <CatalogCard v-for="product in mainProducts" v-bind="product" :key="product.id" />
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: var(--color-white-stub);
}

.preview {
  margin-top: 64px;
}

.preview__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 70px 12px;
  margin-bottom: 250px;
}
</style>
