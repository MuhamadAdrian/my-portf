<template>
  <div class="relative bg-gradient-to-tr from-[#C1D890] to-50% to-transparent md:rounded-[3.5rem] rounded-[2.2rem]">
    <div class="w-2/6 h-2/6 z-[1] bg-[#91b976] blur-[78px] rounded-full absolute bottom-10 right-10" />
    <div class="w-2/6 h-2/6 z-[1] bg-[#91b976] blur-[78px] rounded-full absolute top-10 left-10" />
    <div class="relative bg-gradient-to-bl from-[#C1D890] to-50% to-transparent md:rounded-[3.5rem] rounded-[2.2rem] p-1">
      <div class="w-full h-full bg-greenArmy md:rounded-[3.4rem] rounded-[2rem]">
        <div class="relative z-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
