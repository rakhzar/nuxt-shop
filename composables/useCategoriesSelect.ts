import type { GetCategoriesResponse } from '~/interfaces/category.interface';

export async function useCategoriesSelect(apiUrl: string) {
  const { data } = await useFetch<GetCategoriesResponse>(apiUrl + '/categories');

  const selectDefault = { value: '', label: 'Категории' };

  const options = computed(() => {
    return data.value ? data.value.categories.map((c) => ({ value: c.id.toString(), label: c.name })).concat(selectDefault) : [selectDefault];
  });

  return { options };
}
