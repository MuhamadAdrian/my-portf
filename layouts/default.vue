<template>
  <header
    class="sticky top-0 sm:py-6 py-4 bg-mainBackground bg-opacity-60 backdrop-blur-md z-50"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="#" class="md:text-2xl sm:text-lg text-base font-bold text-white">
          MADRIANS.DEV
        </NuxtLink>
        <ul class="sm:flex items-center gap-8 text-white font-medium hidden">
          <li>
            <NuxtLink>Home</NuxtLink>
          </li>
          <li><NuxtLink>About Me</NuxtLink></li>
          <li><NuxtLink>Portfolio</NuxtLink></li>
          <li><NuxtLink>Contact</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
  <main class="container mx-auto px-4 relative">
    <slot />
  </main>
  <footer>footer</footer>
</template>
