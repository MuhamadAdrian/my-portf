import SplitType from 'split-type'
import type { AnimateParams } from '~/types/animation'

export default function useGsapAnimations() {
  const { $gsap } = useNuxtApp()

  const splitText = (selector: string) => new SplitType(selector)

  const animationOption = ref()
  const animationTargetEl = ref<any[]>([])

  function animate({ animation, targets, duration, ease, stagger, scroll, scrollBehaviour, delay, creativeAnimation }: AnimateParams) {
    if (animation === 'slide-up') {
      animationTargetEl.value = targets
      animationOption.value = {
        from: {
          opacity: 0,
          y: 50,
        },
        to: {
          opacity: 1,
          y: 0,
          stagger,
          delay,
          duration: duration / 1000,
          ease,
          scrollTrigger: {
            trigger: targets[0],
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        },
      }
    }

    else if (animation.includes('split-')) {
      const revealType = animation.split('-')[1]

      targets.forEach((target) => {
        const splittedElements = target?.querySelectorAll(`.${revealType}`)

        splittedElements.forEach((el: any) => {
          animationTargetEl.value.push(el)
        })
      })

      animationOption.value = {
        from: {
          opacity: 0,
          y: 200,
        },
        to: {
          y: 0,
          opacity: 1,
          stagger,
          delay,
          duration: duration / 1000,
          ease,
          scrollTrigger: {
            trigger: targets[0],
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        },
      }
    }

    const { scrollTrigger, ...rest } = animationOption.value.to

    if (scrollBehaviour) {
      scrollTrigger.start = scrollBehaviour?.start ?? scrollTrigger.start
      scrollTrigger.toggleActions = scrollBehaviour?.toggleActions ?? scrollTrigger.toggleActions
    }

    if (!creativeAnimation) {
      $gsap.fromTo(animationTargetEl.value, animationOption.value.from, !scroll ? rest : { ...rest, scrollTrigger })
    }

    else {
      scrollTrigger.trigger = animationTargetEl.value
      if (creativeAnimation.from && creativeAnimation.to) {
        $gsap.fromTo(animationTargetEl.value, creativeAnimation.from, !scroll ? creativeAnimation.to : { ...creativeAnimation.to, scrollTrigger })
      }
      else if (creativeAnimation.from) {
        $gsap.from(animationTargetEl.value, !scroll ? creativeAnimation.from : { ...creativeAnimation.from, scrollTrigger })
      }
      else {
        $gsap.to(animationTargetEl.value, !scroll ? creativeAnimation.to : { ...creativeAnimation.to, scrollTrigger })
      }
    }
  }

  return { animate, splitText }
}
