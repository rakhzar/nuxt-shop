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
  transition: all 0.3s;
}

main {
  margin: 0 auto;
  max-width: 1248px;
  padding: 40px 0;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
