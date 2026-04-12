<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface';

const route = useRoute();
const API_URL = useAPI();

const { data } = await useFetch<{ product: Product }>(API_URL + '/products/' + route.params.id);
usePageMeta(`Купить - ${data.value?.product.name}`, `${data.value?.product.short_description}`);
</script>

<template>
  <div>
    <div>{{ data?.product.name }}</div>
  </div>
</template>
