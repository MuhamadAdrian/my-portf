import { useMobile } from './useMobile'

export const useProfile = defineStore('profile', () => {
  const showDesc = ref(false)
  const isExpanded = ref(false)
  const isAnimated = ref(false)

  const { $gsap } = useNuxtApp()
  const { isMobile } = useMobile()

  async function showDescription() {
    isAnimated.value = true
    const tl = $gsap.timeline()

    if (!isExpanded.value) {
      showDesc.value = !showDesc.value
      await nextTick()

      // Expand animation
      tl.to('#profile', 1, {
        x: isMobile.value ? '0%' : '-50%', // No horizontal shift on mobile
        y: isMobile.value ? '-50%' : '-40%', // Move slightly upwards on mobile
        scale: 0.5,
        ease: 'power2.inOut',
      })
        .to('#description', 0.5, {
          opacity: 1,
          y: isMobile ? '-20%' : '50px',
          ease: 'power2.out',
        })

      $gsap.from('.icon-stack', {
        y: '50px',
        opacity: 0,
        ease: 'poser2.out',
        stagger: 0.2,
        onComplete() {
          isAnimated.value = false
        },
      })
    }
    else {
      // Reverse (contract) animation
      tl.to('#description', 0.5, {
        opacity: 0,
        ease: 'power2.inOut',
      })
        .to('#profile', 1, {
          x: '0%',
          y: '0%',
          scale: 1,
          ease: 'power2.inOut',
          onComplete() {
            showDesc.value = !showDesc.value
            isAnimated.value = false
          },
        })
    }

    isExpanded.value = !isExpanded.value // Toggle the state
  }

  return {
    showDescription,
    showDesc,
    isExpanded,
    isAnimated,
  }
})
