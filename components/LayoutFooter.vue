<template>
  <div>
    <div class="footer__top">
      <ul>
        <li><NuxtLink>Контакты</NuxtLink></li>
        <li><NuxtLink>Условия покупки</NuxtLink></li>
        <li><NuxtLink>Доставка и возврат</NuxtLink></li>
      </ul>
      <div>
        <InputField variant="black" />
        <button>-></button>
      </div>
    </div>
    <div class="footer__bottom">
      <div>© {{ new Date().getFullYear() }} Shoppe</div>
      <div>
        <NuxtLink>
          <Icon name="icons:li" />
        </NuxtLink>
        <NuxtLink>
          <Icon name="icons:fb" />
        </NuxtLink>
        <NuxtLink>
          <Icon name="icons:in" />
        </NuxtLink>
        <NuxtLink>
          <Icon name="icons:tw" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer__top {
  display: flex;
  justify-content: space-between;
}

.footer__top ul {
  list-style: none;
  display: flex;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
}
</style>
