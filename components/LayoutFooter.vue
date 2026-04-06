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
  margin: 0 auto;
  max-width: 1248px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.footer hr {
  border: none;
  border-bottom: 1px solid var(--color-gray);
  height: 1px;
}

.footer__top,
.footer__buttom {
  display: flex;
  justify-content: space-between;
}
</style>
