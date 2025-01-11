<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
import ComputerGuy from '@/components/ComputerGuy.vue';
import ServerIcon from '@/components/ServerIcon.vue';
</script>

<template>
  <main class="flex h-screen">

    <!-- First Sidebar -->
    <div class="bg-blue-50 flex flex-col gap-16 p-10 px-36 w-[50%] fixed h-screen">
      <img :src="Logo" class="w-28" alt="Logo">
      <div class="text-4xl">
        <h1 class="leading-[1.450]">Nothing fits? <br> Here's the waitlist.</h1>
        <h1></h1>
        <p class="pt-7 text-sm font-poppins w-96">Tell us what kind of home you need and we'll reach you when it becomes available.</p>
        <div>
          <ComputerGuy class="w-80 p-0 h-80 " />
        </div>
      </div>
    </div>

    <!-- Second Sidebar -->
    <div class="ml-[50%] p-10 w-[48%] gap-16 px-16 font-poppins flex flex-col overflow-y-auto">

      <!-- Header -->
      <div class="flex items-center justify-between">
        <a href="#" class="hover:underline">FAQ</a>
        <button class="bg-black text-white text-xs hover:opacity-85 active:opacity-75 px-3 py-3 shadow-lg">GO BACK HOME</button>
      </div>

      <!-- Input Fields -->
      <div class="flex flex-col gap-5">
        <p class="font-medium">What home you need?</p>
        <div class="grid grid-cols-2 gap-7 text-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 transition-all outline-none rounded focus:border-black" placeholder="John Deo" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 transition-all outline-none rounded focus:border-black" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 outline-none transition-all rounded focus:border-black" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 outline-none transition-all rounded focus:border-black" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 outline-none transition-all rounded focus:border-black" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border-2 px-3 text-sm h-10 outline-none rounded focus:border-black transition-all" type="text">
          </div>
          <div class="flex flex-col col-span-2 gap-2">
            <label class="text-sm" for="">Full Name</label>
            <textarea name="" class="border-2 px-3 py-2 text-sm outline-none rounded focus:border-black transition-all" id=""></textarea>
          </div>
        </div>
        <div class="flex gap-2">
          <input id="check" class="size-4" color="red" type="checkbox">
          <label for="check" class="text-xs select-none">Yes, I would like to receive emails and text messages with news from CODESL</label>
        </div>
      </div>
      <div class="flex items-center justify-center -mt-8">
        <button class="bg-black hover:opacity-85 active:opacity-75 transition-all text-white text-xs px-9 py-3 shadow-md">SUBMIT TO WAITLIST</button>
      </div>
    </div>
  </main>
</template>
