export const useMobile = defineStore('mobile', () => {
  const isMobile = computed(() => useMediaQuery('(max-width: 768px)'))

  return {
    isMobile,
  }
})
