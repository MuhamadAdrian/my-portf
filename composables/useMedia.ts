export function useMedia(query: string) {
  // Initialize as false for SSR
  const matches = ref(false)

  // Only run this code on client-side
  onMounted(() => {
    const media = window.matchMedia(query)
    matches.value = media.matches

    const onChange = () => {
      matches.value = media.matches
    }

    media.addEventListener('change', onChange)

    onUnmounted(() => {
      media.removeEventListener('change', onChange)
    })
  })

  return matches
}
