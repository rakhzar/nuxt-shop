<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface';

const product = defineProps<Product>();
const config = useRuntimeConfig();
</script>

<template>
  <NuxtLink class="card" to="/">
    <div class="card__image" :style="{ background: `url(${config.public.imageurl}${product.images[0]}) lightgray 50% / cover no-repeat;` }">
      <span class="card__discount">-{{ product.discount }}%</span>
    </div>
    <div class="card__name">{{ product.name }}</div>
    <div class="card__price">$ {{ product.price }}</div>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
  width: 100%;
  text-decoration: none;
}

.card__image {
  aspect-ratio: 1/1;
  width: 100%;
  min-width: 300px;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.5s ease;
  border-radius: 8px;
}

.card__image:hover {
  box-shadow: 0 4px 12px rgba(201, 185, 154, 0.3);
  border: 2px solid;
  transform: translateY(-4px);
  border-color: var(--color-dark-gray-hover);
}

.card__discount {
  background: var(--color-accent);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--color-white-light);
}

.card__name {
  font-size: 20px;
  line-height: 26px;
  color: var(--color-black);
}

.card__price {
  font-weight: 500;
  font-size: 20px;
  color: var(--color-accent);
  text-transform: capitalize;
}
</style>
