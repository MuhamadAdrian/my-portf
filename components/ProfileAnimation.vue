<script setup lang="ts">
const { $gsap } = useNuxtApp()

function animateCircle() {
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

onMounted(() => {
  animateCircle()
})
</script>

<template>
  <div
    id="circle-main"
    class="relative w-full max-w-[52rem] mx-auto overflow-hidden rounded-full main-circle"
  >
    <div class="aspect-square relative overflow-hidden">
      <div
        id="circle-content"
        class="absolute inset-0 opacity-0 bg-[#CAD2B9] bg-opacity-90 rounded-full transform translate-y-full hover:translate-y-0 transition-transform duration-300 ease-in-out pseudo-content-layer"
      >
        <div class="absolute inset-0 flex justify-center z-10">
          <div class="text-center text-white sm:mt-[10%] mt-[40px]">
            <h2 class="sm:text-lg text-xs font-bold">
              Muhamad Adrian Seftiana
            </h2>
            <p class="mt-2 text-xs mb-5">
              See what's interesting about me
            </p>
            <AppButton color="secondary" variant="accent" size="sm">
              About Me
            </AppButton>
          </div>
        </div>
      </div>

      <!-- Circle Layers -->
      <div id="circle-1" class="bg-[#486D4B] absolute inset-0 rounded-full scale-[0.1]" />
      <div
        id="circle-2"
        class="bg-[#749960] opacity-0 absolute inset-0 w-[80%] h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <div
        id="circle-3"
        class="bg-[#AEC185] opacity-0 absolute inset-0 w-[65%] h-[65%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <NuxtImg
        id="circle-img"
        src="/images/profile.png"
        class="absolute inset-0 w-[55%] opacity-0 h-[55%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-center"
      />
    </div>
  </div>
</template>

<style scoped>
/* Maintain a square aspect ratio */
.aspect-square {
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  position: relative;
}

.pseudo-content-layer {
  z-index: 1;
}

.main-circle:hover .pseudo-content-layer {
  transform: translateY(60%);
}
</style>
