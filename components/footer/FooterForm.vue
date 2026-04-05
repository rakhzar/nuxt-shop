<template>
  <div class="footer__form">
    <InputField placeholder="Ваш email для акций и предложений" variant="black" />
    <button class="footer__subscribe">
      <Icon name="icons:arrow-right" size="9px" />
    </button>
  </div>
</template>

<style scoped>
.footer__form {
  @apply relative;
}

.footer__form input {
  @apply min-w-[380px] pl-[15px];
}

.footer__form input::placeholder {
  @apply text-[var(--color-dark-gray)];
}

.footer__subscribe {
  @apply right-0 top-[13px] bg-transparent border-0;
}
</style>
