<template>
  <NuxtLayout>
    <main>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
        }"
      />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

main {
  margin: 15px auto 0;
  max-width: 1216px;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
