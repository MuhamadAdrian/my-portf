export const useMobile = defineStore('mobile', () => {
  const isMobile = computed(() => useMedia('(max-width: 768px)'))

  return {
    isMobile,
  }
})
