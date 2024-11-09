<script setup lang="ts">
import type { HighlightProject } from '~/types/highlightProject'

const highlightProjects = ref<HighlightProject[]>([
  {
    id: '1',
    image: 'image.png',
    title: 'Title Project',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, sint voluptate. Minima commodi delectus iste assumenda molestiae accusamus totam saepe aliquid, vitae consequuntur, quae voluptas modi iusto nemo quo aperiam.',
    tools: ['Nuxt 3', 'Tailwind CSS', 'Laravel', 'My Sql'],
  },
])
</script>

<template>
  <section class="text-center text-white md:mt-40 mt-20 z-10">
    <Animate animation="split-word" :duration="600" :stagger="0.1">
      <h1 class="lg:text-8xl md:text-6xl text-4xl font-bold">
        Bring More Values
      </h1>
      <h2 class="lg:text-6xl md:text-4xl text-2xl font-bold mt-4">
        Then Scale the Impact
      </h2>
      <p
        class="lg:text-2xl md:text-lg md:mt-8 mt-4 lg:max-w-4xl mx-auto leading-relaxed"
      >
        I am a Frontend developer. And I like helping many people. Everyone must
        be helped without exception
      </p>
    </Animate>

    <ProfileAnimation class="mt-10" />
    <Meteors />
  </section>

  <section class="mt-10">
    <Animate scroll animation="split-word" :delay="0" :scroll-behaviour="{ start: 'top 100%' }" :duration="900">
      <h2 class="font-bold md:text-[32px] sm:text-2xl text-lg text-white md:mb-6 mb-4">
        Highlighted Project
      </h2>
    </Animate>
    <HighlightProjectCard :data="highlightProjects[0]" />
  </section>

  <ListProject />
</template>

<style scoped>
.meteor {
  @apply !blur-2xl;
}
</style>
