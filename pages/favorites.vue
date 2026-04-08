<script setup lang="ts">
const favoritesStore = useFavoritesStore();
favoritesStore.addFavorite(1);
</script>

<template>
  <div>{{ favoritesStore.favoriteIds[0] }}</div>
</template>
