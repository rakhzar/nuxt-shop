<script setup lang="ts">
import type { GetProductsResponse } from '~/interfaces/product.interface';

const config = useRuntimeConfig();
const { category_id, search, query } = useCatalogFilters();
const { options: categoriesSelect } = await useCategoriesSelect(config.public.apiurl);

const { data: productsData } = await useFetch<GetProductsResponse>(config.public.apiurl + '/products', {
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
  gap: 70px 24px;
}
</style>
