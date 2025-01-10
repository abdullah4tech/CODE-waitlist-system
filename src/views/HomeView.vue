<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
import ComputerGuy from '@/components/ComputerGuy.vue';
import ServerIcon from '@/components/ServerIcon.vue';
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-blue-50 flex flex-col gap-16 p-10 px-36 w-[50%] overflow-hidden">
      <img :src="Logo" class="w-28" alt="Logo">
      <div class="text-4xl">
        <h1 class="leading-[1.450]">Nothing fits? <br> Here's the waitlist.</h1>
        <h1></h1>
        <p class="pt-7 text-sm font-poppins w-96">Tell us what kind of home you need and we'll reach you when it becomes available.</p>
        <div>
          <ComputerGuy class="w-80 p-0 h-80 " />
          <ServerIcon class="w-20 p-0 h-20" />
        </div>
      </div>
    </div>
    <div class="p-10 w-[45%] px-24 font-poppins flex flex-col">

      <!-- Header -->
      <div class="flex justify-between">
        <a href="">FAQ</a>
        <button>GO BACK HOME</button>
      </div>



    </div>
  </main>
</template>
