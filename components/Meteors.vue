<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.from('.meteor', {
    y: -200,
    transformOrigin: 'top',
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: 0.2,
    ease: 'power.in',
    // onComplete: () => {
    //   $gsap.utils.toArray('.meteor').forEach((meteor: any, index: number) => {
    //     const scrollFactor = 1 + index * 0.1 // Unique scroll speed factor for each meteor

    //     // Set up the parallax scroll effect from the current position
    //     $gsap.to(meteor, {
    //       // Adjust distance for a smooth parallax effect
    //       ease: 'none', // Linear ease for consistent speed during scroll
    //       scrollTrigger: {
    //         trigger: '.meteor-container',
    //         start: 'top bottom',
    //         scrub: true,
    //         end: 'bottom top', // Adjust to control the parallax range
    //         opacity: `-=${index * 0.1}`,
    //       },
    //     })
    //   })
    // },
  })
})
</script>

<template>
  <div class="mx-auto px-10 meteor-container md:w-full absolute md:top-[15%] top-60 w-[180%] h-full left-1/2 transform -translate-y-1/2 -translate-x-1/2" style="z-index: -1;">
    <svg width="100%" height="100%" viewBox="0 0 1235 795" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <g filter="url(#filter0_f_70_37)">
        <rect x="8" class="meteor" y="273" width="41" height="271" rx="20.5" fill="url(#paint0_linear_70_37)" />
        <rect x="1202" class="meteor" y="469" width="41" height="271" rx="20.5" fill="url(#paint1_linear_70_37)" />
        <rect x="848" class="meteor" y="532" width="41" height="271" rx="20.5" fill="url(#paint2_linear_70_37)" />
        <rect x="86" class="meteor" y="10" width="27" height="419" rx="13.5" fill="url(#paint3_linear_70_37)" />
        <rect x="970" class="meteor" y="50" width="27" height="419" rx="13.5" fill="url(#paint4_linear_70_37)" />
        <rect x="145" class="meteor" y="434" width="57" height="317" rx="28.5" fill="url(#paint5_linear_70_37)" />
        <rect x="49" class="meteor" y="643" width="57" height="137" rx="28.5" fill="url(#paint6_linear_70_37)" />
        <rect x="991" class="meteor" y="613" width="57" height="137" rx="28.5" fill="url(#paint7_linear_70_37)" />
        <rect x="1098" class="meteor" y="393" width="57" height="137" rx="28.5" fill="url(#paint8_linear_70_37)" />
        <rect x="261" class="meteor" y="166" width="32" height="239" rx="16" fill="url(#paint9_linear_70_37)" />
        <rect x="525" class="meteor" y="305" width="32" height="239" rx="16" fill="url(#paint10_linear_70_37)" />
        <rect x="1095" class="meteor" y="8" width="32" height="239" rx="16" fill="url(#paint11_linear_70_37)" />
        <rect x="729" class="meteor" y="393" width="32" height="239" rx="16" fill="url(#paint12_linear_70_37)" />
        <rect x="388" class="meteor" y="378" width="32" height="239" rx="16" fill="url(#paint13_linear_70_37)" />
        <rect x="837" class="meteor" y="202" width="32" height="239" rx="16" fill="url(#paint14_linear_70_37)" />
      </g>
      <defs>
        <filter id="filter0_f_70_37" x="0" y="0" width="1251" height="811" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_70_37" />
        </filter>
        <linearGradient id="paint0_linear_70_37" x1="38" y1="703" x2="49" y2="253.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_70_37" x1="1232" y1="899" x2="1243" y2="449.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_70_37" x1="878" y1="962" x2="889" y2="512.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_70_37" x1="105.756" y1="674.834" x2="145.579" y2="-18.2776" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_70_37" x1="989.756" y1="714.834" x2="1029.58" y2="21.7224" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear_70_37" x1="186.707" y1="936.989" x2="197.536" y2="411.098" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear_70_37" x1="90.7073" y1="860.38" x2="92.7305" y2="633.024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear_70_37" x1="1032.71" y1="830.38" x2="1034.73" y2="603.024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint8_linear_70_37" x1="1139.71" y1="610.38" x2="1141.73" y2="383.024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint9_linear_70_37" x1="284.415" y1="545.225" x2="295.375" y2="148.868" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint10_linear_70_37" x1="548.415" y1="684.225" x2="559.375" y2="287.868" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint11_linear_70_37" x1="1118.41" y1="387.225" x2="1129.37" y2="-9.13175" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint12_linear_70_37" x1="752.415" y1="772.225" x2="763.375" y2="375.868" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint13_linear_70_37" x1="411.415" y1="757.225" x2="422.375" y2="360.868" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint14_linear_70_37" x1="860.415" y1="581.225" x2="871.375" y2="184.868" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C1D890" />
          <stop offset="1" stop-color="#66724C" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
