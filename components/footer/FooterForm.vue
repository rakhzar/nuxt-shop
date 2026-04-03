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
  position: relative;
}

.footer__form input {
  min-width: 380px;
}

.footer__form input::placeholder {
  color: var(--color-dark-gray);
}

.footer__subscribe {
  position: absolute;
  right: 0;
  top: 13px;
  background: none;
  border: none;
}
</style>
