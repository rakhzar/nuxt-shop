<script setup lang="ts">
const { id, isShow } = defineProps<{
  id: number;
  isShow: boolean;
}>();
</script>

<template>
  <button v-show="isShow" class="fav-button">
    <Icon name="icons:favorite-add" size="19px" />
  </button>
</template>

<style scoped>
.fav-button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
