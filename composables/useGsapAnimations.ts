// composables/useGsapAnimations.ts
import SplitType from 'split-type'

export default function useGsapAnimations() {
  const { $gsap } = useNuxtApp()

  const registerAnimations = () => {
    // Split text if necessary
    const splitText = (selector: string) => new SplitType(selector)

    // Apply animations based on class names
    const animateElements = () => {
      const charElements = document.querySelectorAll('.reveal-char .char')
      const wordElements = document.querySelectorAll('.reveal-word .word')
      const lineElements = document.querySelectorAll('.reveal-line .line')

      $gsap.to(charElements, { y: 0, stagger: 0.03, duration: 1 })
      $gsap.to(wordElements, { y: 0, stagger: 0.1, duration: 1 })
      $gsap.to(lineElements, { y: 0, duration: 1 })

      const tl = $gsap.timeline()

      // Start the circle with scale 0.1 and animate up with bounce
      tl.from('#circle-main', {
        y: '100%',
        opacity: 0,
        scale: 0.1, // Initial scale set to 0.1
        ease: 'power.in',
        duration: 1,
      })
      // Squash effect on bounce
        .to('#circle-main', 0.2, {
          transformOrigin: '50% 100%',
          scaleY: 0.8,
          yoyo: true,
          repeat: 1,
        })
      // Simulate bounce by moving up and down
        .to('#circle-main', 0.5, {
          y: -400,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
        })
      // Another quick squash effect
        .to('#circle-main', 0.2, {
          transformOrigin: '50% 100%',
          scaleY: 0.8,
        })
      // Scale the circle to its original size
        .to('#circle-main', 0.5, {
          scale: 1, // Final scale to original size
          ease: 'power2.out',
        })
        .to('#circle-1', 0.5, {
          scale: 5, // Final scale to original size
          y: '100%',
          ease: 'power2.in',
        })
        .to('#circle-2', 0.2, {
          opacity: 1,
        })
        .to('#circle-3', 0.2, {
          opacity: 1,
        })
        .to('#circle-img', 0.2, {
          opacity: 1,
        })
        .to('#circle-content', 0.2, {
          opacity: 1,
        })
    }

    // Initialize text splitting and animations
    onMounted(() => {
      splitText('.reveal') // Split all elements with the class `reveal`
      animateElements()
    })
  }

  return { registerAnimations }
}
