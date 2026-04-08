export function useCatalogFilters() {
  const route = useRoute();
  const router = useRouter();

  const category_id = ref(route.query.category_id?.toString() ?? '');
  const search = ref(route.query.search?.toString() ?? '');

  watchEffect(() => {
    router.replace({ query: { category_id: category_id.value, search: search.value } });
  });

  const query = computed(() => ({
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search || undefined,
  }));

  return { category_id, search, query };
}
