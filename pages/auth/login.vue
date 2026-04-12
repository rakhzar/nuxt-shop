<script setup lang="ts">
usePageMeta('Авторизация', 'Страница авторизации для доступа к личному кабинету');
const { email, password, login } = useAuthLogin();
</script>

<template>
  <div>
    <h1>Мой аккаунт</h1>
    <form class="login-form">
      <div class="login-form__field">
        <InputField v-model="email" variant="gray" placeholder="Email" />
        <InputField v-model="password" variant="gray" placeholder="Пароль" type="password" />
      </div>
      <div class="login-form__actions">
        <ActionButton @click.stop.prevent="login">Вход</ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 129px;
}

.login-form {
  display: flex;
  gap: 70px;
  flex-direction: column;
  max-width: 500px;
  margin: 64px auto 265px;
}

.login-form__field {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.login-form__actions {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.login-form__actions a {
  text-decoration: none;
  margin: 0 auto;
  color: var(--color--black);
}

.login-form__actions a:hover {
  color: var(--color--black-hover);
}
</style>
