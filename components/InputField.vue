<script setup lang="ts">
const { variant } = defineProps<{
  variant: 'gray' | 'black';
}>();

const data = defineModel<string>();
</script>

<template>
  <input v-model="data" class="input" :class="variant" />
</template>

<style scoped>
.input {
  padding: 12px 0;
  background: none;
  border: none;
  color: var(--color-dark-gray);
}

.input::placeholder {
  color: var();
}

.gray {
  border-bottom: 1px solid var(--color-dark-gray);
}

.black {
  border-bottom: 1px solid var(--color-gray);
}
</style>
