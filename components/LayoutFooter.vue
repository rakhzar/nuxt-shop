<template>
  <div class="footer">
    <hr />
    <div class="footer__top">
      <FooterNav />
      <FooterForm />
    </div>
    <div class="footer__buttom">
      <div>© {{ new Date().getFullYear() }} Shoppe</div>
      <FooterSocial />
    </div>
  </div>
</template>

<style scoped>
.footer {
  @apply mx-auto max-w-[1248px] flex flex-col gap-[50px];
}

.footer hr {
  @apply border-b-2 border-[var(--color-gray)];
}

.footer__top {
  @apply flex justify-between;
}

.footer__top ul a:hover {
  @apply text-[var(--color-dark)];
}

.footer__buttom {
  @apply flex justify-between;
}
</style>
