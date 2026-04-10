import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | undefined>();

  function getToken(value: string) {
    token.value = value;
  }

  function clearToken() {
    token.value = undefined;
  }

  return { token, getToken, clearToken };
});
