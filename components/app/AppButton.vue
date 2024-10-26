<script setup lang="ts">
interface Props {
  variant?: 'accent' | 'default'
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
}

const {
  variant = 'default',
  color = 'primary',
  size = 'md',
} = defineProps<Props>()

const classes = computed(() => {
  return `v-app-button v-app-button-${variant} v-app-button-${variant}-${color} v-app-button-${size} v-app-button-${color}`
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style src="~/assets/css/components/button.css" scoped></style>
