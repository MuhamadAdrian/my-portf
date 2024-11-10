<script setup lang="ts">
// import { useProfile } from '~/store/useProfile'

// const useProfileStore = useProfile()

// const { isAnimated, isExpanded } = storeToRefs(useProfileStore)

const menuItems = useTemplateRef<HTMLAnchorElement[]>('menu-item')
const menuIndicator = useTemplateRef('menu-indicator')

const router = useRouter()

function handleToSection(to: string) {
  router.push(to)
}

const openProfile = ref(false)
const links = ref([
  {
    name: 'Home',
    path: '/',
    action: handleToSection,
  },
  {
    name: 'Profile',
    path: '#profile',
    action: handleClickProfile,
  },
  {
    name: 'Projects',
    path: '#projects',
    action: handleToSection,
  },
  // {
  //   name: 'Contact',
  //   path: '#contact',
  //   action: handleToSection,
  // },
])

function handleClickProfile(to: string) {
  handleToSection(to)

  // openProfile.value = true

  // if (!isAnimated.value)
  //   useProfileStore.showDescription()
}

const route = useRoute()

// watch([() => route.hash, openProfile], ([val, isOpenProfile]) => {
//   if (val === '#profile') {
//     if (!isAnimated.value && isOpenProfile) {
//       useProfileStore.showDescription()
//       openProfile.value = false
//     }
//   }
//   else {
//     if (isExpanded.value) {
//       useProfileStore.showDescription()
//     }
//   }
// })

const idxActive = ref(0)

function initializeActiveIndicator() {
  const transition = 200
  if (menuIndicator.value && menuItems.value?.[0]) {
    menuIndicator.value.style.left = `${menuItems.value[0].offsetLeft}px`
    menuIndicator.value.style.width = `${menuItems.value[0].offsetWidth}px`

    menuItems.value.forEach((item, idx) => {
      item.addEventListener('click', (e) => {
        e.preventDefault()

        if (idxActive.value < idx && menuIndicator.value) {
          let width = 0
          for (let i = idxActive.value; i <= idx; i++) {
            width += menuItems.value?.[i]?.offsetWidth ?? 0
          }
          menuIndicator.value.style.width = `${width}px`
          setTimeout(() => {
            if (menuIndicator.value) {
              menuIndicator.value.style.left = `${item.offsetLeft}px`
              menuIndicator.value.style.width = `${item.offsetWidth}px`
            }
          }, transition)
        }
        else if (idxActive.value > idx) {
          let width = 0
          for (let i = idxActive.value; i >= idx; i--) {
            width += menuItems.value?.[i]?.offsetWidth ?? 0
          }
          if (menuIndicator.value) {
            menuIndicator.value.style.width = `${width}px`
            menuIndicator.value.style.left = `${item.offsetLeft}px`
          }
          setTimeout(() => {
            if (menuIndicator.value) {
              menuIndicator.value.style.width = `${item.offsetWidth}px`
            }
          }, transition)
        }

        idxActive.value = idx
      })
    })
  }
}

onMounted(() => {
  if (route.hash === '#profile') {
    openProfile.value = true
  }

  router.push(route.hash)

  initializeActiveIndicator()
})
</script>

<template>
  <header
    class="sticky top-0 sm:py-6 py-4 bg-mainBackground bg-opacity-60 backdrop-blur-md z-50"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="#" class="md:text-2xl sm:text-lg text-base font-bold text-white">
          MADRIANS.DEV
        </NuxtLink>
        <ul class="sm:flex items-center gap-8 text-white font-medium hidden relative">
          <li v-for="(link, index) in links" :key="index">
            <a ref="menu-item" :href="link.path" @click="link.action(link.path)">
              {{ link.name }}
            </a>
          </li>
          <div ref="menu-indicator" class="menu-indicator" />
        </ul>
      </div>
    </div>
  </header>
  <main class="container mx-auto px-4 relative">
    <slot />
  </main>
</template>

<style scoped lang="css">
.menu-indicator {
  @apply absolute bottom-0 left-0 w-[3rem] h-[.15rem] rounded-lg bg-white transition-all duration-200;
}
</style>
