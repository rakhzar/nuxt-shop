import type { Product } from '~/interfaces/product.interface';

export const useFavoritesProducts = () => {
  const favoriteStore = useFavoritesStore();
  const API_URL = useAPI();
  const products = ref<Product[]>();

  const fetchProducts = async () => {
    const data = await Promise.all(favoriteStore.favoriteIds.map((id) => $fetch<{ product: Product }>(`${API_URL}/products/${id}`)));
    products.value = data.map((el) => el.product);
  };

  watch(favoriteStore.favoriteIds, fetchProducts, { immediate: true });

  return {
    products,
  };
};
