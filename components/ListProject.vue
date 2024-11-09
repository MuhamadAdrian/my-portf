<script setup lang="ts">
const img = useImage()

const isMobile = useMediaQuery('(max-width: 768px)')

const projects = ref([
  {
    id: 1,
    name: 'Tajqwuiz - Quiz Tajwid Online',
    description: 'A fun application for learning recitation online, it can be used by teachers for their students to work together because there is a join room feature. No need to log in and just enter the appropriate name. This application also has settings for selecting which questions you want to appear in a room. So 1 room can have the same question. I made this application because I am also a Tajwid teacher',
    image: '/images/tajqwuiz.png',
    stacks: ['Nuxt 2', 'Tailwind CSS', 'Laravel', 'Postgree SQL', 'Nuxt Auth', 'PWA', 'With Sound'],
    href: 'https://tajqwuiz.madrians.dev',
  },
  {
    id: 2,
    name: 'Order App',
    description: 'The application is made fully interactive with entry and exit animations. Either when moving pages or adding items. Make users comfortable in using the application.',
    image: '/images/restaurant.png',
    stacks: ['React', 'Framer Motion', 'Tailwind CSS', 'React Context'],
    href: 'https://restaurant.madrians.dev',
  },
  {
    id: 3,
    name: 'SPP Payment',
    description: 'An application created to record student tuition payments. Has several features such as dashboards, master data for students, teachers, etc. There are several roles such as principal, teacher, administrative officer. The data export feature is clear and this is in the form of a Single Page Application',
    image: '/images/spp.png',
    stacks: ['Vue', 'Laravel', 'Inertia', 'Tailwind CSS', 'MySQL'],
    href: '#',
  },
])

function handleClickProject() {
  window.open('https://drive.google.com/file/d/1UWoXJX1eFBBVGmhUOX2RDpg8Id8wjuI4/view?usp=sharing', 'blank')
}
</script>

<template>
  <section class="mt-20 text-center">
    <Animate scroll animation="split-word" :delay="0" :scroll-behaviour="{ start: 'top 100%' }" :duration="900">
      <h2 class="font-bold md:text-[32px] text-left sm:text-2xl text-lg text-white md:mb-6 mb-4">
        My Projects
      </h2>
    </Animate>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
      <a v-for="project in projects" :key="project.id" :href="project.href" target="_blank" class="col-span-1 text-left hover:-translate-y-2 transition-all cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-3xl">
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
      </a>
    </div>

    <AppButton color="primary" variant="accent" :size="isMobile ? 'sm' : 'md'" class="mt-10" @click="handleClickProject">
      See All My Working on Project
    </AppButton>
  </section>
</template>
