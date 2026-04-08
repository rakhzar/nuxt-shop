import { useDebounceFn } from '@vueuse/core';

export function useCatalogFilters() {
  const route = useRoute();
  const router = useRouter();

  const category_id = ref(route.query.category_id?.toString() ?? '');
  const search = ref(route.query.search?.toString() ?? '');

  watch([category_id, search], () => {
    changeRoute(category_id, search);
  });

  const changeRoute = useDebounceFn((category_id, search) => {
    router.replace({ query: { category_id: category_id.value, search: search.value } });
  }, 200);

  const query = computed(() => ({
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search || undefined,
  }));

  return { category_id, search, query };
}
