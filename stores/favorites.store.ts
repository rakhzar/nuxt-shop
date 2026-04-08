import { defineStore } from 'pinia';
import type { GetCategoriesResponse } from '~/interfaces/category.interface';

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref<number[]>([]);
  const config = useRuntimeConfig();
  const API_URL = config.public.apiurl;

  function addFavorite(id: number) {
    if (!favoriteIds.value.includes(id)) {
      favoriteIds.value.push(id);
    }
  }

  function removeFromFavorite(id: number) {
    favoriteIds.value = favoriteIds.value.filter((item) => item != id);
  }

  async function fetchFavorites() {
    const data = await $fetch<GetCategoriesResponse>(API_URL + '/categories');
    favoriteIds.value = data.categories.map((c) => c.id);
  }

  return { favoriteIds, addFavorite, removeFromFavorite, fetchFavorites };
});
