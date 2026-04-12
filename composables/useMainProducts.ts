import type { GetProductsResponse } from '~/interfaces/product.interface';

export const useMainProducts = () => {
  const API_URL = useAPI();
  const { query } = useCatalogFilters();

  const { data: productsData } = useFetch<GetProductsResponse>(API_URL + '/products', {
    key: 'get-products',
    query,
  });

  const mainProducts = computed(() => productsData.value?.products?.slice(0, 6) ?? []);

  return { mainProducts };
};
