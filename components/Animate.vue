<script setup lang="ts">
import { rand } from '@vueuse/core'
import type { AnimateScrollBehaviour, AnimationType, CreativeAnimation } from '~/types/animation'

interface Props {
  animation?: AnimationType
  duration?: number
  ease?: string
  stagger?: number
  scroll?: boolean
  scrollBehaviour?: AnimateScrollBehaviour
  delay?: number
  creativeAnimation?: CreativeAnimation
}

const {
  animation = 'slide-up',
  duration = 1000,
  stagger = 0.1,
  scroll = false,
  scrollBehaviour,
  ease,
  delay,
  creativeAnimation,
} = defineProps<Props>()

const slots = useSlots()
const { animate, splitText } = useGsapAnimations()

const elements = ref<any>()

onMounted(async () => {
  // Wait for DOM rendering
  await nextTick()

  const defaultSlot = slots.default?.()
  if (!defaultSlot)
    return

  // Populate `elements` with refs to the DOM nodes of the slot content
  elements.value = defaultSlot
    .map(item => item.el)
    // .filter(el => el) // Filter out any undefined values

  if (animation.includes('split-')) {
    elements.value.forEach((el: any) => {
      el.classList.add('split')
      splitText('.split')
    })
  }

  // setTimeout(() => {
  animate({
    targets: elements.value!,
    duration,
    stagger,
    animation,
    scroll,
    scrollBehaviour,
    ease,
    delay,
    creativeAnimation,
  })
  // }, 0.0000001)
})
</script>

<template>
  <slot />
</template>
