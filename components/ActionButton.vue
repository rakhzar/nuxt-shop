<script setup lang="ts">
const { color = 'primary' } = defineProps<{
  color?: 'primary' | 'ghost';
}>();
</script>

<template>
  <button :class="color">
    <slot />
  </button>
</template>

<style scoped>
.primary {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  background: var(--color-black);
  cursor: pointer;
  padding: 16px;
  font-family: var(--font);
  font-size: 16px;
  color: var(--color-white-light);
  font-weight: 700;
}

.primary:hover {
  background-color: var(--color-black-hover);
}

.ghost {
  border-radius: 4px;
  border: 1px solid var(--color-black);
  cursor: pointer;
  padding: 16px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-black);
}

.ghost:hover {
  background-color: var(--color-black-hover);
  color: var(--color-white-light);
}
</style>
