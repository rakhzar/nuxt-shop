export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<{ auth: string }>('auth');

  if (!auth.value) {
    return navigateTo('/auth/login');
  }
});
