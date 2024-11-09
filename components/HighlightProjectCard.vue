<script setup lang="ts">
const animationImage = ref({
  from: {
    translateY: -200,
  },
  to: {
    translateY: 0,
    duration: 2.5,
    ease: 'elastic.inOut(1,0.3)',
  },
})
</script>

<template>
  <div id="projects">
    <AppCard>
      <div class="flex md:flex-row flex-col md:p-10 p-4 pb-0 overflow-hidden">
        <Animate scroll :creative-animation="animationImage">
          <div class="flex flex-shrink-0 items-center justify-center bg-gray-100 md:rounded-t-[2.7rem] rounded-[1.5rem] aspect-video md:w-1/2 w-full overflow-hidden">
            <img src="~/public/images/portfolio-1.png" class="w-full h-full object-cover object-center hover:scale-110 transition-transform" alt="project">
          </div>
        </Animate>
        <div class="flex flex-col justify-between md:w-1/2 w-full md:pl-8 md:mt-0 mt-4 text-white md:pb-0 pb-4">
          <div>
            <Animate scroll animation="split-word">
              <h3 class="font-bold md:text-2xl text-xl mb-4">
                Title Project
              </h3>
            </Animate>
            <Animate scroll animation="split-line">
              <p class="mb-4 md:text-lg text-sm leading-relaxed">
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Animate>
          </div>
          <div class="flex flex-wrap gap-2 font-semibold text-primaryDarken text-opacity-80 md:text-base text-xs">
            <!-- Placeholder Buttons or Tags -->
            <Animate scroll animation="slide-up" :scroll-behaviour="{ start: 'top 95%' }">
              <div class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                <p>Nuxt 2</p>
              </div>
              <div class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                Tailwind CSS
              </div>
              <div class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                PWA
              </div>
              <div class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                My Sql
              </div>
              <div class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                Laravel
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </AppCard>
  </div>
</template>
