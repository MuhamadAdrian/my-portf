<script setup lang="ts">
const img = useImage()

const isMobile = useMediaQuery('(max-width: 768px)')

const projects = ref([
  {
    id: 1,
    name: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque earum voluptatum at sequi nostrum quis modi fugit eveniet sint soluta eum, perferendis molestias ut explicabo quisquam deserunt adipisci similique.',
    image: '/images/portfolio-1.png',
    stacks: ['Test', 'test', 'test'],
  },
  {
    id: 2,
    name: 'Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque earum voluptatum at sequi nostrum quis modi fugit eveniet sint soluta eum, perferendis molestias ut explicabo quisquam deserunt adipisci similique.',
    image: '/images/portfolio-1.png',
    stacks: ['Test', 'test', 'test'],
  },
  {
    id: 3,
    name: 'Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque earum voluptatum at sequi nostrum quis modi fugit eveniet sint soluta eum, perferendis molestias ut explicabo quisquam deserunt adipisci similique.',
    image: '/images/portfolio-1.png',
    stacks: ['Test', 'test', 'test'],
  },
])
</script>

<template>
  <section class="mt-20 text-center">
    <Animate scroll animation="split-word" :delay="0" :scroll-behaviour="{ start: 'top 100%' }" :duration="900">
      <h2 class="font-bold md:text-[32px] text-left sm:text-2xl text-lg text-white md:mb-6 mb-4">
        Projects
      </h2>
    </Animate>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
      <div v-for="project in projects" :key="project.id" class="col-span-1 text-left hover:-translate-y-2 transition-all cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-3xl">
        <div class="hover:scale-[.9] transition-all">
          <NuxtImg :src="project.image" sizes="100vw sm:50vw md:34vw" class="rounded-2xl" :placeholder="img(project.image, { blur: 10, q: 50 })" />
          <div class="mt-4 text-white font-normal">
            <h3 class="text-xl font-semibold mb-2">
              {{ project.name }}
            </h3>
            <p class=" leading-relaxed text-gray-100 text-sm sm:text-base">
              {{ project.description }}
            </p>
            <div class="flex gap-1 flex-wrap text-primaryDarken font-semibold text-xs mt-2">
              <div v-for="stack in project.stacks" :key="stack" class="bg-gradient-to-r from-[#AEC185] to-[#c7df93] rounded-full py-1 px-4 flex items-center justify-start">
                <p>{{ stack }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppButton color="primary" variant="accent" :size="isMobile ? 'sm' : 'md'" class="mt-10">
      See All My Working on Project
    </AppButton>
  </section>
</template>
