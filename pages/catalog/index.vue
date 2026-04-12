<script setup lang="ts">
import type { GetProductsResponse } from '~/interfaces/product.interface';

const API_URL = useAPI();
const { category_id, search, query } = useCatalogFilters();
const { options: categoriesSelect } = await useCategoriesSelect(API_URL);

useSeoMeta({
  title: 'Католог товаров',
  description: 'Католог товаров магазина Shoppe с ювелирными изделиями',
  ogDescription: 'Католог товаров магазина Shoppe с ювелирными изделиями',
});

const { data: productsData } = await useFetch<GetProductsResponse>(API_URL + '/products', {
  key: 'get-products',
  query,
});
</script>

<template>
  <div>
    <h1 class="left">Католог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <div class="catalog__search">
          <InputField v-model="search" variant="gray" placeholder="Поиск..." />
          <Icon name="icons:search" size="19px" />
        </div>
        <SelectField v-model="category_id" :options="categoriesSelect" />
      </div>
      <div class="catalog__grid">
        <CatalogCard v-for="product in productsData?.products" v-bind="product" :key="product.id" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  display: flex;
  gap: 36px;
}

.catalog__filter {
  width: 267px;
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.catalog__search {
  position: relative;
}

.catalog__search .iconify {
  position: absolute;
  top: 12px;
  right: 0px;
}

.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 70px 12px;
}
</style>
