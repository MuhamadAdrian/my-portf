<script setup lang="ts">
const { $gsap } = useNuxtApp()

const isMobile = useMediaQuery('(max-width: 768px)')

const isExpanded = ref(false) // Track the current state of the animation
const showDesc = ref(false)

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

async function showDescription() {
  const tl = $gsap.timeline()

  showDesc.value = !showDesc.value

  await nextTick()

  if (!isExpanded.value) {
    // Expand animation
    tl.to('#circle-main', 1, {
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
  }
  else {
    // Reverse (contract) animation
    tl.to('#description', 0.5, {
      opacity: 0,
      ease: 'power2.inOut',
    })
      .to('#circle-main', 1, {
        x: '0%',
        y: '0%',
        scale: 1,
        ease: 'power2.inOut',
      })
  }

  isExpanded.value = !isExpanded.value // Toggle the state
}

onMounted(() => {
  animateCircle()
})
</script>

<template>
  <div class="relative">
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
              <AppButton color="secondary" variant="accent" size="sm" @click="showDescription">
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
    <div
      v-if="showDesc"
      id="description"
      class="text-left opacity-0 md:-z-10 leading-relaxed transform md:translate-y-full md:mt-5 md:absolute md:top-28 md:right-0 md:max-w-[60%]"
    >
      <h3 class="md:text-3xl text-xl font-bold">
        Muhamad Adrian Seftiana
      </h3>
      <p class="md:text-xl text-base mb-4 font-semibold">
        Frontend Developer
      </p>
      <p class="mb-4 text-sm sm:text-base">
        I'm 22 years old now. And I'm a handyman who specializes in writing code haha. I can't mix cement but I can glue it together with Tailwind CSS, Vue, Nuxt and others to build a magnificent, luxurious and comfortable house.
      </p>
      <p class="mb-4 text-sm sm:text-base">
        I like the interface which is not stiff, looks flowless and animated.
      </p>
      <p class="text-sm sm:text-base">
        But the most important thing about it all is that I like helping people, but I need to be paid lol. I'm happy to be able to help with something I've never done before, and I'm able to do it thanks to that. That was a big payout for me. It's nice to see other people happy, stepping up to help when they need it.
      </p>
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
