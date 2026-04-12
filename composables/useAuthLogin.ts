import type { LoginResponse } from '~/interfaces/auth.interface';

export const useAuthLogin = () => {
  const API_URL = useAPI();
  const authStore = useAuthStore();
  const favoritesStore = useFavoritesStore();

  const email = ref<string | undefined>();
  const password = ref<string | undefined>();

  async function login() {
    const data = await $fetch<LoginResponse>(API_URL + '/auth/login', {
      method: 'post',
      body: {
        email: email.value,
        password: password.value,
      },
    });
    authStore.setToken(data.token);
    authStore.setEmail(data.user.email);
    await favoritesStore.restore(data.user.email);
    navigateTo('/account');
  }

  return { email, password, login };
};
