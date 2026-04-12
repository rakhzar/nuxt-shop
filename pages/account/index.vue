<script setup lang="ts">
usePageMeta('Личный кабинет', 'Личный кабинет пользователя с информацией и настройками');
definePageMeta({
  middleware: 'auth',
});

const authStore = useAuthStore();
</script>

<template>
  <div>
    <NuxtLink to="/" @click="authStore.clearToken">Выход</NuxtLink>
  </div>
</template>
